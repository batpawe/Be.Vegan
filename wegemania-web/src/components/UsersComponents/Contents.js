import React, { useState, useContext, useEffect } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import PostsIcon from "../../icons/VeganAppIcons/posts.svg";
import {
  RestaurantName,
  ContainerRestaurant,
  ImageRestaurant,
} from "../../styles/TempRestaurants";
import {
  ImageComponent,
  ElementContainer,
  Icon,
  HoverContainer,
  HoverHeader,
  HoverText,
  ImageHoverComponent,
} from "../../styles/TempStyle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { green, orange } from "@material-ui/core/colors";
import Image from "../../images/dinner.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  BigRateContainerRecipes,
  SmallRateContainerRecipes,
} from "../../styles/StarsStyle";
import axios from "axios";
import {
  HeaderRecipeContainer,
  RecipeTimeContainer,
  HeaderRecipeText,
  RecipeTime,
  IngredientsList,
  IngredientsItem,
  PreparationItem,
  RecipeImage,
  RateContainer,
  RateHeader,
  RateStars,
} from "../../styles/RecipeStyle";
import RecipesIcon from "../../icons/VeganAppIcons/recipes.svg";
import ikonaCzasuActive from "../../icons/ikonaCzasuactive.svg";
import ikonaMapyActive from "../../icons/ikonaMapyactive.svg";
import ikonaSkladnikowActive from "../../icons/ikonaSkladnikowactive.svg";
import ikonaTresciPrzepisuActive from "../../icons/ikonaTresciprzepisuactive.svg";
import ikonaCzasu from "../../icons/ikonaCzasu.svg";
import ikonaMapy from "../../icons/ikonaMapy.svg";
import ikonaSkladnikow from "../../icons/ikonaSkladnikow.svg";
import ikonaTresciPrzepisu from "../../icons/ikonaTresciprzepisu.svg";
import {
  MainContainer,
  Container,
  ReplacementsContainer,
} from "../../styles/WallStyle";
import ReactStars from "react-stars";
import ClockIcon from "../../icons/white_clock.svg";
import UserIcon from "../../icons/white_user.svg";
import ReplacementsIcon from "../../icons/VeganAppIcons/replacements.svg";
import RestaurantIcon from "../../icons/VeganAppIcons/restaurants.svg";
import {
  WallContainer,
  ElementContainerMobile,
  ImageElement,
  PostsContainer,
  MobileContainer,
  ScrollContainer,
  TextContainer,
} from "../../styles/MobileStyles";
import { PostContainer } from "../../styles/WallStyle";
import { defineLocale } from "moment";

import {
  RecipesName,
  HeaderText,
  ContainerRecipes,
  ImageRecipes,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item,
  WayItem,
} from "../../styles/TempRecipes";

const Recipes = (props) => {
  let recipe = props.recipe;
  const [listIngredients, setListIngredients] = useState([]);

  let text =
    recipe.recipe_decription &&
    recipe.recipe_decription.replace("\r\n\r\n", "\n").replace("\r\n", "\n");

  useEffect(() => {
    {
      /*}
    const fetchData = async () => {
      await axios(`https://veggiesapp.herokuapp.com/recipes/list/${recipe.id}/`)
        .then((res) => {
          console.log(res.data);
          setListIngredients(res.data);
          console.log(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  {*/
    }
  }, []);
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
            src={ikonaSkladnikowActive}
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
            src={ikonaTresciPrzepisuActive}
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
            src={ikonaSkladnikow}
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
            src={ikonaTresciPrzepisu}
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
  const [isHover, setIsHover] = useState(false);
  return (
    <ElementContainer
      style={{
        height: "20vh",
        width: "100%",
        "flex-direction": "column",
        margin: "20% 0 2% 0",
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false); //!
      }}
      onClick={() => props.historyProps.push(`/recipe/${props.recipe.id}`)}
    >
      <HoverContainer style={{ width: "100%", pointer: "cursor" }}>
        {isHover ? (
          <div style={{ width: "100%", position: "relative" }}>
            <ImageHoverComponent
              style={{
                width: "100%",
                height: "220px",
                "border-radius": "4px",
                "object-fit": "cover",
              }}
              src={`${props.recipe.recipe_foto}`}
            />

            <HoverText
              style={{
                "font-size": "16px",
                top: "0",
                padding: 0,
                display: "flex",
                width: "25%",
                margin: 0,
                left: "42%",
                "justify-content": "center",
              }}
            >
              <img
                src={UserIcon}
                style={{ width: "22px", margin: "0 5% 0 0" }}
              />
              <p
                style={{
                  margin: 0,
                  color: "white",
                  "font-size": "18px",
                  width: "60%",
                  textAlign: "right",
                }}
              >
                {props.recipe.id_user.username}
              </p>
            </HoverText>
            <HoverText
              style={{
                "font-size": "16px",
                top: "20%",
                padding: 0,
                display: "flex",
                width: "25%",
                margin: 0,
                left: "42%",
                "justify-content": "center",
              }}
            >
              <img
                src={ClockIcon}
                style={{ width: "22px", margin: "0 5% 0 0" }}
              />
              <p
                style={{
                  margin: 0,
                  color: "white",
                  "font-size": "18px",
                  width: "60%",
                  textAlign: "right",
                }}
              >
                {props.recipe.time}min
              </p>
            </HoverText>
            <div
              style={{
                width: "100%",
                position: "absolute",
                top: "33%",
                left: "4%",
              }}
            >
              <SmallRateContainerRecipes>
                <RateStars style={{ width: "100%" }}>
                  <ReactStars
                    edit={false}
                    value={props.recipe.rating}
                    count={5}
                    className="recipes_rate"
                    //onChange
                    size={24}
                    color2={"#4CAF50"}
                  />
                </RateStars>
              </SmallRateContainerRecipes>
            </div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <ImageComponent
              style={{
                width: "100%",
                height: "220px",
                "border-radius": "4px",
                "object-fit": "cover",
              }}
              src={`${props.recipe.recipe_foto}`}
            />
          </div>
        )}
      </HoverContainer>
      <p style={{ width: "100%", "font-size": "20px" }}>
        {props.recipe.recipe_name}
      </p>
    </ElementContainer>
  );
};
const Restaurants = (props) => {
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
  console.log("|||");
  console.log(props.number);
  const tempTime = props.data.hours.split("\r\n");
  const time = tempTime.map((time) => {
    return [time.split(":", 1).toString(), time.split(":").slice(1).join(":")];
  });
  return (
    <div style={{ margin: "2% 0 2% 0", width: "100%" }}>
      <img
        onClick={() =>
          props.historyProps.push(`/restaurant/${props.restaurant.id}`)
        }
        style={{
          width: "100%",
          height: "40vh",
          "object-fit": "contain",
          cursor: "pointer",
        }}
        src={props.restaurant.foto}
      />
      <p
        style={{
          padding: 0,
          margin: 0,
          "text-align": "center",
          "font-size": "22px",
        }}
      >
        {props.restaurant.name}
      </p>
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
    </div>
  );
};
const Posts = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [error, setError] = useState(false);

  console.log("||||||||||||||");
  console.log(props.index);
  return (
    <PostContainer
      myimg={error ? null : props.post.foto}
      style={{
        width: "100%",
        cursor: "pointer",
        height: "22vh",
        margin: "2% 0 2% 0",
      }}
      onClick={() => props.historyProps.push(`/post/${props.index}`)}
    >
      <img
        src={props.post.foto}
        style={{ display: "none" }}
        onError={() => {
          setError(true);
        }}
      />
      <p style={{ "font-size": "30px", "text-align": "center" }}>
        {props.post.title}
      </p>
      <p style={{ "font-size": "16px", padding: "1%" }}>
        {props.post.description.slice(0, 30)}
      </p>
    </PostContainer>
  );
};
const Replacements = (props) => {
  console.log(props.replacements);
  let replacements = props.replacements && props.replacements[0];
  return (
    <div>
      {replacements && (
        <ul
          style={{
            "list-style-type": "none",
            "font-size": "20px",
            padding: 0,
            margin: 0,
            overflow: "auto",
            "max-height": "100%",
            width: "100%",
          }}
        >
          <ul
            style={{
              "border-bottom": "1px solid black",
              margin: "2% 0 2% 0",
              padding: 0,
              "list-style-type": "none",
            }}
          >
            <li
              style={{
                padding: "1%",
                "text-align": "center",
                "font-size": "15px",
                display: "block",
                background: "#00a835",
                width: "40%",
                "font-weight": "bold",
                margin: "1% auto 1% auto",
                "border-radius": "25px",
                color: "white",
              }}
            >
              {replacements.id_food_to_substitute.food_name}
            </li>
            <li style={{ padding: "2%", "font-size": "17px" }}>
              {replacements.id_food_to_substitute.description}
            </li>
          </ul>
          <ul
            style={{
              margin: "5% 0 5% 0",
              padding: 0,
              "font-size": "15px",
              "list-style-type": "none",
            }}
          >
            <li
              style={{
                padding: "1%",
                "text-align": "center",
                "font-size": "13px",
                display: "block",
                background: "#00a835",
                width: "30%",
                "font-weight": "bold",
                margin: "1% auto 1% auto",
                "border-radius": "25px",
                color: "white",
              }}
            >
              {replacements.id_vegan.name}
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly",
              }}
            >
              <p style={{ width: "20%" }}>Kaloryczność:</p>
              <p style={{ width: "10%" }}>{replacements.id_vegan.kcal}</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly",
              }}
            >
              <p style={{ width: "20%" }}>Proteiny:</p>
              <p style={{ width: "10%" }}>{replacements.id_vegan.protein}</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly",
              }}
            >
              <p style={{ width: "20%" }}>Tłuszcz:</p>
              <p style={{ width: "10%" }}>{replacements.id_vegan.fat}</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly",
              }}
            >
              <p style={{ width: "20%" }}>Węglowodany:</p>
              <p style={{ width: "10%" }}>{replacements.id_vegan.carbs}</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly",
              }}
            >
              <p style={{ width: "20%" }}>Celuloza:</p>
              <p style={{ width: "10%" }}>{replacements.id_vegan.cellulose}</p>
            </li>
          </ul>
        </ul>
      )}
    </div>
  );
};
const Contents = (props) => {
  const user = useContext(NewLoginInfo);
  const [restaurants, setRestaurants] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("USER");
    console.log(user);
    const fetchData = async () => {
      await axios(`${user.Api}/restaurants/`)
        .then((res) => {
          console.log(res.data);
          const temp = res.data.filter((data) => {
            return data.id_moderator === user.userInfo.id;
          });

          setRestaurants(temp);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
      await axios(`${user.Api}/posts/`)
        .then((res) => {
          const temp = res.data.filter((data) => {
            return data.author.id === user.userInfo.id;
          });

          setPosts(temp);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
      await axios(`${user.Api}/recipes/`)
        .then((res) => {
          const temp = res.data.filter((data) => {
            return data.id_user.id === user.userInfo.id;
          });
          setRecipes(temp);
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
      style={{ width: "100%", margin: "1% auto 1% auto", height: "140vh" }}
    >
      <div style={{ width: "100%" }}>
        {restaurants[0] && (
          <Restaurants
            index={restaurants.id}
            number={0}
            restaurant={restaurants[0]}
            data={restaurants[0]}
            historyProps={props.history}
          />
        )}
        {posts[0] && (
          <Posts
            key={posts[0].id}
            index={posts[0].id}
            post={posts[0]}
            historyProps={props.history}
          />
        )}
        {recipes[0] && (
          <Recipes index={0} recipe={recipes[0]} historyProps={props.history} />
        )}
      </div>
    </MainContainer>
  );
};
//miejsca + posty
export default Contents;
