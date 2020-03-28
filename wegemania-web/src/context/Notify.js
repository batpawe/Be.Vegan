import React, { useState, createContext } from "react";
const NotifyContext = createContext();
export const NotifyProvider = props => {
  const [notify, setNotify] = useState("");
  const [onMargin, setOnMargin] = useState(false);
  const initNotify = name => {
    setNotify(name);
    setTimeout(resetNotify, 4000);
  };
  const resetNotify = () => {
    setNotify("");
  };
  const changeMargin = () => {
    let temp = onMargin;
    setOnMargin(!temp);
  };
  const { children } = props;
  return (
    <NotifyContext.Provider
      value={{
        val: notify,
        set: initNotify,
        onMargin: onMargin,
        changeMargin: changeMargin
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};
export const NotifyContextConsumer = NotifyContext.Consumer;
export const NewNotifyContext = NotifyContext;
