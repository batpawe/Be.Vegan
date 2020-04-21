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
  ImageHoverComponent
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
  SearchContainer
} from "../../styles/PostStyle";
import axios from "axios";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestStyle.css";
import ImageRestaurant from "../../images/restaurant.jpg";
const Element = props => {
  const [isHover, setIsHover] = useState(false);
  console.log("||||||||||||||");
  console.log(props.index);
  return (
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
  );
};
const Posts = props => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const titleName = data.map(date => {
    return date;
  });
  const getSuggestions = value => {
    return titleName.filter(title => title.title.includes(value.trim()));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/posts/")
        .then(res => {
          console.log(res.data);
          setData(res.data);
          setSuggestions(res.data.map(date => date.title));
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
          <SearchContainer>
            <div>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  "font-weight": "bold",
                  color: "#27ae60"
                }}
              >
                Filtruj:
              </p>
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
                getSuggestionValue={suggestion => suggestion.title}
                renderSuggestion={suggestion => <span>{suggestion.title}</span>}
                inputProps={{
                  placeholder: "Wprowadź tytuł",
                  value: value,
                  onChange: (_, { newValue, method }) => {
                    setValue(newValue);
                  }
                }}
                highlightFirstSuggestion={true}
              />
            </div>
            {/*<SearchInput placeholder="Wpisz tytuł lub tag"></SearchInput>*/}
            {/* <SearchButton>Wyszukaj</SearchButton> */}
          </SearchContainer>
          <AddPostPageLink
            style={{ width: "200px", "font-size": "18px" }}
            to="/addpost"
          >
            Dodaj post
          </AddPostPageLink>
        </AddPostPageContainer>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-between"
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
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Posts);