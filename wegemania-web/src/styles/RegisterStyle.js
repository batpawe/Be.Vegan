import styled from "styled-components";
import { Link } from "react-router-dom";
export const Image = styled.img`
  width: 75px;
`;
export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 15px;
  outline: none;
  :hover,
  :focus {
    text-decoration: underline;
    transition: 1s;
  }
`;
export const FormArea = styled.div`
  background: rgba(255, 255, 255);
  padding: 0.5em;
  width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  margin-top: 1em;
`;
export const TextField = styled.input`
  font-family: "Titillium Web", sans-serif;
  min-width: 300px;
  height: 10px;
  outline-color: black;
  background: transparent;
  font-size: 16px;
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
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  font-size: 15px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
