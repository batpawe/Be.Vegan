import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserLink } from "../../styles/PostStyle";
export const UserList = props => {
  const [userInfo, setUserInfo] = useState();
  async function myAsyncEffect() {
    const result = await axios(`http://localhost:3001/users/${props.by}`);
    setUserInfo(result.data[0]);
  }
  useEffect(() => {
    myAsyncEffect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <div>
      {userInfo !== undefined && (
        <UserLink to={"/users/" + userInfo.idusers}>{userInfo.imie}</UserLink>
      )}
    </div>
  );
};
