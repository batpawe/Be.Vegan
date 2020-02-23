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
  RatingHeader,
  PreparingMethod
} from "../../styles/WallStyle";
import {
  HeaderRestaurantContainer,
  HeaderRestaurantText,
  FirstRestaurantRow,
  FirstRestaurantItem,
  RestaurantImageComponent,
  RestaurantOpenItem,
  MenuList,
  MenuItem,
  HeaderColumn,
  RateContainer,
  RateHeader,
  RateStars
} from "../../styles/RestaurantStyle";
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
            <HeaderRestaurantContainer>
              <HeaderRestaurantText>Restauracja1</HeaderRestaurantText>
            </HeaderRestaurantContainer>
            <FirstRestaurantRow>
              <FirstRestaurantItem>
                <RestaurantImageComponent src={RestaurantImage} />
              </FirstRestaurantItem>
              <FirstRestaurantItem>
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
              </FirstRestaurantItem>
            </FirstRestaurantRow>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Godziny otwarcia:</BorderText>
                </Item>
                <UnorderedListIn>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <HeaderColumn>
                  <BorderText>Menu: </BorderText>
                </HeaderColumn>
                <MenuList>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                </MenuList>
              </PreparingMethod>
            </ColumnContainer>
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
            <HeaderRestaurantContainer>
              <HeaderRestaurantText>Restauracja1</HeaderRestaurantText>
            </HeaderRestaurantContainer>
            <FirstRestaurantRow>
              <FirstRestaurantItem>
                <RestaurantImageComponent src={RestaurantImage} />
              </FirstRestaurantItem>
              <FirstRestaurantItem>
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
              </FirstRestaurantItem>
            </FirstRestaurantRow>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Godziny otwarcia:</BorderText>
                </Item>
                <UnorderedListIn>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <HeaderColumn>
                  <BorderText>Menu: </BorderText>
                </HeaderColumn>
                <MenuList>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                </MenuList>
              </PreparingMethod>
            </ColumnContainer>
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
