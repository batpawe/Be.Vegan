import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../images/web2.png";
export const UserActions = styled.div`
  background: white;
  padding: 1%;
  position: absolute;
  width: 200px;
  text-align: center;
  border-radius: 5px;
`;

export const MenuList = styled.li`
   {
    /*}
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
{*/
  }
  display: flex;
  align-items: center;
  margin: 0 1% 0 1%;
`;
export const MenuListLink = styled(Link)`
   {
    /*}
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
  {*/
  }
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  color: white;
  opacity: white;
  :hover,
  :focus {
    background: #2e8438;
    color: white;
    text-decoration: none;
    border-radius: 15px;
  }
`;
export const MenuUnorderedList = styled.ul`
   {
    /*}
  display: block ruby;
  margin-bottom: 0;
  padding-left: 20px;
  list-style: none;
  display: flex;
  white-space: nowrap;
 
  display: flex;
  margin-top: auto;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  {*/
  }
  display: flex;
  height: 76px;
  padding: 0;
  margin: 0;
  white-space: nowrap;
`;
export const NavOrderedList = styled.div`
  list-style: none;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: baseline;
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

export const UserName = styled.button`
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  color: white;
  background: #27752e;
  transition: border-radius 0.3s;
  :focus {
    outline: none;
  }
  :hover {
    border-radius: 20px;
  }
`;
export const HyperLink = styled(Link)`
  color: black;
  width: 100%;
  display: block;
  border-bottom: 1px solid #8d8c91;
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
