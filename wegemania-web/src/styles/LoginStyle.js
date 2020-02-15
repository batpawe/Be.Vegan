import styled from "styled-components";
import Background from "../images/web2.png";
import { Link } from "react-router-dom";
export const FormArea = styled.div`
  background: rgba(255, 255, 255);
  padding: 3%;
  border-radius: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 26px;
  margin-top: 3.5em;
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
  min-width: 500px;
  height: 40px;
  outline-color: black;
  background: white;
  font-size: 26px;
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
    background: #e2e9e2;
  }
  ::selection {
    background: white;
  }
`;
export const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2%;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  :hover,
  :focus {
    color: white;
    background: #44c14a;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
export const Image = styled.img`
  width: 50px;
  padding-bottom: 5%;
`;

export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 10%;
  outline: none;
  :hover,
  :focus {
    color: black;
    text-decoration: none;
    text-decoration: underline;
    transition: 1s;
  }
`;
export const LoginPage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0.6, 0.6) 100%
    ),
    url(${Background});
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: fixed;
  width: 100vw;
`;
export const LoginFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: block;
`;
