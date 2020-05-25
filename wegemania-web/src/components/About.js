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
          Początkowo przejaw weganizmu nazywany był głównie dietą. Weganie to
          przede wszystkim osoby, które nie spożywają produktów pochodzenia
          zwierzęcego. To oznacza, że w ich diecie nie pojawią się nie tylko
          takie produkty jak np. mięso, ale również jajka, mleko, masło i tym
          podobne. Jednakże, coraz częściej weganizm określany jest jako styl
          życia. Weganie eliminują ze swojego życia nie tylko spożywcze produkty
          pochodzenia zwierzęcego, ale starają się również wyeliminować takie
          produkty jak ubrania, meble czy kosmetyki, które w fazie produkcji
          mogły przyczynić się do nieetycznej eksploatacji zwierząt. Identyczna
          zasada dotyczy wszelkich rozrywek czy hobby, które mogą wykorzystywać
          zwierzęta. Takimi przykładami może być np. zoo, cyrk lub polowanie na
          zwierzynę. Idea weganizmu staje się coraz bardziej popularna. Według
          dziennika tvn24.pl
          <a href="https://tvn24.pl/biznes/z-kraju/weganie-i-wegetarianie-w-polsce-coraz-wiecej-polakow-rezygnuje-z-miesa-ra973979-4508365">
            https://tvn24.pl/biznes/z-kraju/weganie-i-wegetarianie-w-polsce-coraz-wiecej-polakow-rezygnuje-z-miesa-ra973979-4508365
          </a>
          liczba wegan oraz wegetarian w Polsce wynosi aż 1 milion. To ogromna
          liczba, która z dnia na dzień staje się coraz większa. Osoby
          decydujące się przejść na weganizm robią to najczęściej z pobudek
          etycznych, zdrowotnych, religijnych oraz ekologicznych.
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
