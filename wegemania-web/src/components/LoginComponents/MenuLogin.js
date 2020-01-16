import React, { useContext, useState } from "react";
import {
  MenuList,
  MenuListLink,
  MenuUnorderedList,
  NavOrderedList,
  UserMenuList,
  UserName,
  UserOption
} from "../../styles/MenuLoginStyle";
import { NewLoginInfo } from "../../context/LoginInfo";
import {Redirect} from "react-router-dom"
import icon from "../../icons/ikona.ico"
const Test = ({ click }) => {
  const user = useContext(NewLoginInfo);
  const [clicked, setClicked] = useState(click);

  const userSettings = () => {
    setClicked(prev => !prev);
  };
  const userLogout = () => {
    user.logout();
    return <Redirect to="/register"/>
  };

  return (
    <UserMenuList>
      <UserName onClick={userSettings}>{user.username}</UserName>
      {clicked === true && (
        <div>
          <UserOption> Profil</UserOption>
          <UserOption onClick={userLogout}>Wyloguj</UserOption>
        </div>
      )}
    </UserMenuList>
  );
};
const Header = () => {
  const user = useContext(NewLoginInfo);

  return (
    <header className="header">
    <img style={{width:25,height:25}} src={icon}/>
      {user.username === "" ? (
        <nav>
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
      ) : (
        <nav>
          <NavOrderedList>
            <Test click={false} />
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
              <MenuList>
                <MenuListLink to="/products">Produkty</MenuListLink>
              </MenuList>
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
          </NavOrderedList>
        </nav>
      )}
    </header>
  );
};
export default Header;
