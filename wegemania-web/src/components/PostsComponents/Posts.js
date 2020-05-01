import React, { useState, useEffect, useContext } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import RightPanel from "../GlobalComponents/RightPanel";
import Image from "../../images/restaurant.jpg";
import {
  ImageComponent,
  ElementContainer,
  Icon,
  HoverContainer,
  HoverHeader,
  HoverText,
  ImageHoverComponent,
} from "../../styles/TempStyle";
import PinIcon from "../../icons/VeganAppIcons/pin.svg";
import PostsIcon from "../../icons/VeganAppIcons/posts.svg";
import RecipesIcon from "../../icons/VeganAppIcons/recipes.svg";
import ReplacementsIcon from "../../icons/VeganAppIcons/replacements.svg";
import RestaurantsIcon from "../../icons/VeganAppIcons/restaurants.svg";
import { withRouter } from "react-router";
import {
  AddPostPageContainer,
  AddPostPageLink,
  SearchInput,
  SearchButton,
  SearchContainer,
} from "../../styles/PostStyle";
import axios from "axios";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import ImageRestaurant from "../../images/restaurant.jpg";
import { NewLoginInfo } from "../../context/LoginInfo";
import { defaultTheme } from "react-autosuggest/dist/theme";
const Element = (props) => {
  const [visible, setVisible] = useState(true);

  var moment = require("moment");
  const [isHover, setIsHover] = useState(false);
  console.log("||||||||||||||");
  console.log(props.index);
  return (
    <div
      style={{
        width: "100%",
        padding: "2% 0 0 0",
        "border-bottom": "1px solid black",
      }}
      onClick={() => props.historyProps.push(`/post/${props.index}`)}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ color: "#27ae60", "font-size": "26px", width: "26%" }}>
          {props.post.author.username}
        </p>
        <p
          style={{
            "font-size": "28px",
            "font-weight": "bold",
            width: "48%",
            "text-align": "center",
            cursor: "pointer",
          }}
          onClick={() => props.historyProps.push(`/post/${props.index}`)}
        >
          {props.post.title}
        </p>
        <p style={{ "font-size": "26px", width: "26%", "text-align": "right" }}>
          {moment(props.post.data_stamp).format("YYYY-MM-D")}
        </p>
      </div>
      <p style={{ "font-size": "24px" }}>{props.post.description}</p>
      {props.post.foto && visible && (
        <div
          style={{
            width: "100%",
            margin: "auto",
            cursor: "pointer",
            height: "60%",
          }}
        >
          <img
            src={props.post.foto}
            style={{
              "object-fit": "contain",
              width: "80%",
              margin: "0 auto",
              display: "block",
              height: "100%",
            }}
            onError={() => {
              setVisible(false);
            }}
          />
        </div>
      )}

      {/*}
    <ElementContainer
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => props.historyProps.push(`/post/${props.index}`)}
    >
      <HoverContainer>
        {isHover ? (
          <div>
            <ImageHoverComponent src={`${props.post.foto}`} />
            <HoverHeader> {props.post.title}</HoverHeader>
            <HoverText>{props.post.description}</HoverText>
          </div>
        ) : (
          <div>
            <ImageComponent src={`${props.post.foto}`} />
          </div>
        )}
      </HoverContainer>
    </ElementContainer>
        {*/}
    </div>
  );
};
const Posts = (props) => {
  const user = useContext(NewLoginInfo);
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
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const titleName = data.map((date) => {
    return date;
  });
  const getSuggestions = (value) => {
    return titleName.filter((title) => title.title.includes(value.trim()));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios(`${user.Api}/posts/`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setSuggestions(res.data.map((date) => date.title));
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, []);
  return (
    <MainContainer
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        margin: "2% auto",
        width: "75%",
      }}
    >
      <div
        style={{ width: "100%", "text-align": "center", margin: "6% 0 2% 0" }}
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
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            console.log(value);
            setValue(value);
            setSuggestions(getSuggestions(value));
          }}
          onSuggestionSelected={(_, { suggestionValue }) =>
            console.log("Wybrany: " + suggestionValue)
          }
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={(suggestion) => <span>{suggestion.title}</span>}
          inputProps={{
            placeholder: "Wprowadź tytuł",
            value: value,
            onChange: (_, { newValue, method }) => {
              setValue(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />
      </div>
      <Container style={{ width: "100%" }}>
        <AddPostPageContainer
          style={{ background: "none", padding: "2% 0 2% 0" }}
        >
          <AddPostPageLink
            style={{ width: "100%", "font-size": "32px" }}
            to="/addpost"
          >
            Utwórz swojego posta
          </AddPostPageLink>
        </AddPostPageContainer>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-between",
          }}
        >
          {data.map((date, index) => {
            if (date.title.includes(value))
              return (
                <Element
                  key={date.id}
                  index={date.id}
                  post={date}
                  historyProps={props.history}
                />
              );
          })}
        </div>
        {/*}
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        {*/}
      </Container>
      {/*<RightPanel />*/}
    </MainContainer>
  );
};
export default withRouter(Posts);
