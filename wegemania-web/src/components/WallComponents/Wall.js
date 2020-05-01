import React, { useState, useContext, useEffect } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
import axios from "axios";
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
  return (
    <ElementContainerMobile>
      {recipe && (
        <MobileContainer>
          <ImageElement
            src={recipe.recipe_foto}
            onClick={() => props.historyProps.push(`/recipe/${recipe.id}`)}
          />
          <ContentContainer
            style={{
              position: "relative",
              width: "100%",
              background: "rgba(255,255,255,0.6)",
            }}
          >
            <img
              style={{
                width: "35px",
                position: "absolute",
                top: 0,
                right: 0,
                background: "green",
              }}
              src={RecipesIcon}
            />
            <RecipesName style={{ "font-size": "14px", width: "80%" }}>
              {recipe.recipe_name}
            </RecipesName>
            {page[props.index] == 0 ? (
              <div>
                <HeaderText>Składniki:</HeaderText>
                <UnorderedList
                  style={{
                    "max-height": "140px",
                    overflow: "auto",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                  }}
                >
                  {listIngredients.map((ingredient) => {
                    return (
                      <ul
                        style={{
                          "font-size": 10,
                          margin: "4% 0 0 0",
                          padding: 0,
                          width: "100%",
                          display: "flex",
                          "justify-content": "space-between",
                          "align-items": "flex-end",
                        }}
                      >
                        <Item
                          style={{
                            "font-size": 10,
                            "max-width": "50%",
                            "text-align": "left",
                            "white-space": "normal",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {ingredient.name}
                        </Item>
                        <Item
                          style={{
                            "font-size": 10,
                            "max-width": "50%",
                            "text-align": "left",
                            "white-space": "normal",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {ingredient.amount}
                        </Item>
                      </ul>
                    );
                  })}
                </UnorderedList>
                <TextContainer>
                  <p
                    style={{
                      color: "#4CAF50",
                      "font-weight": "bold",
                    }}
                  >
                    Czas przygotowania:
                  </p>
                  <p
                    style={{ "font-weight": "bold" }}
                  >{`${recipe.time} minut`}</p>
                </TextContainer>
              </div>
            ) : (
              <div>
                <HeaderText>Sposób przyrządzenia:</HeaderText>
                <UnorderedList
                  style={{
                    overflow: "auto",
                    "max-height": "180px",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <WayItem style={{ "white-space": "pre-line", width: "96%" }}>
                    {JSON.parse(text)}
                  </WayItem>
                </UnorderedList>
              </div>
            )}
            <Paggination index={props.index} />
          </ContentContainer>
        </MobileContainer>
      )}
    </ElementContainerMobile>
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
    <ElementContainerMobile>
      <MobileContainer>
        {/*ttt*/}
        <ImageElement
          src={props.data.foto}
          onClick={() => props.historyProps.push(`/restaurant/${props.index}`)}
        />
        <ContentContainer
          style={{
            width: "100%",
            position: "relative",
            background: "rgba(255,255,255,0.6)",
          }}
        >
          <img
            style={{
              width: "35px",
              background: "green",
              position: "absolute",
              top: 0,
              right: 0,
            }}
            src={RestaurantIcon}
          />
          <RestaurantName>{props.data.name}</RestaurantName>
          {console.log(page[props.index])}
          {page[props.number] == 0 || page[props.number] == undefined ? (
            <div style={{ margin: "10% 0 0 0" }}>
              <HeaderText>Godziny otwarcia:</HeaderText>
              <UnorderedList
                style={{
                  "font-size": "14px",
                  width: "100%",
                  margin: "0",
                  padding: "0",
                  "justify-content": "flex-start",
                  "flex-direction": "column",
                  "max-height": "200px",
                  "align-items": "flex-start",
                }}
              >
                {time.map((t) => {
                  return (
                    <Item
                      style={{
                        "align-items": "flex-start",
                        width: "100%",
                        "justify-content": "space-between",
                        margin: 0,
                        padding: 0,
                        width: "100%",
                      }}
                    >
                      <p style={{ margin: 0 }}>{t[0]}:</p>
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
                  width: 160,
                  height: 170,
                  margin: "1% auto 1% auto",
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
      </MobileContainer>
    </ElementContainerMobile>
  );
};
const Posts = (props) => {
  const [isHover, setIsHover] = useState(false);
  console.log("||||||||||||||");
  console.log(props.index);
  return (
    <ElementContainerMobile style={{ cursor: "pointer" }}>
      <PostsContainer
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
              <ImageHoverComponent
                style={{ width: "100%" }}
                src={`${props.post.foto}`}
              />
              <HoverHeader> {props.post.title}</HoverHeader>
              <HoverText>{props.post.description}</HoverText>
              <Icon style={{ width: "35px" }} src={PostsIcon} />
            </div>
          ) : (
            <div>
              <ImageComponent
                style={{ width: "100%" }}
                src={`${props.post.foto}`}
              />
              <Icon style={{ width: "35px" }} src={PostsIcon} />
            </div>
          )}
        </HoverContainer>
      </PostsContainer>
    </ElementContainerMobile>
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
const Wall = (props) => {
  const user = useContext(NewLoginInfo);
  const [recipes, setRecipes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [posts, setPosts] = useState([]);
  const [replacements, setReplacements] = useState([]);
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      await axios(`${user.Api}/restaurants/`)
        .then((res) => {
          console.log(res.data);
          setRestaurants(res.data);
          console.log(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
      await axios(`${user.Api}/posts/`)
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
      await axios(`${user.Api}/recommend`)
        .then((res) => {
          setRecipes(res.data);
        })
        .catch((err) => console.log(err));
      await axios(`${user.Api}/substitute/veg/`)
        .then((res) => {
          setReplacements(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <MainContainer>
      <WallContainer>
        {recipes[0] &&
          recipes.map((recipe) => (
            <Recipes index={0} recipe={recipe} historyProps={props.history} />
          ))}
        {restaurants[0] && (
          <Restaurants
            index={restaurants[0].id}
            number={0}
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
        <div
          style={{
            background: "rgba(255,255,255,0.6)",
            height: "100%",
            width: "40%",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                width: "35px",
                background: "green",
                right: 0,
                top: 0,
              }}
              src={ReplacementsIcon}
            />
            <h1
              style={{
                color: "black",
                "font-size": "18px",
                "text-align": "center",
              }}
            >
              Zamienniki
            </h1>
            <ScrollContainer style={{ margin: 0 }}>
              {replacements && <Replacements replacements={replacements} />}
            </ScrollContainer>
          </div>
        </div>
      </WallContainer>
      <RightPanel />
    </MainContainer>
  );
};
//miejsca + posty
export default Wall;
