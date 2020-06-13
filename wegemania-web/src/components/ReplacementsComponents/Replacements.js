import React, { useState, useEffect, useContext } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import { ReplacementsContainer, Item } from "../../styles/ReplacementsStyle";
import { Scrollbars } from "react-custom-scrollbars";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import AddReplacementButton from "../../icons/more.svg";
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
import { makeStyles } from "@material-ui/core/styles";
import { defaultTheme } from "react-autosuggest/dist/theme";
import { replace } from "formik";
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
  const useStyles = makeStyles({
    n_react_autosuggest_container: {
      position: "relative",
      background: "rgba(255,255,255,.9)",
      "border-radius": "6px",
      width: "60%",
      margin: "0 auto",
    },

    n_react_autosuggest_input: {
      background: "none",
      padding: "5px 5px",
      width: "100%",
      margin: "1% auto 1% auto",
      "text-align": "left",
      "font-size": "24px",
      "font-family": "Helvetica, sans-serif",
      "font-weight": 300,
      border: "none",
      "&::placeholder": {
        color: "grey",
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
  const user = useContext(NewLoginInfo);
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });
  const classes = useStyles();
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
    const tempVegan = [];
    const tempNVegan = [];
    replacements.map((data) => {
      data.id_vegan.map((veg) => {
        tempVegan.push(veg);
      });

      tempNVegan.push(data.id_food_to_substitute);
    });

    const VeganProducts = tempVegan.filter((name) =>
      name.name.includes(value.trim())
    );
    const NVeganProducts = tempNVegan.filter((name) => {
      console.log(name.food_name.includes(value.trim()));
      return name.food_name.includes(value.trim());
    });
    console.log(tempNVegan);
    return VeganProducts > NVeganProducts ? VeganProducts : NVeganProducts;
  };
  const [newSelected, setNewSelected] = useState(0);
  const [newCurrent, setNewCurrent] = useState([]);
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      await axios(`${user.Api}/substitute/veg/`)
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

          setNVegan(tempNVegan);

          setReplacements(newTemp);
          let newValueTest = false;
          newTemp &&
            newTemp.map((replacement, index) => {
              console.log("DDDDDDDDDDD");
              console.log(valueVegan);
              let temp = false;
              replacement.id_vegan.map((veg) => {
                if (
                  veg.name.includes(valueVegan) ||
                  replacement.id_food_to_substitute.food_name.includes(
                    valueVegan
                  )
                ) {
                  if (newValueTest == false) {
                    newValueTest = true;
                    setNewSelected(index);
                    setNewCurrent(replacement);
                    console.log(index);
                    console.log(replacement);
                  }
                }
              });
            });
          console.log(newTemp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [valueVegan]);
  replacements &&
    replacements.map((replacement, index) => {
      let temp = false;
      replacement.id_vegan.map((veg) => {
        if (
          veg.name.includes(valueVegan) ||
          replacement.id_food_to_substitute.food_name.includes(valueVegan)
        ) {
          temp = true;
        }
      });
      if (temp) {
        items.push(
          <Item
            id={index}
            onClick={(e) => {
              setNewSelected(e.target.id);
              setNewCurrent(replacement);
            }}
            select={newSelected == index}
          >
            {replacement.id_food_to_substitute.food_name}
          </Item>
        );
      }
    });

  return (
    <MainContainer
      style={{
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
        width: "100%",
        margin: "6% auto 0 auto",
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
        getSuggestionValue={(suggestion) =>
          suggestion.name || suggestion.food_name
        }
        renderSuggestion={(suggestion) => (
          <span>{suggestion.name || suggestion.food_name}</span>
        )}
        inputProps={{
          placeholder: "Nazwa produktu",
          value: valueVegan,
          onChange: (_, { newValue, method }) => {
            setValueVegan(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
      {/*addreplacement*/}
      <Container
        style={{
          margin: "2% auto 0 auto",
          height: "70vh",
          position: "relative",
        }}
      >
        <img
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            top: 5,
            right: 5,
            cursor: "pointer",
          }}
          onClick={() => {
            props.history.push("/addreplacement");
          }}
          src={AddReplacementButton}
        />
        <ReplacementsContainer style={{ height: "100%", margin: "2% 0 0 0" }}>
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
                {newCurrent.id_food_to_substitute &&
                  newCurrent.id_food_to_substitute.food_name}
              </li>
              <li style={{ padding: "2%" }}>
                {newCurrent.id_food_to_substitute &&
                  newCurrent.id_food_to_substitute.description}
              </li>
            </ul>
            {newCurrent.id_vegan &&
              newCurrent.id_vegan.map((veg) => {
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
                      <p style={{ width: "20%" }}>{veg.kcal} kcal</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Proteiny:</p>
                      <p style={{ width: "20%" }}>{veg.protein} gram</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Tłuszcz:</p>
                      <p style={{ width: "20%" }}>{veg.fat} gram</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Węglowodany:</p>
                      <p style={{ width: "20%" }}>{veg.carbs} gram</p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        width: "100%",
                        "justify-content": "space-evenly",
                      }}
                    >
                      <p style={{ width: "20%" }}>Celuloza:</p>
                      <p style={{ width: "20%" }}>{veg.cellulose} gram</p>
                    </li>
                  </ul>
                );
              })}
          </ul>
        </ReplacementsContainer>
      </Container>
    </MainContainer>
  );
};
export default withRouter(Replacements);
