import React, { useContext, useState, useEffect } from "react";
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
  FirstRestaurantItem,
  RestaurantImageComponent,
  RestaurantOpenItem,
  MenuList,
  MenuItem,
  HeaderColumn,
  RateContainer,
  RateHeader,
  RateStars,
  LocationContainer,
  BorderHeader,
  FirstRestaurantRow,
  SearchContainer,
  SearchInput,
  SearchButton,
  RadiusContainer,
  AddRestaurantLink
} from "../../styles/RestaurantStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RestaurantImage from "../../images/restaurant.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import ReactStars from "react-stars";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import "../../App.css";
import axios from "axios";
const Restaurant = props => {
  const [restaurant, setRestaurant] = useState({});
  let temp = {
    restaurant: "",
    city: ""
  };
  const [searchInfo, setSearchInfo] = useState(temp);
  const user = useContext(NewLoginInfo);
  let starTemp = [2];
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500]
      }
    }
  });

  const [rating, setRating] = useState(starTemp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  const [radio, setRadio] = useState("city");
  const handleChange = e => {
    setRadio(e.target.value);
  };
  const handleRestaurantChange = e => {
    let temp = searchInfo;
    temp.restaurant = e;
    setSearchInfo({ ...temp });
  };
  const handleCityChange = e => {
    let temp = searchInfo;
    temp.city = e;
    setSearchInfo({ ...temp });
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `https://veggiesapp.herokuapp.com/posts/${props.match.params.id}`
      )
        .then(res => {
          console.log(res.data);
          setRestaurant({ ...res.data });
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, [props.match.params.id]);
  return (
    <MainContainer>
      <Container>
        <OrderedList>
          <UnorderedList>
            <HeaderRestaurantContainer>
              <HeaderRestaurantText>Nazwa</HeaderRestaurantText>
            </HeaderRestaurantContainer>
            <FirstRestaurantRow>
              <RestaurantImageComponent src={RestaurantImage} />
            </FirstRestaurantRow>
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  count={5}
                  className="test"
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText
                    style={{
                      color: "black",
                      "font-weight": "bold",
                      "text-align": "center"
                    }}
                  >
                    Godziny otwarcia:
                  </BorderText>
                </Item>
                <UnorderedListIn
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    "border-radius": "15px",
                    "text-align": "center"
                  }}
                >
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem style={{ "text-align": "center" }}>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                </UnorderedListIn>
              </div>
              <LocationContainer>
                <BorderHeader style={{ color: "black", "font-weight": "bold" }}>
                  Lokalizacja :
                </BorderHeader>
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
              </LocationContainer>
            </ColumnContainer>
            {/*}
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
            {*/}
          </UnorderedList>
        </OrderedList>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Restaurant;
