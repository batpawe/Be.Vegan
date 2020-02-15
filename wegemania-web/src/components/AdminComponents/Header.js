import React from "react";
import {
  HeaderOrderedList,
  HeaderUnorderedList,
  HyperLink,
  HeaderItem
} from "../../styles/AdminPanelStyle";
const Header = () => {
  return (
    <div>
      <h1>Panel Administracyjny:</h1>
      <HeaderOrderedList>
        <HeaderUnorderedList>
          <HeaderItem>
            <HyperLink to="/acceptrestaurations">
              Zgłoszenia restauracji
            </HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="/acceptproducts">Zgłoszenia produktów</HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="/acceptreplacements">
              Zgłoszenia zamienników
            </HyperLink>
          </HeaderItem>
        </HeaderUnorderedList>
        <HeaderUnorderedList>
          <HeaderItem>
            <HyperLink to="notificationposts">Zgłoszone posty</HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="notificationrestaurations">
              Zgłoszone restauracje
            </HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="notificationproducts">Zgłoszone produkty</HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="notificationreciptes">Zgłoszone przepisy</HyperLink>
          </HeaderItem>
          <HeaderItem>
            <HyperLink to="notificationreplacements">
              Zgłoszone zamienniki
            </HyperLink>
          </HeaderItem>
        </HeaderUnorderedList>
      </HeaderOrderedList>
    </div>
  );
};
export default Header;
