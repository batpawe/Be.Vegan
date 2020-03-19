import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background: rgba(255, 255, 255, 0.2);
  font-size: 20px;
  margin: 10% auto 0 auto;
  max-width: 80vw;
  padding: 2%;
  color: black;
`;
export const HelloMessage = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;
export const UnorderedListProfile = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: black;
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
  border: 3px solid #27ae60;
  padding: 1%;
  margin: 1% 0 0 0;
  flex-wrap: wrap;
  list-style-type: none;
`;
export const EditProfileButton = styled(Link)`
  color: white;
  text-decoration: none;
  background: #27ae60;
  padding: 1%;
  min-width: 150px;
  font-size: 14px;
  :hover,
  :active {
    text-shadow: 0 0 1px white, 0 0 1px white;
    background: #2ecc71;
    color: white;
    text-decoration: none;
  }
`;
export const EditProfileContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  margin: 8% auto auto auto;
  width: 90%;
  font-size: 18px;
  padding: 5%;
  display: flex;
  color: black;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
export const InputText = styled.input`
  outline: none;
  border: 1px solid black;
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
export const InputsContainer = styled.div`
  width: 100%;
  padding: 2%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 46%;
  align-items: center;
`;
export const NumberInput = styled.input`
  width: 50px;
  border: 1px solid black;
`;
export const UserName = styled.p`
  background: #27ae60;
  color: white;
  margin: 0;
  padding: 1% 1% 0 1%;
  display: block;
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
`;
