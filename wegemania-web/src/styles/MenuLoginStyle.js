import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../images/web2.png";
export const UserActions = styled.div`
  background: white;
  padding: 1%;
`;

export const MenuList = styled.li`
  cursor: pointer;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  margin-right: 1%;
  :hover {
    font-weight: bold;
  }
`;
export const MenuListLink = styled(Link)`
  color: white;
  background: #2c8434;
  display: inline-block;
  font-size: 15px;
  color: white;
  width: 140px;
  opacity: 0.7;
  margin: 0 0 0 0;
  padding: 8% 0 8% 0;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  :hover,
  :focus {
    background: #2e8438;
    opacity: 1;
    color: white;
    text-decoration: none;
  }
`;
export const MenuUnorderedList = styled.ul`
  display: flex;
  list-style: none;
   {
    /*}
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  {*/
  }
`;
export const NavOrderedList = styled.ol`
  list-style: none;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: baseline;
  width: 90vw;
   {
    /*
  }
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
{*/
  }
`;
export const UserMenuList = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 0;
`;

export const UserName = styled.p`
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  color: white;
  background: #27752e;
  transition: border-radius 0.3s;
  :hover {
    border-radius: 20px;
  }
`;
export const HyperLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
`;
export const UserOption = styled.li`
  color: #EBF5EF;
  animation-name: example;
  animation-duration: 1.1s;
  animation-fill-mode: forwards;
  :hover{
    font-weight:bold;
  }
@keyframes example {
  from {
    color: white;
  }
  to {
    color: black;
  }
`;
