import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import "../../styles/MenuLoginStyle.css";
import { Redirect } from "react-router";
import { Container } from "../../styles/WallStyle";
const Wall = () => {
  const user = useContext(NewLoginInfo);
  return (
    <Container>
      {console.log("HELLOWORLD")}
      {user.username == "" && <Redirect to="/" />}
      {console.log(user)}
      Empty
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
      <div style={{ background: "red ", width: 200, height: 200 }}></div>
    </Container>
  );
};
export default Wall;
