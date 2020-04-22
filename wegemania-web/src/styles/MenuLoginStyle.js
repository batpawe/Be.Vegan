import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../images/web2.png";
export const UserActions = styled.div`
  background: white;
  padding: 1%;
  overflow: auto;

  position: absolute;
  width: 100%;
  text-align: center;
  border-bottom-right-radius: 15px;
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
  font-size: 19px;
  color: white;
  padding: 0 10px 0 10px;
  opacity: white;
  :hover,
  :focus {
    /*
    background: #2e8438;
    color: white;
    text-decoration: none;
    border-radius: 15px;
    */

    color: #4caf50;
    text-decoration: none;
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
  padding: 0;
  margin: 0;
  white-space: nowrap;
  width: 100%;
  justify-content: center;
`;
export const NavOrderedList = styled.div`
  list-style: none;
  display: flex;
  margin: auto;
  justify-content: center;
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
  box-sizing: border-box;
  text-align: center;
  outline: none;
  overflow: auto;
  border: none;
  color: white;
  border-top-left-radius: 15px;
  background: none;
  transition: border-radius 0.7s;
  transition: background 0.7s;
  :focus {
    outline: none;
  }
  :hover {
    /*border: 1px solid black;*/
    box-sizing: border-box;
    background: #27752e;

    /* border-radius: 20px; */
  }
`;
export const HyperLink = styled(Link)`
  color: black;
  width: 100%;
  display: block;
  border-bottom: 1px solid rgb(141, 140, 145);
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: black;
  }
`;
export const UserOption = styled.li`
  color: black;
  :hover {
    text-shadow: 0.25px 0px 0.1px, -0.25px 0px 0.1px;
  }
`;
