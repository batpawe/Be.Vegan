import React, { useState, useEffect } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import { ReplacementsContainer, Item } from "../../styles/ReplacementsStyle";
import { Scrollbars } from "react-custom-scrollbars";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import {
  SearchPanel,
  SearchInput,
  SearchButton,
} from "../../styles/GlobalStyle";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import AutoSuggest from "react-autosuggest";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
/*
     <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                */
const Replacements = (props) => {
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });
  const [radio, setRadio] = useState("vegan");
  const [replacements, setReplacements] = useState([]);
  const [current, setCurrent] = useState([]);
  const [selected, setSelected] = useState(0);
  const [vegan, setVegan] = useState([]);
  const [nVegan, setNVegan] = useState([]);
  const items = [];
  const [suggestionsVegan, setSuggestionsVegan] = useState([]);
  const [valueVegan, setValueVegan] = useState("");
  const [valueNVegan, setValueNVegan] = useState("");
  const nVegannVegan = nVegan.map((prod) => {
    return prod;
  });
  const veganVegan = vegan.map((prod) => {
    return prod;
  });
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  const [suggestionsNVegan, setSuggestionsNVegan] = useState([]);
  const getSuggestionNVegan = (value) => {
    return nVegannVegan.filter((name) => name.includes(value.trim()));
    //return nameName.filter((name) => name.name.includes(value.trim()));
  };
  const getSuggestionVegan = (value) => {
    return veganVegan.filter((name) => name.includes(value.trim()));
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://veggiesapp.herokuapp.com/substitute/veg/`)
        .then((res) => {
          const newTemp = res.data.reduce((acc, obj) => {
            let nextLoop = false;

            acc.forEach((savedFood) => {
              if (
                obj.id_food_to_substitute.id ===
                savedFood.id_food_to_substitute.id
              ) {
                savedFood.id_vegan.push(obj.id_vegan);
                nextLoop = true;
                return acc;
              }
            });
            if (!nextLoop) {
              acc.push({
                ...obj,
                id_vegan: [obj.id_vegan],
              });
            }
            return acc;
          }, []);
          console.log(newTemp);
          let tempVegan = [];
          let tempNVegan = [];
          newTemp.map((tmp) => {
            tempVegan.push(tmp.id_vegan[0].name);
            tempNVegan.push(tmp.id_food_to_substitute.food_name);
          });
          setVegan(tempVegan);
          console.log(tempVegan);
          setNVegan(tempNVegan);
          console.log(tempNVegan);
          setReplacements(newTemp);
          setCurrent(newTemp[0]);
          console.log(newTemp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  replacements &&
    replacements.map((replacement, index) => {
      if (
        replacement.id_food_to_substitute.food_name.includes(valueNVegan) &&
        replacement.id_vegan[0].name.includes(valueVegan)
      )
        items.push(
          <Item
            id={index}
            onClick={(e) => {
              setSelected(e.target.id);
              setCurrent(replacement);
            }}
            select={selected == index}
          >
            {replacement.id_food_to_substitute.food_name}
          </Item>
        );
    });

  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div>
            {radio == "vegan" ? (
              <AutoSuggest
                style={{ "font-size": 10 }}
                suggestions={suggestionsVegan}
                onSuggestionsClearRequested={() => setSuggestionsVegan([])}
                onSuggestionsFetchRequested={({ value }) => {
                  console.log(value);
                  setValueVegan(value);
                  setSuggestionsVegan(getSuggestionVegan(value));
                }}
                onSuggestionSelected={(_, { suggestionValue }) =>
                  console.log("Wybrany: " + suggestionValue)
                }
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={(suggestion) => <span>{suggestion}</span>}
                inputProps={{
                  placeholder: "Produkt Wegański",
                  value: valueVegan,
                  onChange: (_, { newValue, method }) => {
                    setValueVegan(newValue);
                  },
                }}
                highlightFirstSuggestion={true}
              />
            ) : (
              <AutoSuggest
                suggestions={suggestionsNVegan}
                onSuggestionsClearRequested={() => setSuggestionsNVegan([])}
                onSuggestionsFetchRequested={({ value }) => {
                  console.log(value);
                  setValueNVegan(value);
                  setSuggestionsNVegan(getSuggestionNVegan(value));
                }}
                onSuggestionSelected={(_, { suggestionValue }) =>
                  console.log("Wybrany: " + suggestionValue)
                }
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={(suggestion) => <span>{suggestion}</span>}
                inputProps={{
                  placeholder: "Produkt niewegański",
                  value: valueNVegan,
                  onChange: (_, { newValue, method }) => {
                    setValueNVegan(newValue);
                  },
                }}
                highlightFirstSuggestion={true}
              />
            )}
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
                      "justify-content": "space-between",
                    }}
                  >
                    <FormControlLabel
                      value="vegan"
                      control={<Radio />}
                      label="Produkt wegański"
                    />
                    <FormControlLabel
                      value="nvegan"
                      control={<Radio />}
                      label="Produkt niewegański"
                    />
                  </div>
                </ThemeProvider>
              </RadioGroup>
            </FormControl>
            <div>
              <div style={{ display: "flex" }}>
                <p style={{ "font-weight": "bold" }}>Produkt wegański:</p>
                <p>{valueVegan}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ "font-weight": "bold" }}>Produkt niewegański:</p>
                <p>{valueNVegan}</p>
              </div>
            </div>
          </div>
          <AddPostPageLink
            style={{
              width: "250px",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "font-size": "18px",
              height: "50px",
            }}
            to="/addreplacement"
          >
            Zasugeruj zamiennik
          </AddPostPageLink>
        </SearchPanel>
        <ReplacementsContainer>
          <ul
            style={{
              "list-style-type": "none",
              "font-size": "20px",
              padding: 0,
              margin: 0,
              overflow: "auto",
              width: "20%",
              "max-height": "100%",
              "text-align": "center",
            }}
          >
            {items}
          </ul>
          <ul
            style={{
              "list-style-type": "none",
              "font-size": "20px",
              padding: 0,
              margin: 0,
              overflow: "auto",
              "max-height": "100%",
              width: "80%",
            }}
          >
            <ul
              style={{
                "border-bottom": "1px solid black",
                margin: 0,
                padding: 0,
                "list-style-type": "none",
              }}
            >
              <li
                style={{
                  padding: "1%",
                  "text-align": "center",
                  "font-size": "22px",
                  display: "block",
                  background: "#00a835",
                  width: "40%",
                  "font-weight": "bold",
                  margin: "1% auto 1% auto",
                  "border-radius": "25px",
                  color: "white",
                }}
              >
                {current.id_food_to_substitute &&
                  current.id_food_to_substitute.food_name}
              </li>
              <li style={{ padding: "2%" }}>
                {current.id_food_to_substitute &&
                  current.id_food_to_substitute.description}
              </li>
            </ul>
            {current.id_vegan &&
              current.id_vegan.map((veg) => {
                return (
                  <ul
                    style={{
                      margin: "1% 0 1% 0",
                      padding: 0,
                      "list-style-type": "none",
                    }}
                  >
                    <li
                      style={{
                        padding: "1%",
                        "text-align": "center",
                        "font-size": "16px",
                        display: "block",
                        background: "#00a835",
                        width: "30%",
                        "font-weight": "bold",
                        margin: "1% auto 1% auto",
                        "border-radius": "25px",
                        color: "white",
                      }}
                    >
                      {veg.name}
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Kaloryczność:</p>
                      <p style={{ width: "10%" }}>{veg.kcal}</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Proteiny:</p>
                      <p style={{ width: "10%" }}>{veg.protein}</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Tłuszcz:</p>
                      <p style={{ width: "10%" }}>{veg.fat}</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Węglowodany:</p>
                      <p style={{ width: "10%" }}> 100</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Celuloza:</p>
                      <p style={{ width: "10%" }}>{veg.celulose}</p>
                    </li>
                  </ul>
                );
              })}
          </ul>
        </ReplacementsContainer>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Replacements);
