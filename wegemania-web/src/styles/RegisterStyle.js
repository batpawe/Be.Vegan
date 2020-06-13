import styled from "styled-components";
import { Link } from "react-router-dom";
export const Image = styled.img`
  width: 50px;
`;
export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  outline: none;
  :hover,
  :focus {
    text-decoration: underline;
    transition: 1s;
  }
`;
export const FormArea = styled.div`
  background: rgba(255, 255, 255);
  display: flex;
  padding: 0% 2% 0% 2%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 22px;
  margin-top: 4em;
`;
export const TextField = styled.input`
  font-family: "Titillium Web", sans-serif;
  min-width: 500px;
  height: 40px;
  outline-color: black;
  background: white;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  line-height: 1.2px;
  outline: none;
  padding: 0 0 0.2em 0;
  transition: padding 0.4s;
  ::placeholder {
    color: #464646;
  }
  :focus {
    padding: 0 0 0.4em 0;
  }
`;
export const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 4%;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  :hover,
  :focus {
    color: white;
    background: #44c14a;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
