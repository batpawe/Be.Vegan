import React, { useState, useContext, useEffect } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import {
  RestaurantName,
  HeaderText,
  ContainerRestaurant,
  ImageRestaurant,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item,
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
  AddRestaurantLink,
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
import { makeStyles } from "@material-ui/core/styles";
import { defaultTheme } from "react-autosuggest/dist/theme";
import ikonaCzasuActive from "../../icons/ikonaCzasuactive.svg";
import ikonaMapyActive from "../../icons/ikonaMapyactive.svg";
import ikonaCzasu from "../../icons/ikonaCzasu.svg";
import ReactStars from "react-stars";
import ikonaMapy from "../../icons/ikonaMapy.svg";
import {
  BigRateContainerRecipes,
  SmallRateContainerRecipes,
} from "../../styles/StarsStyle";
import {
  SubscriptionRestaurantsContainer,
  SubscriptionRestaurantImage,
  SubscriptionRestaurantSmallContainer,
  SubscriptionHeaderParagraph,
  SubscriptionParagraph,
} from "../../styles/RestaurantStyle";
const Restaurants = (props) => {
  const [result, setResult] = useState([]);
  const useStyles = makeStyles({
    n_react_autosuggest_container: {
      position: "relative",
      width: "60%",
      margin: "0 auto",
    },

    n_react_autosuggest_input: {
      background: "none",
      padding: "5px 5px",
      width: "100%",
      margin: "1% auto 0 auto",
      "text-align": "left",
      "font-size": "24px",
      "font-family": "Helvetica, sans-serif",
      "font-weight": 300,
      border: "none",
      "border-bottom": "1px solid black",
      "&::placeholder": {
        color: "black",
      },
    },
    n_react_autosuggest__input__focused: {
      outline: "none",
    },
    /*
n_react_autosuggest__input::placeholder: {
  color: black;
}
n_react-autosuggest__input--focused :{
  outline: none;
}
*/
    n_react_autosuggest__input__open: {
      "border-bottom-left-radius": 0,
      "border-bottom-right-radius": 0,
    },

    n_react_autosuggest__suggestions_container: {
      display: "none",
    },

    n_react_autosuggest__suggestions_container__open: {
      display: "block",
      position: "absolute",
      top: "51px",
      width: "100%",
      height: "400%",
      overflow: "auto",
      border: "1px solid #aaa",
      "background-color": "#fff",
      "font-family": "Helvetica, sans-serif",
      "font-weight": 300,
      "font-size": "22px",
      "border-bottom-left-radius": "4px",
      "border-bottom-right-radius": "4px",
      "z-index": 2,
    },

    n_react_autosuggest__suggestions_list: {
      margin: 0,
      padding: 0,
      "list-style-type": "none",
    },

    n_react_autosuggest__suggestion: {
      cursor: "pointer",
      padding: "10px 20px",
    },

    n_react_autosuggest__suggestion__highlighted: {
      "background-color": "#ddd",
    },
  });
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);
  let tempSearch = {
    restaurant: "",
    city: "",
  };
  const [searchInfo, setSearchInfo] = useState(tempSearch);
  const user = useContext(NewLoginInfo);
  let starTemp = [2];
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });

  const [rating, setRating] = useState(starTemp);
  const changeRating = (val) => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  const [radio, setRadio] = useState("city");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  const handleRestaurantChange = (e) => {
    let temp = searchInfo;
    temp.restaurant = e;
    setSearchInfo({ ...temp });
  };
  const handleCityChange = (e) => {
    let temp = searchInfo;
    temp.city = e;
    setSearchInfo({ ...temp });
  };
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);

  const Paggination = (props) => {
    let no = props.no || 2;
    const handlePage = (k) => {
      let tmp = page;
      console.log(k);
      if (k == 1) {
        tmp[props.index] = 1;
      } else {
        tmp[props.index] = 0;
      }
      setPage([...tmp]);
    };
    const paggin = Array.from({ length: no }, (_, k) => {
      if (k == page[props.index] && k == 0) {
        return (
          <img
            src={ikonaCzasuActive}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k == page[props.index] && k == 1) {
        return (
          <img
            src={ikonaMapyActive}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k != page[props.index] && k == 0) {
        return (
          <img
            src={ikonaCzasu}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k != page[props.index] && k == 1) {
        return (
          <img
            src={ikonaMapy}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      }
    });
    return (
      <PagginationContainer
        style={{
          padding: "4% 0 1% 0",
          "border-top": "1px solid black",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {paggin}
      </PagginationContainer>
    );
  };

  const ContentController = (props) => {
    console.log("|||");
    console.log(props.number);
    const tempTime = props.data.hours.split("\r\n");
    const time = tempTime.map((time) => {
      return [
        time.split(":", 1).toString(),
        time.split(":").slice(1).join(":"),
      ];
    });
    return (
      <ContainerRestaurant style={{ width: "48%", height: "300px" }}>
        {/*ttt*/}
        <ImageRestaurant
          src={props.data.foto}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push(`/restaurant/${props.index}`)}
        />
        <ContentContainer
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.6)",
            position: "relative",
          }}
        >
          <RestaurantName>{props.data.name}</RestaurantName>
          {console.log(page[props.index])}
          {page[props.number] == 0 || page[props.number] == undefined ? (
            <div>
              <HeaderText>Godziny otwarcia:</HeaderText>
              <UnorderedList>
                {time.map((t) => {
                  return (
                    <Item
                      style={{
                        "font-size": "14px",
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          width: "50%",
                          "text-align": "left",
                        }}
                      >
                        {t[0].trim()}
                      </p>
                      <p
                        style={{ margin: 0, "text-align": "right" }}
                      >{`${t[1].trim().replace(" ", " - ")}`}</p>
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
                  height: 158,
                  "margin-left": 20,
                  "z-index": 0,
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
  const restaurantsName = restaurants.map((restaurant) => {
    return restaurant;
  });
  const RestaurationContainer = (props) => {
    return (
      <div style={{ width: "23%" }}>
        <img
          onClick={() =>
            props.historyProps.push(`/restaurant/${props.restaurant.id}`)
          }
          style={{
            width: "100%",
            height: "45%",
            "object-fit": "contain",
            cursor: "pointer",
          }}
          src={props.restaurant.foto}
        />
        <p style={{ padding: 0, margin: 0 }}>{props.restaurant.name}</p>
        <BigRateContainerRecipes style={{ width: "100%", margin: "0 auto" }}>
          <RateStars style={{ width: "100%" }}>
            <ReactStars
              edit={false}
              value={props.restaurant.rating}
              count={5}
              className="recipes_rate"
              //onChange
              size={24}
              color2={"#4CAF50"}
            />
          </RateStars>
          <p>
            {props.restaurant.city +
              ", " +
              props.restaurant.street +
              " " +
              props.restaurant.street_number}
          </p>
        </BigRateContainerRecipes>
        <p></p>
      </div>
    );
  };
  const SubscriptionRestaurants = (props) => {
    if (props.index == 0) {
      return (
        <SubscriptionRestaurantsContainer index={0}>
          <SubscriptionRestaurantImage
            style={{ cursor: "pointer" }}
            onClick={() =>
              props.historyProps.push(`/restaurant/${props.restaurant.id}`)
            }
            src={props.restaurant.foto}
          />
          <SubscriptionRestaurantSmallContainer>
            <SubscriptionHeaderParagraph>
              {props.restaurant.name}
            </SubscriptionHeaderParagraph>
            <BigRateContainerRecipes style={{ width: "100%", margin: "0" }}>
              {console.log("PPP")}
              <RateStars style={{ width: "100%" }}>
                <ReactStars
                  edit={false}
                  value={props.restaurant.rating}
                  count={5}
                  className="recipes_rate"
                  //onChange
                  size={56}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </BigRateContainerRecipes>
            <SubscriptionParagraph>
              {props.restaurant.city +
                ", " +
                props.restaurant.street +
                " " +
                props.restaurant.street_number}
            </SubscriptionParagraph>
          </SubscriptionRestaurantSmallContainer>
        </SubscriptionRestaurantsContainer>
      );
    } else {
      return (
        <SubscriptionRestaurantsContainer index={2}>
          <SubscriptionRestaurantSmallContainer>
            <SubscriptionHeaderParagraph>
              {props.restaurant.name}
            </SubscriptionHeaderParagraph>
            <BigRateContainerRecipes style={{ width: "100%", margin: "0" }}>
              {console.log("PPP")}
              <RateStars style={{ width: "100%" }}>
                <ReactStars
                  edit={false}
                  value={props.restaurant.rating}
                  count={5}
                  className="recipes_rate"
                  //onChange
                  size={56}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </BigRateContainerRecipes>
            <SubscriptionParagraph>
              {props.restaurant.city +
                ", " +
                props.restaurant.street +
                " " +
                props.restaurant.street_number}
            </SubscriptionParagraph>
          </SubscriptionRestaurantSmallContainer>
          <SubscriptionRestaurantImage
            src={props.restaurant.foto}
            style={{ cursor: "pointer" }}
            onClick={() =>
              props.historyProps.push(`/restaurant/${props.restaurant.id}`)
            }
          />
        </SubscriptionRestaurantsContainer>
      );
    }
  };
  const getSuggestionsRestaurants = (value) => {
    console.log("value");
    console.log(value);
    const temp = value.split(",");
    if (temp.length == 1) {
      const array_name = restaurantsName.filter((name) =>
        name.name.includes(temp[0].trim())
      );
      const array_city = restaurantsName.filter((name) =>
        name.city.includes(temp[0].trim())
      );

      if (array_name.length > array_city.length) {
        setResult([...array_name]);
        return array_name;
      } else {
        setResult([...array_city]);
        return array_city;
      }
    } else {
      const tempArray = restaurantsName.filter((name) => {
        return name.name.includes(temp[0].trim());
      });
      const nextArray = tempArray.filter((name) => {
        return name.city.includes(temp[1].trim());
      });
      setResult([...nextArray]);
      return nextArray;
    }
  };
  const [suggestionsCity, setSuggestionsCity] = useState([]);
  const restaurantsCity = restaurants.map((restaurant) => {
    return restaurant;
  });
  const tempMyArray = [];
  const defaultMyArray = restaurants.map((restaurant) => {
    tempMyArray.push(restaurant);
    tempMyArray.push(restaurant);
    tempMyArray.push(restaurant);
    tempMyArray.push(restaurant);
    tempMyArray.push(restaurant);
  });
  const getSuggestionsCity = (value) => {
    const temp = restaurantsCity.reduce((acc, current) => {
      const x = acc.find((item) => item.city === current.city);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return temp.filter((city) => city.city.includes(value.trim()));
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/restaurants/")
        .then((res) => {
          console.log(res.data);
          setRestaurants(res.data);
          //setResult(res.data);
          setSuggestionsRestaurants(res.data);
          setSuggestionsCity([
            ...new Map(res.data.map((item) => [item["city"], item])).values(),
          ]);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        margin: "2% auto",
        width: "75%",
      }}
    >
      <div
        style={{
          width: "100%",
          "text-align": "center",
          margin: "6% 0 2% 0",
        }}
      >
        <AutoSuggest
          theme={{
            ...defaultTheme,
            container: classes.n_react_autosuggest_container,
            input: classes.n_react_autosuggest_input,
            inputOpen: classes.n_react_autosuggest__input__open,
            inputFocused: classes.n_react_autosuggest__input__focused,
            suggestionsContainer:
              classes.n_react_autosuggest__suggestions_container,
            suggestionsContainerOpen:
              classes.n_react_autosuggest__suggestions_container__open,
            suggestionsList: classes.n_react_autosuggest__suggestions_list,
            suggestion: classes.n_react_autosuggest__suggestion,
            suggestionHighlighted:
              classes.n_react_autosuggest__suggestion__highlighted,
          }}
          suggestions={suggestionsRestaurants}
          onSuggestionsClearRequested={(value) => {
            console.log(value);
            console.log("CLEAR");
            setSuggestionsRestaurants([]);
          }}
          onSuggestionsFetchRequested={({ value }) => {
            console.log("FETCH");
            console.log(value);
            setValueRestaurant(value);
            setSuggestionsRestaurants(getSuggestionsRestaurants(value));
          }}
          onSuggestionSelected={(_, { suggestionValue }) => {
            console.log("sugestia");
            console.log(suggestionValue);
            const temp = suggestionValue.split(",");
            console.log(restaurantsName);
            if (temp.length == 1) {
              const array_name = restaurantsName.filter((name) =>
                name.name.includes(temp[0].trim())
              );
              const array_city = restaurantsName.filter((name) =>
                name.city.includes(temp[0].trim())
              );

              if (array_name.length > array_city.length) {
                setResult([...array_name]);
              } else {
                setResult([...array_city]);
              }
            } else {
              console.log("temp");
              console.log(temp);
              const tempArray = restaurantsName.filter((name) => {
                return name.name.includes(temp[0].trim());
              });
              console.log(tempArray);
              const nextArray = tempArray.filter((name) => {
                return name.city.includes(temp[1].trim());
              });
              console.log(nextArray);
              setResult([...nextArray]);
            }
          }}
          getSuggestionValue={(suggestion) => {
            return suggestion.name + ", " + suggestion.city;
          }}
          renderSuggestion={(suggestion) => (
            <span>{suggestion.name + ", " + suggestion.city}</span>
          )}
          inputProps={{
            placeholder: "Nazwa restauracji, miasto",
            value: valueRestaurant,
            onChange: (_, { newValue, method }) => {
              if (newValue === " " || newValue === "") {
                setResult(restaurants);
              }
              setValueRestaurant(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />
        <MainContainer
          style={{
            margin: "2% 0 0 0",
            width: "100%",
            display: "flex",
            "justify-content": "space-between",
          }}
        >
          <Container style={{ margin: 0, width: "100%", padding: "1%" }}>
            <div
              style={{
                display: "flex",
                "flex-wrap": "wrap",
                justifyContent: "space-around",
              }}
            >
              {console.log(result)}
              {restaurants.map((restaurant, index) => {
                if (index < 2) {
                  return (
                    <SubscriptionRestaurants
                      historyProps={props.history}
                      restaurant={restaurant}
                      index={index}
                    />
                  );
                }
              })}

              <div
                style={{ width: "100%", display: "flex", "flex-wrap": "wrap" }}
              >
                {restaurants.length < 6
                  ? tempMyArray.map((restaurant) => (
                      <RestaurationContainer
                        historyProps={props.history}
                        restaurant={restaurant}
                      />
                    ))
                  : result.length > 0
                  ? result.map((restaurant, index) => (
                      <RestaurationContainer
                        index={restaurant.id}
                        number={index}
                        data={restaurant}
                        historyProps={props.history}
                      />
                    ))
                  : restaurantsName.map((restaurant, index) => {
                      return (
                        <RestaurationContainer
                          index={restaurant.id}
                          number={index}
                          data={restaurant}
                          historyProps={props.history}
                        />
                      );
                    })}
              </div>
              {result.length > 0 &&
                result.map((restaurant, index) => {
                  /*
                  return (
                    <ContentController
                      index={restaurant.id}
                      number={index}
                      data={restaurant}
                      historyProps={props.history}
                    />
                  );
                   */
                })}
              {console.log("SUGGESTIONS")}
              {console.log(suggestionsRestaurants)}
              {result.length == 0 &&
                restaurantsName.map((restaurant, index) => {
                  /*
                  return (null
                    <ContentController
                      index={restaurant.id}
                      number={index}
                      data={restaurant}
                      historyProps={props.history}
                    />
                  );
                    */
                })}
            </div>
          </Container>
        </MainContainer>
      </div>
    </div>
  );
};
export default withRouter(Restaurants);
