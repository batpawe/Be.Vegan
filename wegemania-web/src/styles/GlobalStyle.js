import styled from "styled-components";
import { Link } from "react-router-dom";
export const LocalContainer = styled.ol`
  padding: 0.2em;
  background: rgba(255, 255, 255, 0.3);
  max-width: 360px;
  border-radius: 2px;
`;
export const UnorderedList = styled.ul`
  list-style-type: none;
  color: black;
  margin-top: 2em;
  font-size: 18px;
`;
export const HeaderText = styled.h1`
  font-size: 20px;
  color: black;
`;
export const HyperLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    color: black;
    text-decoration: none;
  }
`;
export const Image = styled.img`
  width: 300px;
  height: 200px;
`;
export const BoldText = styled.span`
  font-weight: bold;
`;
export const BoldItem = styled.li`
  font-size: 18px;
  font-weight: bold;
`;
export const Item = styled.li`
  margin: 4% 0 0 0;
`;
export const GlobalContainer = styled.div`
  margin: 100px 1% 0 1%;
  
`;
export const SearchPanel = styled.div`
  padding: 1%;
  margin: auto auto 1% auto;
  justify-content: space-between;
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  
`;
export const SearchInput = styled.input`
  min-height: 50px;
  width: 180px;
  font-size: 12px;
  display: block;
  outline: none;
  padding: 1%;
  border: 1px solid black;
`;
export const SearchButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  background: #27ae60;
  font-size: 14px;
  width: 120px;
  text-align: center;
  padding: 2%;
  :hover {
    text-shadow: 0 0 1px white, 0 0 1px white;
    background: #2ecc71;
    color: white;
    text-decoration: none;
  }
  cursor: pointer;
`;
