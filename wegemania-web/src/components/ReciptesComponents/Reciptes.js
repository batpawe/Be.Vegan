import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import { Redirect } from "react-router-dom";
const Reciptes = () => {
  const user = useContext(NewLoginInfo);
  return (
    <div>
      {user.username === "" && <Redirect to="/" />}
      SIEMA
    </div>
  );
};
export default Reciptes;
