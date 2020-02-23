import React, { useState } from "react";
import Header from "./Header";
import RestaurantImage from "../../images/restaurant.jpg";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
  RatingComponent,
  RatingHeader,
  ProductAttributes,
  AttributeItem,
  PreparingMethod
} from "../../styles/WallStyle";
import ReactStars from "react-stars";
import {
  Container,
  Icon,
  AdministrationContainer,
  AdministrationActions
} from "../../styles/AdminPanelStyle";
import AcceptImage from "../../images/tick.svg";
import DiscardImage from "../../images/discard.svg";
import BinImage from "../../images/bin.svg";
import ProductImage from "../../images/product.jpg";
import DinnerImage from "../../images/dinner.jpg";
const NotificationRecipes = () => {
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  return (
    <Container>
      <Header />
      <h2>Zgłoszone przepisy:</h2>
      <AdministrationContainer>
        <OrderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>PASTA Z BAKŁAŻANA I MARCHEWKI</HighlightItem>
            </Item>
            <Item>
              <BorderText>Czas przygotowania : </BorderText> 1 godzina
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>bakłażan</Item>
                  <Item>marchewka</Item>
                  <Item>czerwona papryka</Item>
                  <Item>czosnek</Item>
                  <Item>mała cebulka</Item>
                  <Item>pieprz</Item>
                  <Item>musztarda Dijon</Item>
                  <Item>olej rzepakowy</Item>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>
                    Marchewki obieramy i kroimy w talarki o grubości ok. 1 cm,
                    marynujemy w 1 łyżce oleju. Dodajemy pokrojony w plasterki
                    czosnek. Warzywa zawijamy w folię aluminiową i pieczemy w
                    piekarniku rozgrzanym do 180°C przez 30 minut.
                  </Item>
                  <Item>
                    Paprykę smarujemy olejem. Bakłażana kroimy w plastry o
                    grubości 2 cm, a cebulę w cienkie plastry. Warzywa układamy
                    na blasze do pieczenia, dokładamy paprykę w całości.
                    Skrapiamy pozostałym olejem. Dokładamy warzywa do piekącej
                    się marchewki – bakłażana pieczemy 20 minut aż do
                    zbrązowienia, paprykę – tak długo, aż popęka skórka.
                  </Item>
                  <Item>
                    Paprykę obieramy ze skóry i usuwamy gniazda nasienne. Miąższ
                    papryki wraz z pozostałymi warzywami przekładamy do naczynia
                    blendera. Miksujemy na gładką masę. Doprawiamy musztardą i
                    pieprzem.
                  </Item>
                  <Item>
                    Podajemy z chlebem lub serem feta i listkami mięty.
                  </Item>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <Image src={DinnerImage} />
            <RatingComponent>
              <RatingHeader>Oceń:</RatingHeader>
              <ReactStars
                count={5}
                onStarClick={val => changeRating(val)}
                value={rating[0]}
                size={24}
                color2={"#8BC34A"}
              />
            </RatingComponent>
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>PASTA Z BAKŁAŻANA I MARCHEWKI
            </Item>
            <Item>
              <BorderText>Czas przygotowania : </BorderText> 1 godzina
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>bakłażan</Item>
                  <Item>marchewka</Item>
                  <Item>czerwona papryka</Item>
                  <Item>czosnek</Item>
                  <Item>mała cebulka</Item>
                  <Item>pieprz</Item>
                  <Item>musztarda Dijon</Item>
                  <Item>olej rzepakowy</Item>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>
                    Marchewki obieramy i kroimy w talarki o grubości ok. 1 cm,
                    marynujemy w 1 łyżce oleju. Dodajemy pokrojony w plasterki
                    czosnek. Warzywa zawijamy w folię aluminiową i pieczemy w
                    piekarniku rozgrzanym do 180°C przez 30 minut.
                  </Item>
                  <Item>
                    Paprykę smarujemy olejem. Bakłażana kroimy w plastry o
                    grubości 2 cm, a cebulę w cienkie plastry. Warzywa układamy
                    na blasze do pieczenia, dokładamy paprykę w całości.
                    Skrapiamy pozostałym olejem. Dokładamy warzywa do piekącej
                    się marchewki – bakłażana pieczemy 20 minut aż do
                    zbrązowienia, paprykę – tak długo, aż popęka skórka.
                  </Item>
                  <Item>
                    Paprykę obieramy ze skóry i usuwamy gniazda nasienne. Miąższ
                    papryki wraz z pozostałymi warzywami przekładamy do naczynia
                    blendera. Miksujemy na gładką masę. Doprawiamy musztardą i
                    pieprzem.
                  </Item>
                  <Item>
                    Podajemy z chlebem lub serem feta i listkami mięty.
                  </Item>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <Image src={DinnerImage} />
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
        </OrderedList>
        <AdministrationActions>
          <Icon src={AcceptImage} />
          <Icon src={BinImage} />
        </AdministrationActions>
      </AdministrationContainer>
    </Container>
  );
};
export default NotificationRecipes;
