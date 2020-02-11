import styled from "styled-components";
import { Link } from "react-router-dom";
export const LocalContainer = styled.ol`
  padding: 2em;
  margin: 10em 2em 0 0;
  background: white;
`;
export const UnorderedList = styled.ul`
  list-style-type: none;
  margin-top: 2em;
  font-size: 18px;
`;
export const HeaderText = styled.h1`
  font-size: 20px;
`;
export const HyperLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const Image = styled.img`
  width: 300px;
  height: 200px;
`;
export const BoldText = styled.span`
  font-weight: bold;
`;
