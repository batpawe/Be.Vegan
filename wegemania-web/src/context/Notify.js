import React, { useState, createContext } from "react";
const NotifyContext = createContext();
export const NotifyProvider = props => {
  const [notify, setNotify] = useState("");
  const initNotify = name => {
    setNotify(name);
    setTimeout(resetNotify, 4000);
  };
  const resetNotify = () => {
    setNotify("");
  };
  const { children } = props;
  return (
    <NotifyContext.Provider
      value={{
        val: notify,
        set: initNotify
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};
export const NotifyContextConsumer = NotifyContext.Consumer;
export const NewNotifyContext = NotifyContext;
