import React, { useState, useContext, useEffect } from "react";
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
import axios from "axios";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/restaurant.jpg";
import { withRouter } from "react-router";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestStyle.css";
const Restaurants = props => {
  const [restaurants, setRestaurants] = useState([]);
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
  let temp = [];
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
    console.log("|||");
    console.log(props.number);
    const tempTime = props.data.hours.split("\r\n");
    const time = tempTime.map(time => {
      return [
        time.split(":", 1).toString(),
        time
          .split(":")
          .slice(1)
          .join(":")
      ];
    });
    return (
      <ContainerRestaurant>
        <ImageRestaurant
          src={props.data.foto}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push(`/restaurant/${props.index}`)}
        />
        <ContentContainer style={{ width: "38%", background: "white" }}>
          <RestaurantName>{props.data.name}</RestaurantName>
          {console.log(page[props.index])}
          {page[props.number] == 0 || page[props.number] == undefined ? (
            <div>
              <HeaderText>Godziny otwarcia:</HeaderText>
              <UnorderedList>
                {time.map(t => {
                  return (
                    <Item>
                      <p style={{ margin: 0 }}>{t[0]}</p>
                      <p style={{ margin: 0 }}>{t[1]}</p>
                    </Item>
                  );
                })}
                {/*}
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                {*/}
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Lokalizacja:</HeaderText>
              <Map
                id="mapid"
                center={[props.data.latX, props.data.longY]}
                zoom={17}
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
                <Marker position={[props.data.latX, props.data.longY]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </div>
          )}

          <Paggination index={props.number} />
        </ContentContainer>
      </ContainerRestaurant>
    );
  };
  const [valueRestaurant, setValueRestaurant] = useState("");
  const [valueCity, setValueCity] = useState("");
  const [suggestionsRestaurants, setSuggestionsRestaurants] = useState([]);
  const restaurantsName = restaurants.map(restaurant => {
    return restaurant;
  });
  const getSuggestionsRestaurants = value => {
    return restaurantsName.filter(name => name.name.includes(value.trim()));
  };
  const [suggestionsCity, setSuggestionsCity] = useState([]);
  const restaurantsCity = restaurants.map(restaurant => {
    return restaurant;
  });
  const getSuggestionsCity = value => {
    const temp = restaurantsCity.reduce((acc, current) => {
      const x = acc.find(item => item.city === current.city);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return temp.filter(city => city.city.includes(value.trim()));
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/restaurants/")
        .then(res => {
          console.log(res.data);
          setRestaurants(res.data);
          setSuggestionsRestaurants([
            ...new Map(res.data.map(item => [item["name"], item])).values()
          ]);
          setSuggestionsCity([
            ...new Map(res.data.map(item => [item["city"], item])).values()
          ]);
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, []);
  return (
    <MainContainer>
      <Container>
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
                  <AutoSuggest
                    style={{ "font-size": 10 }}
                    suggestions={suggestionsRestaurants}
                    onSuggestionsClearRequested={() =>
                      setSuggestionsRestaurants([])
                    }
                    onSuggestionsFetchRequested={({ value }) => {
                      console.log(value);
                      setValueRestaurant(value);
                      setSuggestionsRestaurants(
                        getSuggestionsRestaurants(value)
                      );
                    }}
                    onSuggestionSelected={(_, { suggestionValue }) =>
                      console.log("Wybrany: " + suggestionValue)
                    }
                    getSuggestionValue={suggestion => suggestion.name}
                    renderSuggestion={suggestion => (
                      <span>{suggestion.name}</span>
                    )}
                    inputProps={{
                      placeholder: "Wprowadź nazwę restauracji",
                      value: valueRestaurant,
                      onChange: (_, { newValue, method }) => {
                        setValueRestaurant(newValue);
                      }
                    }}
                    highlightFirstSuggestion={true}
                  />
                ) : (
                  <AutoSuggest
                    suggestions={suggestionsCity}
                    onSuggestionsClearRequested={() => setSuggestionsCity([])}
                    onSuggestionsFetchRequested={({ value }) => {
                      console.log(value);
                      setValueCity(value);
                      setSuggestionsCity(getSuggestionsCity(value));
                    }}
                    onSuggestionSelected={(_, { suggestionValue }) =>
                      console.log("Wybrany: " + suggestionValue)
                    }
                    getSuggestionValue={suggestion => suggestion.city}
                    renderSuggestion={suggestion => (
                      <span>{suggestion.city}</span>
                    )}
                    inputProps={{
                      placeholder: "Wprowadź miasto",
                      value: valueCity,
                      onChange: (_, { newValue, method }) => {
                        setValueCity(newValue);
                      }
                    }}
                    highlightFirstSuggestion={true}
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
                  <p style={{ "font-weight": "bold" }}>{valueCity}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between"
                  }}
                >
                  <p>Restauracja:</p>
                  <p style={{ "font-weight": "bold" }}>{valueRestaurant}</p>
                </div>
              </div>
            </div>
            <AddRestaurantLink to="/addrestaurant">
              Dodaj restaurację
            </AddRestaurantLink>
          </div>
        </AddPostPageContainer>
        {restaurants.length &&
          restaurants.map((restaurant, index) => {
            if (
              restaurant.city.includes(valueCity) &&
              restaurant.name.includes(valueRestaurant)
            )
              return (
                <ContentController
                  index={restaurant.id}
                  number={index}
                  data={restaurant}
                  historyProps={props.history}
                />
              );
          })}
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Restaurants);
