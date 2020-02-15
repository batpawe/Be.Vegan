import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background: white;
  font-size: 20px;
  margin: 10% auto 0 auto;
  max-width: 80vw;
  padding: 2%;
`;
export const HelloMessage = styled.h1`
  font-size: 22px;
`;
export const UnorderedListProfile = styled.ul`
  list-style-type: none;
`;
export const UserProfileItem = styled.li`
  margin: 3% 0 0 0;
`;

export const UserProfileItemRow = styled.li`
  margin: 3% 0 0 0;
  width: 50%;
`;
export const UnorderedFlexList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;
export const EditProfileButton = styled(Link)`
  color: white;
  text-decoration: none;
  background: #27ae60;
  padding: 1%;
  min-width: 300px;
  :hover,
  :active {
    text-shadow: 0 0 1px white, 0 0 1px white;
    background: #2ecc71;
    color: white;
    text-decoration: none;
  }
`;
export const EditProfileContainer = styled.div`
  background: white;
  margin: 8% auto auto auto;
  max-width: 90%;
  font-size: 18px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputText = styled.input`
  outline: none;
`;
export const Button = styled.button`
  color: white;
  background: #27ae60;
  margin: 2% auto auto auto;
  padding: 2%;
  font-size: 18px;
  border: 1px black solid;
  :hover {
    font-weight: bold;
    background: #2ecc71;
  }
`;
