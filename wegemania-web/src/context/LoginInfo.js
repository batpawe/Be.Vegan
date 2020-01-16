import React, { useState, useEffect, createContext } from "react";
import { Redirect } from "react-router";
const LoginInfo = createContext();
const useStateWithLocalStorage = localStorageKey => {
  const [username, setUsername] = useState(
    localStorage.getItem(localStorageKey) || ""
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  return [username, setUsername];
};
export const LoginInfoProvider = props => {
  const [username, setUsername] = useStateWithLocalStorage("loginState");
  const login = name => {
    setUsername(name);
  };
  const logout = () => {
    setUsername("");
  };
  const { children } = props;
  return (
    <LoginInfo.Provider
      value={{
        login: login,
        logout: logout,
        username: username
      }}
    >
      {children}
    </LoginInfo.Provider>
  );
};
export const LoginInfoConsumer = LoginInfo.Consumer;
export const NewLoginInfo = LoginInfo;
