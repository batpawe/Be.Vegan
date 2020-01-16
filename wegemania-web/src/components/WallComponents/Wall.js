import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import "../../styles/MenuLoginStyle.css";
import { Redirect } from "react-router";
const Wall = () => {
  const user = useContext(NewLoginInfo);
  return (
    <div>
    {console.log("HELLOWORLD")}
      {user.username == "" && <Redirect to="/" />}
      {console.log(user)}
      Empty
    </div>
  );
};
export default Wall;
