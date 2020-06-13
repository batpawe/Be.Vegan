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
  AttributeItem
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
import ProductImage from "../../images/product.jpg";
const AcceptProducts = () => {
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
      <h2>Zgłoszenia produktów:</h2>
      <AdministrationContainer>
        <OrderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Produkt1</HighlightItem>
            </Item>
            <ProductAttributes>
              <AttributeItem>
                <b>kaloryczność:</b> 0 kcal
              </AttributeItem>
              <AttributeItem>
                <b>cukry dodatkowe:</b> 0 gram
              </AttributeItem>
              <AttributeItem>
                <b>tłuszcz:</b> 0 gram
              </AttributeItem>
              <AttributeItem>
                <b>ilość:</b>0{" "}
              </AttributeItem>
            </ProductAttributes>
            <Item>
              <BorderText>Gdzie można kupić : </BorderText>
              <Map
                id="mapid"
                center={[53.009794, 18.591649]}
                zoom={12}
                style={{
                  width: 400,
                  height: 300,
                  "z-index": 0,
                  display: "block",
                  margin: "auto"
                }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.009794, 18.591649]}>
                  <Popup>Sklep1</Popup>
                </Marker>
                <Marker position={[53.005794, 18.591649]}>
                  <Popup>Sklep2</Popup>
                </Marker>
              </Map>
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Można zastąpić:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                </UnorderedListIn>
              </div>
              <div>
                <Item>
                  <BorderText>Wypróbuj w przepisach: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
            <Image src={ProductImage} />
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
          <Icon src={DiscardImage} />
        </AdministrationActions>
      </AdministrationContainer>
    </Container>
  );
};
export default AcceptProducts;
