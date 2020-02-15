import React, { useContext, useState } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
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
  RatingHeader
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RestaurantImage from "../../images/restaurant.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import ReactStars from "react-stars";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
const Restaurants = () => {
  const user = useContext(NewLoginInfo);
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  return (
    <MainContainer>
      <Container>
        <AddPostPageContainer>
          <AddPostPageLink to="/addrestaurant">
            Dodaj restaurację
          </AddPostPageLink>
        </AddPostPageContainer>
        <OrderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Restauracja1</HighlightItem>
            </Item>
            <Item>
              <BorderText>Lokalizacja : </BorderText>
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
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Godziny otwarcia:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                </UnorderedListIn>
              </div>
              <div>
                <Item>
                  <BorderText>Menu: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>

            <Image src={RestaurantImage} />
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
              <BorderText>Nazwa : </BorderText>Restauracja1
            </Item>
            <Item>
              <BorderText>Lokalizacja : </BorderText>
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
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Godziny otwarcia:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                  <Item>Poniedziałek 8:00 - 20:00</Item>
                </UnorderedListIn>
              </div>
              <div>
                <Item>
                  <BorderText>Menu: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
            <Image src={RestaurantImage} />
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
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Restaurants;
