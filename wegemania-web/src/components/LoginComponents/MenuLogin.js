import React, { useContext, useState, useEffect } from "react";
import {
  MenuList,
  MenuListLink,
  MenuUnorderedList,
  NavOrderedList,
  UserMenuList,
  UserName,
  UserOption,
  UserActions,
  HyperLink,
} from "../../styles/MenuLoginStyle";
import { NewLoginInfo } from "../../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from "../../icons/ikona.ico";
import { NewNotifyContext } from "../../context/Notify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LogoVeggies from "../../images/NazwaVeggies.png";
const UserPanel = ({ click }) => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [clicked, setClicked] = useState(click);
  const userSettings = () => {
    setClicked((prev) => !prev);
    notify.changeMargin();
  };
  const userLogout = () => {
    user.logout();
    return <Redirect to="/register" />;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${user.Api}/me/`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: `Token ${user.userInfo.token}`,
        },
      });
      user.setStaff(result.data.is_staff);
    };
    fetchData();
  }, [user]);
  return (
    <UserMenuList style={{ position: "relative" }}>
      {console.log(user.userInfo.is_staff)}
      {clicked !== true ? (
        <li>
          {console.log("USER USER")}
          <UserName
            onClick={() => {
              user.openPanel(!user.isOpen);
            }}
          >
            {user.userInfo.name}
          </UserName>
        </li>
      ) : (
        <li>
          {console.log("USER USER")}
          <UserName
            style={{ background: "#27752e" }}
            onClick={() => {
              user.openPanel(!user.isOpen);
            }}
          >
            {user.userInfo.name}
          </UserName>
        </li>
      )}

      {user.isOpen === true && (
        <UserActions style={{ position: "absolute" }}>
          <UserOption>
            <HyperLink
              to={`/users/${user.userInfo.id}`}
              style={{ "font-size": "12px" }}
            >
              Profil
            </HyperLink>
          </UserOption>
          {user.isStaff && (
            <UserOption
              style={{
                "font-size": "14px",
              }}
            >
              <HyperLink to={`/adminpanel`} style={{ "font-size": "12px" }}>
                Panel Administracyjny
              </HyperLink>
            </UserOption>
          )}

          <UserOption style={{ "font-size": "12px" }} onClick={userLogout}>
            Wyloguj
          </UserOption>
        </UserActions>
      )}
    </UserMenuList>
  );
};
const Header = (props) => {
  let location = useLocation();
  const user = useContext(NewLoginInfo);
  console.log("PPP");
  console.log(props);
  return (
    <div>
      {user.userInfo === undefined ? (
        <header
          className="header"
          style={{ "justify-content": "space-between" }}
        >
          <MenuListLink to="/">
            <img style={{ width: 100, height: 50 }} src={LogoVeggies} />
          </MenuListLink>
          <nav style={{ width: "70%" }}>
            <MenuUnorderedList style={{ justifyContent: "flex-end" }}>
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
        <header className="header" style={{ padding: "0 1%" }}>
          <div class={{ padding: "1% 0" }}>
            <MenuListLink to="/wall">
              <img style={{ height: 50 }} src={LogoVeggies} />
            </MenuListLink>
          </div>
          <nav style={{ width: "100%" }}>
            <NavOrderedList>
              <MenuUnorderedList>
                {/*}
                <MenuList>
                  <MenuListLink to="/wall">Tablica</MenuListLink>
                </MenuList>
                {*/}
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
            </NavOrderedList>
          </nav>
          <UserPanel click={false} />
        </header>
      )}
    </div>
  );
};
export default Header;
