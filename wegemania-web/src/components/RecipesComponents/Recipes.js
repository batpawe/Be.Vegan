//props.match.params
import React, { useState, useEffect } from "react";
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
import { MainContainer, Container } from "../../styles/WallStyle";
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
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
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
const Recipes = (props) => {
  const [current, setCurrent] = useState(1);
  const [length, setLength] = useState(0);
  const [products, setProducts] = useState([]);
  const [names, setNames] = useState([]);
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
    console.log(nameName.filter((name) => name.includes(value.trim())));
    return nameName.filter((name) => name.includes(value.trim()));
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
    console.log(temp);
    console.log(temp[0].filter((prod) => prod.name.includes(value.trim())));
    return temp[0].filter((prod) => prod.name.includes(value.trim()));
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/recipes/")
        .then((res) => {
          const temp = res.data.reduce((acc, curr, i) => {
            if (!(i % 6)) {
              // if index is 0 or can be divided by the `size`...
              acc.push(res.data.slice(i, i + 6)); // ..push a chunk of the original array to the accumulator
            }
            return acc;
          }, []);
          let num = 0;
          res.data.map((recipe, index) => {
            console.log(recipe.recipe_name.includes(valueName));
            console.log(
              recipe.ingredients.some((x) => x.name.includes(valueProduct))
            );
            console.log("VVVVV");
            if (
              recipe.recipe_name.includes(valueName) &&
              recipe.ingredients.some((x) => x.name.includes(valueProduct))
            ) {
              num++;
            }
          });
          setLength(num);
          setRecipes(temp);
          let tempProducts = [];
          let tempNames = [];
          res.data.map((date) => {
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
    const [listIngredients, setListIngredients] = useState([]);
    useEffect(() => {
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
    }, []);
    return (
      <ContainerRecipes>
        <ImageRecipes
          src={props.recipe.recipe_foto}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push(`/recipe/${props.recipe.id}`)}
        />
        <ContentContainer
          style={{
            width: "38%",
            background: "rgba(255,255,255,0.6)",
            position: "relative",
          }}
        >
          <RecipesName style={{ "font-size": "14px" }}>
            {props.recipe.recipe_name}
          </RecipesName>
          <div
            style={{
              display: "flex",
              "justify-content": "space-between",
              width: "100%",
              "font-size": "12px",
              "white-space": "nowrap",
            }}
          >
            <p style={{ color: "#4CAF50", "font-weight": "bold" }}>
              Czas przygotowania:
            </p>
            <p
              style={{ "font-weight": "bold" }}
            >{`${props.recipe.time} minut`}</p>
          </div>
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
                {listIngredients &&
                  listIngredients.map((ingredient) => {
                    return (
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          display: "flex",
                          "justify-content": "space-between",
                        }}
                      >
                        <Item style={{ "font-size": "10px" }}>
                          {ingredient.name}
                        </Item>
                        <Item style={{ "font-size": "10px" }}>
                          {ingredient.amount}
                        </Item>
                      </ul>
                    );
                  })}
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Sposób przyrządzenia:</HeaderText>
              <UnorderedList
                style={{
                  "max-height": "140px",
                  overflow: "auto",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                }}
              >
                <WayItem style={{ width: "80%", "white-space": "pre-wrap" }}>
                  {props.recipe.recipe_decription &&
                    props.recipe.recipe_decription
                      .replace("\r\n\r\n", "\n")
                      .replace("\r\n", "\n")}
                </WayItem>
              </UnorderedList>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerRecipes>
    );
  };

  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div style={{ display: "flex", "flex-direction": "column" }}>
            <div>
              <p style={{ "font-weight": "bold", color: "rgb(39,174,96)" }}>
                Filtruj:
              </p>
              {radio == "name" ? (
                <AutoSuggest
                  style={{ "font-size": 10 }}
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
                    placeholder: "Wprowadź nazwę przepisu",
                    value: valueName,
                    onChange: (_, { newValue, method }) => {
                      setValueName(newValue);
                    },
                  }}
                  highlightFirstSuggestion={true}
                />
              ) : (
                <AutoSuggest
                  suggestions={suggestionsProduct}
                  onSuggestionsClearRequested={() => setSuggestionsProduct([])}
                  onSuggestionsFetchRequested={({ value }) => {
                    console.log(value);
                    setValueProduct(value);
                    setSuggestionsProduct(getSuggestionProduct(value));
                  }}
                  onSuggestionSelected={(_, { suggestionValue }) =>
                    console.log("Wybrany: " + suggestionValue)
                  }
                  getSuggestionValue={(suggestion) => suggestion.name}
                  renderSuggestion={(suggestion) => (
                    <span>{suggestion.name}</span>
                  )}
                  inputProps={{
                    placeholder: "Wprowadź nazwę produktu",
                    value: valueProduct,
                    onChange: (_, { newValue, method }) => {
                      setValueProduct(newValue);
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
                        value="name"
                        control={<Radio />}
                        label="Nazwa przepisu"
                      />
                      <FormControlLabel
                        value="product"
                        control={<Radio />}
                        label="Nazwa produktu"
                      />
                    </div>
                  </ThemeProvider>
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <p style={{ "font-weight": "bold" }}>Nazwa przepisu:</p>
                <p>{valueName}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ "font-weight": "bold" }}>Nazwa produktu:</p>
                <p>{valueProduct}</p>
              </div>
            </div>
          </div>
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
        </SearchPanel>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          {console.log("|||||")}
          {console.log(recipes)}

          {recipes[current - 1] &&
            recipes[current - 1].map((recipe, index) => {
              if (
                recipe.recipe_name.includes(valueName) &&
                recipe.ingredients.some((x) => x.name.includes(valueProduct))
              )
                return (
                  <ContentController
                    index={index}
                    recipe={recipe}
                    historyProps={props.history}
                  />
                );
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
            width: "40%",
            justifyContent: "space-between",
          }}
        >
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
        </ul>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Recipes);
