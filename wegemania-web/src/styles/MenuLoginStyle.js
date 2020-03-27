import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../images/web2.png";
export const UserActions = styled.div`
  background: white;
  padding: 1%;
`;

export const MenuList = styled.li`
  display: inherit;
  align-items: center;
  justify-content: center
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin-right: 1%;
  :hover {
    font-weight: ;
  }
`;
export const MenuListLink = styled(Link)`
  display: block;
  padding: 3%;
  color: white;
  background: #0;
  font-size: 25px;
  color: white;
  opacity: 0.7;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  :hover,
  :focus {
    background: #2e8438;
    opacity: 0.8;
    color: white;
    text-decoration: none;
  }
`;
export const MenuUnorderedList = styled.ul`
  display: block ruby;
  margin-bottom: 0;
  padding-left: 20px;
  list-style: none;
   {
    /*}
  display: flex;
  margin-top: auto;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  {*/
  }
`;
export const NavOrderedList = styled.div`
  list-style: none;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: flex-end;
  width 1400px;
   {
    /*
  }
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
  margin: 0;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
{*/
  }
`;
export const UserMenuList = styled.ul`
  margin-left: auto;
  margin-bottom: 0;
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
