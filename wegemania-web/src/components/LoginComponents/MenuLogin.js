import React, { useContext, useState } from "react";
import {
  MenuList,
  MenuListLink,
  MenuUnorderedList,
  NavOrderedList,
  UserMenuList,
  UserName,
  UserOption,
  UserActions,
  HyperLink
} from "../../styles/MenuLoginStyle";
import { NewLoginInfo } from "../../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from "../../icons/ikona.ico";
import { NewNotifyContext } from "../../context/Notify";
const UserPanel = ({ click }) => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [clicked, setClicked] = useState(click);

  const userSettings = () => {
    setClicked(prev => !prev);
    notify.changeMargin();
  };
  const userLogout = () => {
    user.logout();
    return <Redirect to="/register" />;
  };

  return (
    <UserMenuList>
      <li>
        {console.log("USER USER")}
        <UserName onClick={userSettings}>{user.userInfo.name}</UserName>
      </li>
      {clicked === true && (
        <UserActions>
          <UserOption>
            <HyperLink to={`/users/${user.userInfo.id}`}>Profil</HyperLink>
          </UserOption>
          <UserOption onClick={userLogout}>Wyloguj</UserOption>
        </UserActions>
      )}
    </UserMenuList>
  );
};
const Header = () => {
  const user = useContext(NewLoginInfo);

  return (
    <div>
      {user.userInfo === undefined ? (
        <header className="header">
          <img style={{ width: 50, height: 50 }} src={icon} />
          <nav style={{ width: "100%" }}>
            <MenuUnorderedList>
              <MenuList>
                <MenuListLink to="/">Zaloguj</MenuListLink>
              </MenuList>
              <MenuList>
                <MenuListLink to="/register">Zarejestruj</MenuListLink>
              </MenuList>
              <MenuList>
                <MenuListLink to="/about">O nas</MenuListLink>
              </MenuList>
            </MenuUnorderedList>
          </nav>
        </header>
      ) : (
        <header className="header">
          <nav style={{ width: "100%" }}>
            >
            <NavOrderedList>
              <MenuUnorderedList>
                <MenuList>
                  <MenuListLink to="/wall">Tablica</MenuListLink>
                </MenuList>
                <MenuList>
                  <MenuListLink to="/posts">Posty</MenuListLink>
                </MenuList>
                <MenuList>
                  <MenuListLink to="/restaurants">Restauracje</MenuListLink>
                </MenuList>
                {/*}
                <MenuList>
                  <MenuListLink to="/products">Produkty</MenuListLink>
                </MenuList>
                {*/}
                <MenuList>
                  <MenuListLink to="/recipes">Przepisy</MenuListLink>
                </MenuList>
                <MenuList>
                  <MenuListLink to="/replacements">Zamienniki</MenuListLink>
                </MenuList>
                <MenuList>
                  <MenuListLink to="/about">O weganizmie</MenuListLink>
                </MenuList>
              </MenuUnorderedList>
              <UserPanel click={false} />
            </NavOrderedList>
          </nav>
        </header>
      )}
    </div>
  );
};
export default Header;
