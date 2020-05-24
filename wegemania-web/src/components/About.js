import React, { useContext, useEffect, useState } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  AuthorCommentName,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
} from "../styles/WallStyle";
import PostImage from "../images/postimage.jpg";
import RightPanel from "./GlobalComponents/RightPanel";
import "../styles/MenuLoginStyle.css";
import axios from "axios";
import { Text } from "../styles/AboutStyle";
const About = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    axios("http://veggies.ddns.net:8181/curiosities/")
      .then((res) => {
        setTips(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MainContainer style={{ width: "100%" }}>
      <Container style={{ width: "80%" }}>
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Text>
        <Text>
          <h1 style={{ "font-size": "24px" }}>Ciekawostki</h1>
          {tips.map((tip) => {
            return <p>{tip.text}</p>;
          })}
        </Text>
      </Container>
    </MainContainer>
  );
};
export default About;
