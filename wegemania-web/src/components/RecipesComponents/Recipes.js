//props.match.params
import React, { useState, useEffect, useContext } from "react";
import DeleteIcon from "../../icons/bin_delete.svg";
import EditIcon from "../../icons/edit.svg";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
//import { tempObj } from "./tempObj.js";
import { MainContainer, Container } from "../../styles/WallStyle";
import "../../styles/Paginate.css";
import {
  SortPageButton,
  SortContainer,
  SortRow,
  SortLabel,
  SortLabelLocation,
  SortSelect,
  SortInput,
  SortButton,
  PostTextHeader,
  PostInfoContainer,
  PostRow,
  PostInfoItem,
  ImagesContainer,
  TextPostMinHeader,
  HeaderCommentsText,
  HeaderContainer,
  CommentsContainer,
  MapContainer,
  HeaderCommentsElements,
  PostInfoParagraph,
  AddCommentContainer,
  AddCommentButton,
  TextArea,
  Comment,
  UserLink,
  PostLink,
  UserActionsContainer,
  Icon,
} from "../../styles/ContainerStyles";
import { defaultTheme } from "react-autosuggest/dist/theme";
import "../../styles/Rate.css";
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
import ClockIcon from "../../icons/white_clock.svg";
import UserIcon from "../../icons/white_user.svg";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {
  SearchPanel,
  SearchInput,
  SearchButton,
} from "../../styles/GlobalStyle";

import ikonaSkladnikowActive from "../../icons/ikonaSkladnikowactive.svg";
import ikonaTresciPrzepisuActive from "../../icons/ikonaTresciprzepisuactive.svg";
import ikonaSkladnikow from "../../icons/ikonaSkladnikow.svg";
import ikonaTresciPrzepisu from "../../icons/ikonaTresciprzepisu.svg";
import axios from "axios";
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
import AddRecipeIcon from "../../icons/more.svg";
import Pagination from "@material-ui/lab/Pagination";
import {
  ImageComponent,
  ElementContainer,
  HoverIcon,
  HoverContainer,
  HoverHeader,
  HoverText,
  ImageHoverComponent,
} from "../../styles/TempRecipes";
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
import ReactStars from "react-stars";
import "../../styles/SuggestStyle.css";
import "../../styles/PaginationStyle.css";

import {
  BigRateContainerRecipes,
  SmallRateContainerRecipes,
} from "../../styles/StarsStyle";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Recipes = (props) => {
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
  const [current, setCurrent] = useState(1);
  const [length, setLength] = useState(0);
  const [products, setProducts] = useState([]);
  const [names, setNames] = useState([]);
  const [data, setData] = useState([]);
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });
  const [radio, setRadio] = useState("name");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  const [recipes, setRecipes] = useState([]);
  const [suggestionsName, setSuggestionsName] = useState([]);
  const [valueName, setValueName] = useState("");
  const [valueProduct, setValueProduct] = useState("");
  const nameName = names.map((name) => {
    return name;
  });
  const productProduct = products.map((product) => {
    return product;
  });
  const [suggestionsProduct, setSuggestionsProduct] = useState([]);
  const getSuggestionName = (value) => {
    console.log(
      nameName.filter((name) =>
        name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
    return nameName.filter((name) =>
      name.toLowerCase().includes(value.trim().toLowerCase())
    );
    //return nameName.filter((name) => name.name.includes(value.trim()));
  };
  const getSuggestionProduct = (value) => {
    const temp = productProduct.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return temp[0].filter((prod) => prod.name.includes(value.trim()));
  };
  const classes = useStyles();
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      /* https://veggiesapp.herokuapp.com/recipes/*/
      await axios(`${user.Api}/recipes/`)
        .then((res) => {
          setData(res.data);
          /*
          const temp = res.data.reduce((acc, curr, i) => {
            if (!(i % 6)) {
              if (
                curr.recipe_name.includes(valueName) &&
                curr.ingredients.some((x) => x.name.includes(valueProduct))
              )
                // if index is 0 or can be divided by the `size`...
                acc.push(res.data.slice(i, i + 6)); // ..push a chunk of the original array to the accumulator
            }
            return acc;
          }, []);
          */
          var tempArray = [];

          const temp = res.data.reduce((acc, curr, i) => {
            if (
              curr.recipe_name.includes(valueName) &&
              curr.ingredients.some((x) => x.name.includes(valueProduct))
            ) {
              tempArray.push(curr);
            }
            return tempArray;
          }, []);
          const tempResult = temp.reduce((acc, curr, i) => {
            if (!(i % 18)) {
              acc.push(temp.slice(i, i + 18)); // ..push a chunk of the original array to the accumulator
            }
            return acc;
          }, []);
          console.log("PPP");
          console.log(temp);
          console.log(tempResult);
          setLength(tempResult.length);
          setRecipes(tempResult);
          let tempProducts = [];
          let tempNames = [];
          res.data.map((date) => {
            console.log("|||||:");
            console.log(date);
            tempProducts.push(date.ingredients);
            tempNames.push(date.recipe_name);
          });
          setProducts(tempProducts);
          setNames(tempNames);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /*
    const byObj = () => {

      console.log(tempObj);
      const temp = tempObj.reduce((acc, curr, i) => {
        if (!(i % 6)) {
          // if index is 0 or can be divided by the `size`...
          acc.push(tempObj.slice(i, i + 6)); // ..push a chunk of the original array to the accumulator
        }
        return acc;
      }, []);
      let num = 0;
      tempObj.map((recipe, index) => {
        let temp = JSON.parse(recipe.recipe_name);

        if (
          temp.includes(valueName) &&
          recipe.ingredients.some((x) => x.name.includes(valueProduct))
        ) {
          num++;
        }
      });
      console.log("VVVVV");
      console.log(num);
      setLength(num);
      setRecipes(temp);
      let tempProducts = [];
      let tempNames = [];
      tempObj.map((date) => {
        console.log("|||||:");
        console.log(date);
        tempProducts.push(date.ingredients);
        tempNames.push(date.recipe_name);
      });
      setProducts(tempProducts);
      setNames(tempNames);
    };
*/
    // byObj();
    fetchData();
  }, []);
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);
  const Paggination = (props) => {
    let no = props.no || 2;
    if (page[props.index] === undefined) {
      let tmp = page;
      tmp[props.index] = 0;
      setPage([...tmp]);
    }
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
      if (page[props.index] === undefined) {
        let tmp = page;
        tmp[props.index] = 0;
        setPage([...tmp]);
      }
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
  const ContentController = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [listIngredients, setListIngredients] = useState([]);
    useEffect(() => {
      {
        /*}
      const fetchData = async () => {
        await axios(
          `https://veggiesapp.herokuapp.com/recipes/list/${props.recipe.id}/`
        )
          .then((res) => {
            setListIngredients(res.data);
            console.log("WWWWWWWWW");
            console.log(props.recipe.id);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    {*/
      }
    }, []);
    return (
      <ElementContainer
        style={{ height: "15%" }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
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
                  display: "flex",
                  "justify-content": "center",
                }}
              >
                <img
                  src={UserIcon}
                  style={{ width: "22px", margin: "0 5% 0 0" }}
                />
                <p style={{ margin: 0, color: "white", "font-size": "18px" }}>
                  {props.recipe.id_user.username}
                </p>
              </HoverText>
              <HoverText
                style={{
                  "font-size": "16px",
                  top: "18%",
                  display: "flex",
                  "justify-content": "center",
                }}
              >
                <img
                  src={ClockIcon}
                  style={{ width: "22px", margin: "0 5% 0 0" }}
                />
                <p style={{ margin: 0, color: "white", "font-size": "18px" }}>
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
                    {recipes[current - 1] && (
                      <ReactStars
                        edit={false}
                        value={props.recipe.rating}
                        count={5}
                        className="recipes_rate"
                        //onChange
                        size={24}
                        color2={"#4CAF50"}
                      />
                    )}
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
        <p style={{ width: "100%" }}>{props.recipe.recipe_name}</p>
      </ElementContainer>
    );
  };
  const [isHover, setIsHover] = useState(false);
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
          suggestions={suggestionsName}
          onSuggestionsClearRequested={() => setSuggestionsName([])}
          onSuggestionsFetchRequested={({ value }) => {
            console.log(value);
            setValueName(value);
            setSuggestionsName(getSuggestionName(value));
          }}
          onSuggestionSelected={(_, { suggestionValue }) =>
            console.log("Wybrany: " + suggestionValue)
          }
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => <span>{suggestion}</span>}
          inputProps={{
            placeholder: "Znajdź przepis",
            value: valueName,
            onChange: (_, { newValue, method }) => {
              setCurrent(1);

              var tempArray = [];
              if (newValue === "") {
                console.log("START");
              }
              const temp = data.reduce((acc, curr, i) => {
                if (
                  curr.recipe_name.includes(newValue) &&
                  curr.ingredients.some((x) => x.name.includes(valueProduct))
                ) {
                  tempArray.push(curr);
                }
                return tempArray;
              }, []);
              const tempResult = temp.reduce((acc, curr, i) => {
                if (!(i % 18)) {
                  acc.push(temp.slice(i, i + 18)); // ..push a chunk of the original array to the accumulator
                }
                return acc;
              }, []);
              console.log("STARTEMP");
              console.log(temp);
              console.log(tempResult);
              console.log("STOPTEMP");

              setLength(tempResult.length);
              setRecipes([...tempResult]);

              setValueName(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />
      </div>
      {/*}
          <SearchButton
            to="/addrecipe"
            style={{
              display: "flex",
              background: "27ae60",
              color: "white",
              width: "200px",
              height: "50px",
              "text-decoration": "none",
              padding: "0 1% 0 1%",
              "font-size": "18px",
              "justify-content": "center",
              "align-items": "center",
            }}
          >
            Dodaj przepis
          </SearchButton>
          {*/}

      <MainContainer
        style={{
          margin: 0,
          width: "100%",
          display: "flex",
          "justify-content": "space-between",
        }}
      >
        <Container style={{ margin: 0, width: "100%" }}>
          <div>
            <ElementContainer
              style={{
                height: "15%",
                width: "100%",
                "flex-direction": "row",
                margin: "0 0 2% 0",
              }}
              onClick={() =>
                props.history.push(`/recipe/${recipes[current - 1][0].id}`)
              }
            >
              <HoverContainer
                style={{ width: "100%", flex: "1", cursor: "pointer" }}
              >
                {console.log("test1")}

                {recipes[current - 1] &&
                  (isHover ? (
                    <div style={{ width: "100%" }}>
                      <ImageHoverComponent
                        onMouseEnter={() => {
                          setIsHover(true);
                        }}
                        onMouseLeave={() => {
                          setIsHover(false);
                        }}
                        style={{
                          width: "100%",

                          "border-radius": "4px",
                        }}
                        src={`${recipes[current - 1][0].recipe_foto}`}
                      />
                      <HoverText
                        style={{
                          "font-size": "22px",
                          top: "0",
                          display: "flex",
                          "justify-content": "center",
                        }}
                      >
                        <img
                          src={UserIcon}
                          style={{ width: "30px", margin: "0 5% 0 0" }}
                        />
                        <p
                          style={{
                            margin: 0,
                            color: "white",
                            "font-size": "20px",
                          }}
                        >
                          {recipes[current - 1][0].id_user.username}
                        </p>
                      </HoverText>
                      <HoverText
                        style={{
                          "font-size": "22px",
                          top: "15%",
                          display: "flex",
                          "justify-content": "center",
                        }}
                      >
                        <img
                          src={ClockIcon}
                          style={{ width: "30px", margin: "0 5% 0 0" }}
                        />
                        <p
                          style={{
                            margin: 0,
                            color: "white",
                            "font-size": "20px",
                          }}
                        >
                          {recipes[current - 1][0].time}min
                        </p>
                      </HoverText>
                    </div>
                  ) : (
                    <div style={{ width: "100%" }}>
                      <ImageComponent
                        onMouseEnter={() => {
                          setIsHover(true);
                        }}
                        onMouseLeave={() => {
                          setIsHover(false);
                        }}
                        style={{
                          width: "100%",
                          "object-fit": "cover",
                          "border-radius": "4px",
                        }}
                        onClick={() =>
                          props.history.push(
                            `/recipe/${recipes[current - 1][0].id}`
                          )
                        }
                        src={`${recipes[current - 1][0].recipe_foto}`}
                      />
                    </div>
                  ))}
              </HoverContainer>
              <div
                style={{
                  "text-align": "center",
                  width: "100%",
                  flex: 2,
                  "text-align": "left",
                  margin: "0 0 0 2%",
                }}
              >
                <p
                  style={{
                    "font-size": "22px",
                    margin: "0 auto 0 auto",
                    padding: 0,
                    "text-align": "center",
                    width: "80%",
                    color: "#4CAF50",
                    "font-weight": "bold",
                  }}
                >
                  Spróbuj tego!
                </p>
                <p
                  style={{
                    "font-size": "40px",
                    "text-align": "center",
                    "letter-spacing": "20px",
                    padding: "8% 0 0 0",
                    margin: "0 auto 0 auto",
                    width: "80%",
                    "border-bottom": "1px solid black",
                  }}
                >
                  {recipes[current - 1] && recipes[current - 1][0].recipe_name}
                </p>
                <BigRateContainerRecipes style={{ width: "100%" }}>
                  {console.log("PPP")}
                  <RateStars style={{ width: "100%" }}>
                    {recipes[current - 1] && (
                      <ReactStars
                        edit={false}
                        value={recipes[current - 1][0].rating}
                        count={5}
                        className="recipes_rate"
                        //onChange
                        size={56}
                        color2={"#4CAF50"}
                      />
                    )}
                  </RateStars>
                </BigRateContainerRecipes>
              </div>
            </ElementContainer>
          </div>
          <div
            style={{
              display: "flex",
              "flex-wrap": "wrap",
              justifyContent: "space-between",
            }}
          >
            <Link style={{ width: "22%", height: "220px" }} to="/addrecipe">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  border: "1px solid black",
                  "border-radius": "4px",
                  justifyContent: "center",
                  "align-items": "center",
                }}
              >
                <img style={{ width: "22%" }} src={AddRecipeIcon} />
              </div>
              <p
                style={{
                  "text-align": "center",
                  "font-weight": "bold",
                  color: "black",
                  "text-decoration": "none",
                }}
              >
                Dodaj przepis
              </p>
            </Link>

            {console.log("|||||")}
            {console.log(recipes)}
            {recipes[current - 1] &&
              recipes[current - 1].map((recipe, index) => {
                if (index > 1) {
                  return (
                    <ContentController
                      index={index}
                      recipe={recipe}
                      historyProps={props.history}
                    />
                  );
                }
              })}
          </div>
          {console.log("||||||||")}
          {console.log(length)}
          <ul
            style={{
              margin: "1% auto 1% auto",
              display: "flex",
              textAlign: "center",
              "list-style-type": "none",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            {/*}
          {Array.from(
            {
              length: length / 6,
            },
            (item, index) =>
              current !== index + 1 ? (
                <li
                  style={{
                    padding: "4%",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurrent(index + 1);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {index + 1}
                </li>
              ) : (
                <li
                  style={{
                    background: "black",
                    color: "white",
                    padding: "4%",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurrent(index + 1);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {index + 1}
                </li>
              )
          )}
          {*/}
            {console.log("lenght")}
            {console.log(length)}
            <div
              style={{
                width: "100%",
                display: "flex",
                "text-align": "center",
                "align-items": "center",
                justifyContent: "center",
                padding: "5%",
                margin: " 1% auto 1% auto",
                "text-align": "center",
              }}
            >
              <Pagination
                size="large"
                count={length}
                page={current}
                onChange={(e, num) => {
                  setCurrent(num);
                }}
              />
            </div>
          </ul>
        </Container>
        {/*}
        <RightPanel style={{ margin: 0 }} />
  {*/}
      </MainContainer>
    </div>
  );
};
export default withRouter(Recipes);
