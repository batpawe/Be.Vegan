import React from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  HyperLink,
  Image,
  BoldText
} from "../../styles/GlobalStyle";
import DinnerImage from "../../images/dinner.jpg";
export const RecommendedRecipt = () => {
  return (
    <LocalContainer>
      <HeaderText
        style={{
          "text-align": "center",
          background: "#00a835",
          "border-radius": "20px",
          color: "white",
          padding: "1%",
          margin: "1% auto 1% auto"
        }}
      >
        Polecane Przepisy :
      </HeaderText>
      <UnorderedList>
        <HyperLink to="/posts">
          <li>
            <BoldText>Nazwa:</BoldText>WEGAŃSKA RYBA PO GRECKU
          </li>
          <li>
            <BoldText>Czas przygotowania:</BoldText>45minut
          </li>
          <li>
            <Image src={DinnerImage}></Image>
          </li>
        </HyperLink>
      </UnorderedList>
      <UnorderedList>
        <HyperLink to="/posts">
          <li>
            <BoldText>Nazwa:</BoldText>WEGAŃSKA RYBA PO GRECKU
          </li>
          <li>
            <BoldText>Czas przygotowania:</BoldText>
            45minut
          </li>
          <li>
            <Image src={DinnerImage}></Image>
          </li>
        </HyperLink>
      </UnorderedList>
    </LocalContainer>
  );
};
