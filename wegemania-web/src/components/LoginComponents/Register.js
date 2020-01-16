import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import BeVegan from "../../images/BeVeganIcon.png";
import {
  LoginPage,
  LoginForm,
  InputWrapper,
  LoginFlex
} from "../../styles/LoginStyle";
import {
  StyleLink,
  Image,
  TextField,
  FormArea,
  FormButton
} from "../../styles/RegisterStyle";
import { NewLoginInfo } from "../../context/LoginInfo";
import "../../styles/MenuLoginStyle.css";
import axios from "axios";
import MD5 from "crypto-js/md5";
const GoLoginPage = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimeToRedirect(true), 1200);
  }, []);

  return <div>{timeToRedirect && <Redirect to="/" />}</div>;
};
const Register = () => {
  const [tempRegister, addTempRegister] = useState([]);
  const [isError, setError] = useState(undefined);

  const validateEmail = email => {
    //eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const addTempLogin = event => {
    addTempRegister({ ...tempRegister, login: event.target.value });
  };
  const addTempPassword = event => {
    addTempRegister({ ...tempRegister, password: event.target.value });
  };
  const addTempRePassword = event => {
    addTempRegister({ ...tempRegister, repassword: event.target.value });
  };
  const addTempMail = event => {
    addTempRegister({ ...tempRegister, mail: event.target.value });
  };
  const addTempName = event => {
    addTempRegister({ ...tempRegister, name: event.target.value });
  };

  const registerUser = () => {
    if (
      tempRegister.password === tempRegister.repassword &&
      validateEmail(tempRegister.mail) &&
      tempRegister.login.length > 4 &&
      tempRegister.password.length > 4
    ) {
      const newUser = {
        idusers: 0,
        imie: tempRegister.login,
        wynik: 0,
        password: MD5(tempRegister.password).toString()
      };

      axios
        .post("http://localhost:3001/users", newUser)
        .then(res => {
          setError(false);
        })
        .catch(error => {
          setError(true);
        });
    }

    addTempRegister({
      login: "",
      password: "",
      repassword: "",
      mail: "",
      name: ""
    });
  };
  const user = useContext(NewLoginInfo);
  return (
    <LoginPage>
      {user.username !== "" && <Redirect to="/page" />}
      <LoginFlex>
        <FormArea>
          <Image src={BeVegan} alt="be vegan logo" />
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
            rel="stylesheet"
          ></link>
          {isError === false && (
            <div>
              <p className="successMessage">Udało się zarejestrować</p>
              <GoLoginPage />
            </div>
          )}
          {isError === true && (
            <p className="errorMessage">
              Rejestracja zakończona niepowodzeniem
            </p>
          )}
          <LoginForm>
            <InputWrapper>
              <label for="username">Login:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoją nazwę użytkownika"
                type="text"
                id="username"
                onChange={addTempLogin}
                value={tempRegister.login}
              />
            </InputWrapper>
            <InputWrapper>
              <label for="password">Hasło:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoje hasło"
                type="password"
                id="password"
                onChange={addTempPassword}
                value={tempRegister.password}
              />
            </InputWrapper>
            <InputWrapper>
              <label for="repassword">Powtórz hasło:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoje hasło ponownie"
                type="password"
                id="repassword"
                onChange={addTempRePassword}
                value={tempRegister.repassword}
              />
            </InputWrapper>
            <InputWrapper>
              <label for="name">Imię:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoje imię"
                type="text"
                id="name"
                onChange={addTempName}
                value={tempRegister.name}
              />
            </InputWrapper>
            <InputWrapper>
              <label for="mail">Adres e-mail:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swój adres e-mail"
                type="text"
                id="mail"
                onChange={addTempMail}
                value={tempRegister.mail}
              />
            </InputWrapper>

            <FormButton
              type="button"
              value="Zarejestruj się"
              onClick={registerUser}
            />
          </LoginForm>
          <StyleLink to="/">Masz konto ? Zaloguj się !</StyleLink>
        </FormArea>
      </LoginFlex>
    </LoginPage>
  );
};
export default Register;
