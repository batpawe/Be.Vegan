import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {
  Container,
  Button,
  TextInput,
  InputLabel,
  TextArea,
  Image,
  ColumnContainer,
  ImagesContainer,
  TextColumnInput,
  AddItem,
  ReplacementsContainer,
  SecondColumn,
  ReplacementImage,
  ReplacementContainer,
  RecplacementsLabel,
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
import { NewNotifyContext } from "../../context/Notify";
import { makeStyles } from "@material-ui/core/styles";
import { defaultTheme } from "react-autosuggest/dist/theme";
const AddReplecement = () => {
  const qs = require("querystring");
  const notify = useContext(NewNotifyContext);
  const [veganResult, setVeganResult] = useState([]);
  const [nVeganResult, setNveganResult] = useState([]);
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
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
  const [allVeganItems, setAllVeganItems] = useState([]);
  const [veganItem, setVeganItem] = useState({});
  const [allNVeganItems, setAllNVeganItems] = useState([]);
  const [nveganItem, setNVeganItem] = useState({});
  const [suggestionsVegan, setSuggestionsVegan] = useState([]);
  const [suggestionsNVegan, setSuggestionsNVegan] = useState([]);
  const [vegan, setVegan] = useState("");
  const [nvegan, setNVegan] = useState("");
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [numberReplacements, setNumberReplacements] = useState(1);
  const [replacementsArray, setReplacementsArray] = useState([]);
  const handleReplacements = (e) => {
    let temp = replacementsArray;
    for (var i = 0; i < numberReplacements; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id] = e.target.value;
    setReplacementsArray(temp);
  };
  const handleChange = (i, event) => {
    console.log(i);
    console.log(event.target.files[0]);
    let temp = file;
    temp[i] = event.target.files[0];
    setFile([...temp]);
  };

  const nextReplacementsField = () => {
    let temp = numberReplacements + 1;
    setNumberReplacements(temp);
  };

  const prevReplacementsField = () => {
    let temp = numberReplacements - 1;
    setNumberReplacements(temp);
  };
  const [selectedOption, setSelectedOption] = useState("vegan");
  const handleCheck = (e) => {
    setSelectedOption(e.target.value);
  };
  const classes = useStyles();
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      await axios(`${user.Api}/ingredients/`)
        .then((res) => {
          setAllVeganItems(res.data);
          setSuggestionsVegan(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      await axios(`${user.Api}/substitute/nveg/`)
        .then((res) => {
          setAllNVeganItems(res.data);
          setSuggestionsNVegan(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  const getSuggestionVegan = (value) => {
    setVeganItem(
      allVeganItems.filter((name) =>
        name.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
    return allVeganItems.filter((name) =>
      name.name.toLowerCase().includes(value.trim().toLowerCase())
    );
  };
  const getSuggestionNVegan = (value) => {
    setNVeganItem(
      allNVeganItems.filter((name) =>
        name.food_name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
    return allNVeganItems.filter((name) =>
      name.food_name.toLowerCase().includes(value.trim().toLowerCase())
    );
  };
  const Add = async () => {
    /*
    const data = new FormData();
    data.append("id_restaurant", props.match.params.id);
    data.append("user_comment", descriptionComment);
    data.append("rating", myRate);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
      },
      body: data,
    };
    await fetch(`https://veggiesapp.herokuapp.com/restaurants/rating/`, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          res.text().then((text) => {
            let json = JSON.parse(text);
            console.log(json);
            if (json.id_restaurant) {
              notify.set("Pomyślnie dodano komentarz.");
              setTimeout(() => {
                setDeleyedRedirect(true);
              }, 2000);
            } else {
              console.log(res);
              console.log(res.response);
              notify.set("Wystąpił nieoczekiwany błąd!");
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.response.data);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
      */
    /*
    const params = new URLSearchParams();
    params.append("id_food_to_substitute", props.match.params.id);
    params.append("show_on_view", false);
    params.append("id_vegan", myRate);
*/ console.log(
      nVeganResult[0].id
    );
    //console.log(veganResult[0].id);
    if (!nVeganResult[0]) {
      notify.set("Wybierz produkt niewegański z listy");
    } else if (!nVeganResult[0].id) {
      notify.set("Wybierz produkt niewegański z listy");
    } else if (!veganResult[0]) {
      notify.set("Wybierz produkt wegański z listy");
    } else if (!veganResult[0].id) {
      notify.set("Wybierz produkt wegański z listy");
    } else {
      console.log(nvegan[0].id);
      console.log(vegan[0].id);
      axios({
        method: "post",
        url: `${user.Api}/addsubstitute/`,
        data: qs.stringify({
          id_food_to_substitute: nVeganResult[0].id,
          user_comment: false,
          id_vegan: veganResult[0].id,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Token ${user.userInfo.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            notify.set(
              "Twoja propozycja zamiennika została dodana do weryfikacji."
            );
            setTimeout(() => {
              setDeleyedRedirect(true);
            }, 2000);
          } else {
            notify.set("Wystąpił nieoczekiwany błąd");
          }
          console.log(res.data.data);
          console.log(res.body);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    }
  };
  return (
    <Container>
      {" "}
      {deleyedRedirect && <Redirect to={`/replacements`} />}
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "flex-direction": "column",
          "align-items": "center",
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
          suggestions={suggestionsNVegan}
          onSuggestionsClearRequested={() => setSuggestionsNVegan([])}
          onSuggestionsFetchRequested={({ value }) => {
            console.log(value);
            setNVegan(value);
            setSuggestionsNVegan(getSuggestionNVegan(value));
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
            placeholder: "Nazwa produktu nieweganskiego",
            value: nvegan,
            onChange: (_, { newValue, method }) => {
              const temp = allNVeganItems.filter((name) =>
                name.food_name
                  .toLowerCase()
                  .includes(newValue.trim().toLowerCase())
              );
              setNveganResult(temp);
              console.log(temp);
              setNVegan(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />

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
            setVegan(value);
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
            placeholder: "Nazwa produktu weganskiego",
            value: vegan,
            onChange: (_, { newValue, method }) => {
              const temp = allVeganItems.filter((name) =>
                name.name.toLowerCase().includes(newValue.trim().toLowerCase())
              );
              setVeganResult(temp);
              console.log(temp);
              setVegan(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />

        {/*}
      <div style={{ margin: "1% auto 0 auto", width: "100%" }}>
        <ColumnContainer
          style={{
            margin: "0 0 0 0",
            width: "100%",
            margin: "1% auto 1% auto",
          }}
        >
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
              width: "70%",
              margin: "1% auto 1% auto",
            }}
          >
            <label
              for="vegname"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj nazwę produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="vegname"
                type="text"
                placeholder="nazwa produktu wegańskiego"
              />
            </label>
            <label
              for="kalorycznosc"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj kaloryczność produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="kalorycznosc"
                type="text"
                placeholder="kaloryczność produktu wegańskiego"
              />
            </label>
            <label
              for="proteiny"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość protein produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="proteiny"
                type="text"
                placeholder="ilość protein produktu wegańskiego"
              />
            </label>
            <label
              for="tluszcz"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość tłuszczu produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="tluszcz"
                type="text"
                placeholder="ilosc tluszczu produktu wegańskiego"
              />
            </label>
            <label
              for="weglowodany"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość węglowodanów produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="weglowodany"
                type="text"
                placeholder="ilość węglowodanów produktu wegańskiego"
              />
            </label>
            <label
              for="celuloza"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość celulozy produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="celuloza"
                type="text"
                placeholder="ilość celulozy produktu wegańskiego"
              />
            </label>
            <div className="image-upload" style={{ margin: "0 auto 0 auto" }}>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="file-input-0"
                type="file"
                onChange={(e) => handleChange(0, e)}
              />
            </div>
          </div>
        </ColumnContainer>
      </div>
            {*/}
      </div>
      <Button
        onClick={() => {
          Add();
        }}
      >
        Dodaj zamiennik
      </Button>
    </Container>
  );
};
export default AddReplecement;
