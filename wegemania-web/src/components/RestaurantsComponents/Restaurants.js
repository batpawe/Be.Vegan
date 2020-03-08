import React, { useState, useContext } from "react";
import { MainContainer } from "../../styles/WallStyle";
import {
  Container,
  RestaurantName,
  HeaderText,
  ContainerRestaurant,
  ImageRestaurant,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item
} from "../../styles/TempRestaurants";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { NewLoginInfo } from "../../context/LoginInfo";

import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";

import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/restaurant.jpg";
import { withRouter } from "react-router";
const Restaurants = props => {
  let tempSearch = {
    restaurant: "",
    city: ""
  };
  const [searchInfo, setSearchInfo] = useState(tempSearch);
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
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);
  const Paggination = props => {
    let no = props.no || 2;
    const handlePage = k => {
      let tmp = page;
      console.log(k);
      if (k == 1) {
        tmp[props.index] = 1;
      } else {
        tmp[props.index] = 0;
      }
      setPage([...tmp]);
    };
    const paggin = Array.from({ length: no }, (_, k) =>
      k == page[props.index] ? (
        <PagginationItem
          key={k}
          active={true}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      ) : (
        <PagginationItem
          key={k}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      )
    );
    return <PagginationContainer>{paggin}</PagginationContainer>;
  };
  const ContentController = props => {
    return (
      <ContainerRestaurant>
        <ImageRestaurant
          src={Image}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push("/restaurant")}
        />
        <ContentContainer style={{ width: "38%", background: "white" }}>
          <RestaurantName>Kolorowy Piec</RestaurantName>
          {console.log(page[props.index])}
          {page[props.index] == 0 ? (
            <div>
              <HeaderText>Godziny otwarcia:</HeaderText>
              <UnorderedList>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Lokalizacja:</HeaderText>
              <Map
                id="mapid"
                center={[53.009794, 18.591649]}
                zoom={12}
                style={{
                  width: 130,
                  height: 150,
                  "margin-left": 20,
                  "z-index": 0
                }}
              >
                <TileLayer
                  style={{ "font-size": 4 }}
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.009794, 18.591649]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerRestaurant>
    );
  };
  return (
    <MainContainer>
      <Container>
        {" "}
        <AddPostPageContainer>
          <div
            style={{
              display: "flex",
              "justify-content": "space-between",
              width: "100%"
            }}
          >
            <div>
              <div style={{ display: "flex" }}>
                {radio == "restaurant" ? (
                  <SearchInput
                    placeholder="wpisz nazwę restauracji."
                    onChange={e => {
                      handleRestaurantChange(e.target.value);
                    }}
                    value={searchInfo.restaurant}
                  />
                ) : (
                  <SearchInput
                    placeholder="wpisz nazwę miasta."
                    onChange={e => {
                      handleCityChange(e.target.value);
                    }}
                    value={searchInfo.city}
                  />
                )}
              </div>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="search"
                  name="search"
                  value={radio}
                  onChange={handleChange}
                >
                  <ThemeProvider theme={outerTheme}>
                    <div
                      style={{
                        display: "flex",
                        "justify-content": "space-between"
                      }}
                    >
                      <FormControlLabel
                        value="restaurant"
                        control={<Radio />}
                        label="Restauracja"
                      />
                      <FormControlLabel
                        value="city"
                        control={<Radio />}
                        label="Miasto"
                      />
                    </div>
                  </ThemeProvider>
                </RadioGroup>
              </FormControl>
              <div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between"
                  }}
                >
                  <p>Miasto:</p>
                  <p style={{ "font-weight": "bold" }}>{searchInfo.city}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between"
                  }}
                >
                  <p>Restauracja:</p>
                  <p style={{ "font-weight": "bold" }}>
                    {searchInfo.restaurant}
                  </p>
                </div>
              </div>
            </div>
            <AddRestaurantLink to="/addrestaurant">
              Dodaj restaurację
            </AddRestaurantLink>
          </div>
        </AddPostPageContainer>
        <ContentController index={0} historyProps={props.history} />
        <ContentController index={1} historyProps={props.history} />
        <ContentController index={2} historyProps={props.history} />
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Restaurants);
