import styled from "styled-components";
import Background from "../images/loginbackground.jpg";
import { Link } from "react-router-dom";

export const FormArea = styled.div`
  background: rgba(255, 255, 255);
  padding: 1em;
  width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  margin-top: 1em;
`;
export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 20px;
`;
export const TextField = styled.input`
  font-family: "Titillium Web", sans-serif;
  min-width: 300px;
  height: 25px;
  outline-color: black;
  background: transparent;
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
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  font-size: 25px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
export const Image = styled.img`
  width: 100px;
  margin-bottom: 0.5em;
`;

export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 100px;
  outline: none;
  :hover,
  :focus {
    text-decoration: underline;
    transition: 1s;
  }
`;
export const LoginPage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${Background});
  background-size: 100% 100%;
  margin-top: 1px;
  box-sizing: border-box;
  height: 88vh;
  @media (min-width: 1370px) {
    height: 92vh;
  }
`;
export const LoginFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
`;
