import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background: white;
  width: 90%;
  padding: 1%;
  min-height: 70vh;
  margin: 10% auto auto auto;
`;
export const HeaderOrderedList = styled.ol`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
`;
export const HeaderUnorderedList = styled.ul`
  display: flex;
  margin: 2% 0 0 0;
  list-style-type: none;
  font-size: 20px;
  padding: 1%;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderItem = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100px;
  width: 230px;
  background: #00a84e;
`;
export const HyperLink = styled(Link)`
  color: white;
  align-items: center;

  display: block;
  margin: auto;

  :hover {
    text-decoration: none;
    text-shadow: 0 0 1px white, 0 0 1px white;
    color: white;
  }
`;
export const Icon = styled.img`
  width: 25px;
  margin: 0 2% 0 0;
  cursor: pointer;
  display: block;
`;
export const AdministrationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const AdministrationActions = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  margin: 8% 0 0 0;
`;
