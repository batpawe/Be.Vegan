import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import "../../styles/MenuLoginStyle.css";
import { Redirect } from "react-router";
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
  HeaderRecipte,
  CommentContainer,
  MainContainer,
  PreparingMethod,
  ItemHeaderRecipte,
  HiglightItemHeaderRecipte
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import DinnerImage from "../../images/dinner.jpg";
import RestaurantImage from "../../images/restaurant.jpg";
import ShopImage from "../../images/shop.jpg";
import PostImage from "../../images/postimage.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
const Wall = () => {
  const user = useContext(NewLoginInfo);
  return (
    <MainContainer>
      <Container>
        {user.username == "" && <Redirect to="/" />}
        <OrderedList>
          <UnorderedList>
            <HeaderRecipte>
              <ItemHeaderRecipte>
                <BorderText>Nazwa: </BorderText>
                <HiglightItemHeaderRecipte>
                  ZUPA KREM Z TOPINAMBURU
                </HiglightItemHeaderRecipte>
              </ItemHeaderRecipte>
              <ItemHeaderRecipte>
                <BorderText>Czas przygotowania: </BorderText>
                <HiglightItemHeaderRecipte>45minut</HiglightItemHeaderRecipte>
              </ItemHeaderRecipte>
            </HeaderRecipte>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Sposób przygotowania</Item>
                  <Item>Sposób przygotowania</Item>
                  <Item>Sposób przygotowania</Item>
                  <Item>Sposób przygotowania</Item>
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
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>ZUPA KREM Z TOPINAMBURU</HighlightItem>
            </Item>
            <Item>
              <BorderText>Czas przygotowania : </BorderText>45minut
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                  <Item>Składniki</Item>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Sposób przygotowania:</Item>
                  <Item>Sposób przygotowania:</Item>
                  <Item>Sposób przygotowania:</Item>
                  <Item>Sposób przygotowania:</Item>
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
              <PreparingMethod>
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
              </PreparingMethod>
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
              <PreparingMethod>
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
              </PreparingMethod>
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
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Sklep1</HighlightItem>
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
              <PreparingMethod>
                <Item>
                  <BorderText>Najpopularniejsze produkty: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <Image src={ShopImage} />
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
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Sklep1</HighlightItem>
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
                  <BorderText>Najpopularniejsze produkty: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 4zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                  <Item>Produkt 8zł</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
            <Image src={ShopImage} />
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
              <BorderText>Autor: </BorderText>
              <HighlightItem>Sklep1</HighlightItem>
            </Item>
            <Item>
              <BorderText>Tytuł: </BorderText>
              <HighlightItem>Tytuł</HighlightItem>
            </Item>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
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
              <BorderText>Autor: </BorderText>
              <HighlightItem>Sklep1</HighlightItem>
            </Item>
            <Item>
              <BorderText>Tytuł: </BorderText>
              <HighlightItem>Tytuł</HighlightItem>
            </Item>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
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
//miejsca + posty
export default Wall;
