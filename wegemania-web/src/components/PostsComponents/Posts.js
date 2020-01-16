import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";

import { PostList } from "./PostList";

import "../../styles/MenuLoginStyle.css";
const Posts = () => {
  const user = useContext(NewLoginInfo);

  return (
    <div>
      {user.login}
      <PostList />
    </div>
  );
};
export default Posts;
