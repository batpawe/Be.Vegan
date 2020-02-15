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
      <HeaderText> Polecane Przepisy :</HeaderText>
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
