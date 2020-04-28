import React, { useState, useEffect } from "react";
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
import ImageRestaurant from "../../images/restaurant.jpg";
const Element = (props) => {
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
      {props.post && props.post.foto && (
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
      await axios("http://veggies.ddns.net:8181/posts/")
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
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <div
        style={{ width: "100%", "text-align": "center", margin: "6% 0 2% 0" }}
      >
        <AutoSuggest
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
      <Container>
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
