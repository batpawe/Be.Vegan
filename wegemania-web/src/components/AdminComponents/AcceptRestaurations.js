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
  RatingHeader
} from "../../styles/WallStyle";
import ReactStars from "react-stars";
import {
  Container,
  Icon,
  AdministrationContainer,
  AdministrationActions
} from "../../styles/AdminPanelStyle";
import AcceptImage from "../../images/tick.svg";
import BinImage from "../../images/bin.svg";
import DiscardImage from "../../images/discard.svg";
const AcceptRestaurations = () => {
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
      <h2>Zgłoszenia restauracji:</h2>
      <AdministrationContainer>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </CommentContent>
            </UnorderedListCommentsIn>
            <UnorderedListCommentsIn>
              <HighlightItem>Autor</HighlightItem>
              <CommentContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </CommentContent>
            </UnorderedListCommentsIn>
            <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
            <CommentContainer>
              <TextInput type="text" placeholder="Wprowadź treść komentarza" />
              <SubmitCommentButton type="submit">
                Dodaj komentarz
              </SubmitCommentButton>
            </CommentContainer>
          </UnorderedListComments>
        </UnorderedList>
        <AdministrationActions>
          <Icon src={AcceptImage} />
          <Icon src={DiscardImage} />
        </AdministrationActions>
      </AdministrationContainer>
    </Container>
  );
};
export default AcceptRestaurations;
