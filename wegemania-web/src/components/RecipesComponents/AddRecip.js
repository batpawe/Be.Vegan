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
  SecondColumn,
  ReciptLabel,
  SelectType,
  TextAreaMethod,
  MethodContainer,
  ProductsContainer,
  HighlightText,
  AddRecipeFooterItem,
  NewInputContainer,
  NewInputLabel,
  NewColumnContainer,
  AddImageContainer,
  MainContainerAddRecip,
  ImageRecipeContainer,
  SpanDescription,
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
import "../../styles/NewSuggest.css";
import { NewNotifyContext } from "../../context/Notify";
import Back from "../../icons/back.svg";
import Next from "../../icons/next.svg";
import TimeIcon from "../../icons/ikonaCzasu.svg";
import { defaultTheme } from "react-autosuggest/dist/theme";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "../../icons/signs.svg";
const AddRecipt = (props) => {
  const useStyles = makeStyles({
    n_react_autosuggest_container: {
      position: "relative",
    },

    n_react_autosuggest_input: {
      background: "none",
      padding: "5px 5px",
      width: "100%",
      margin: "1% auto 0 auto",
      "text-align": "left",
      "font-size": "20px",
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
      width: "280px",
      height: "400%",
      overflow: "auto",
      border: "1px solid #aaa",
      "background-color": "#fff",
      "font-family": "Helvetica, sans-serif",
      "font-weight": 300,
      "font-size": "12px",
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
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [uploadFile, setUploadFile] = useState(temp);
  const [type, setType] = useState("łyżeczka");
  const [markers, setMarkers] = useState([23, 23]);
  const [numberProducts, setNumberProducts] = useState(1);
  const [numberMethods, setNumberMethods] = useState(1);
  const tempArray = [""];
  const [methods, setMethods] = useState("");
  const [productsArray, setProductsArray] = useState([[], [], []]);
  const [newMethod, setNewMethod] = useState("");
  const [description, setDescription] = useState("");
  const [recipeName, setRecipeName] = useState("");

  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [mySuggestion, setMySuggestion] = useState({});
  const [time, setTime] = useState(0);
  const [current, setCurrent] = useState(1);
  const [defaultRecipe, setDefaultRecipe] = useState([]);
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      await axios(`${user.Api}/ingredients/`)
        .then((res) => {
          setData(res.data);
          setSuggestions(res.data.map((date) => date.name));
        })
        .catch((err) => {
          console.log(err);
        });
      await axios(`${user.Api}/recipes/51/`).then((res) => {
        setDefaultRecipe(res.data);
      });
    };
    fetchData();
  }, []);
  const productName = data.map((date) => {
    return date;
  });
  const getSuggestions = (value) => {
    setMySuggestion(
      productName.filter((name) =>
        name.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
    return productName.filter((name) =>
      name.name.toLowerCase().includes(value.trim().toLowerCase())
    );
  };
  const sendRequest = async () => {
    console.log(recipeName);
    console.log(description);
    console.log(products);
    console.log(file);
    const data = new FormData();
    data.append("recipe_name", recipeName);
    data.append(
      "recipe_decription",
      JSON.parse(JSON.stringify(description.replace("\n", "\r\n\r\n")))
    );
    data.append("recipe_foto", uploadFile[0]);
    data.append("time", time);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: data,
    };
    console.log([...data]);
    await fetch(`${user.Api}/recipes/`, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(
            res.json().then((result) => {
              console.log(result);
              products.forEach((product) => {
                if (product.name !== null) {
                  const dataProduct = new FormData();
                  dataProduct.append("id_ingredient", product.id);
                  dataProduct.append("id_recipes", result.id);
                  dataProduct.append("amount", product.number);
                  const configProduct = {
                    method: "PUT",
                    headers: {
                      Accept: "application/json; charset=UTF-8",
                      Authorization: `Token ${user.userInfo.token}`,
                      // 'Content-Type': 'multipart/form-data',
                    },
                    body: dataProduct,
                  };
                  fetch(`${user.Api}/recipes/list/${result.id}/`, configProduct)
                    .then((resProduct) => {
                      console.log(resProduct);
                      console.log(resProduct);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              });
              notify.set("Pomyślnie dodano przepis.");
              setTimeout(() => {
                setDeleyedRedirect(true);
              }, 2000);
            })
          );
        } else {
          notify.set("Wystąpił nieoczekiwany błąd.");
        }
      })
      .catch((err) => {
        notify.set("Wystąpił nieoczekiwany błąd.");
      });
    /*
    const dataIngredients = new FormData();
    products.map(product => {
      dataIngredients.append("id_ingredient",product.id);
      dataIngredients.append("id_recipe",);
      dataIngredients.append("amount",product.number)
    })
    */
  };
  const handleMethods = (e) => {
    let temp = methods;
    temp = e.target.value;
    setMethods(temp);
  };
  const handleProducts = (e) => {
    let temp = productsArray;
    for (var i = 0; i < numberProducts; i++) {
      if (temp[i] === undefined) {
        temp[i][0] = "";
      }
    }
    temp[e.target.id][0] = e.target.value;
    setProductsArray(temp);
  };
  const handleQuanity = (e) => {
    let temp = productsArray;
    for (var i = 0; i < numberProducts; i++) {
      if (temp[i] === undefined) {
        temp[i][0] = "";
      }
    }
    console.log(productsArray);
    temp[e.target.id][1] = e.target.value;
    setProductsArray(temp);
  };
  const handleChange = (i, event) => {
    console.log(i);
    let temp = file;
    temp[i] = URL.createObjectURL(event.target.files[0]);

    setFile([...temp]);
    let tempF = uploadFile;
    tempF[i] = event.target.files[0];
    setUploadFile([...tempF]);
  };
  const shouldRenderSuggestions = (value) => {
    return value.trim().length > 3;
  };
  const ProductFields = () => {
    const temp = [];
    console.log(productsArray[0]);
    for (var i = 0; i < numberProducts; i++) {
      temp.push(
        <ProductsContainer style={{ width: "100%" }}>
          <AutoSuggest
            suggestions={suggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionsFetchRequested={({ value }) => {
              setValue(value);
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionSelected={(_, { suggestion, suggestionValue }) => {
              console.log("TTTTTTT");
              console.log(suggestion);
              console.log("Wybrany: " + suggestionValue);
            }}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
            inputProps={{
              placeholder: "Nazwa produktu",
              value: value,
              onChange: (_, { newValue, method }) => {
                setValue(newValue);
              },
            }}
            highlightFirstSuggestion={true}
            shouldRenderSuggestions={(v) => v.trim().length > 0}
          />
          {/*}
          <TextColumnInput
            style={{ width: "300px" }}
            type="text"
            placeholder="Nazwa produktu"
            id={i}
            key={i}
            value={productsArray[i][0]}
            onChange={(e) => {
              handleProducts(e);
            }}
          />
          {*/}
          <TextColumnInput
            style={{ width: "200px", height: "50px" }}
            type="number"
            id={i}
            key={i}
            placeholder="Wprowadź ilość"
            value={productsArray[i][1]}
            onChange={(e) => {
              handleQuanity(e);
            }}
          />
          <HighlightText
            style={{
              width: "100px",
              height: "50px",
              width: "100px",
              height: "50px",
              "text-align": "center",
              padding: 0,
              margin: 0,
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
            }}
          >
            <p style={{ margin: 0 }}>gram</p>
          </HighlightText>
          <img
            style={{ width: 25 }}
            src={CloseImage}
            onClick={() => prevProductField()}
          />
        </ProductsContainer>
      );
    }
    return (
      <div style={{ display: "flex", "justify-content": "space-between" }}>
        <ReciptLabel for="products" style={{ width: "100%" }}>
          <p style={{ "font-size": "20px", "font-weight": "bold" }}>
            Produkty:
          </p>
          {temp}
          <AddItem onClick={() => nextProductField()}>Dodaj pole</AddItem>
        </ReciptLabel>
      </div>
    );
  };

  const nextProductField = () => {
    let temp = numberProducts + 1;
    setNumberProducts(temp);
  };

  const prevProductField = () => {
    let temp = numberProducts - 1;
    setNumberProducts(temp);
  };
  var indents = [];
  for (var i = 0; i < 2; i++) {
    indents.push(<span>Witaj</span>);
  }
  const [tempQuanity, setTempQuanity] = useState(0);
  let tempDescription = defaultRecipe.recipe_decription;

  const classes = useStyles();
  return (
    <Container style={{ position: "relative" }}>
      <img
        src={CloseIcon}
        style={{
          width: "20px",
          position: "absolute",
          top: 8,
          right: 8,
          cursor: "pointer",
        }}
        onClick={() => {
          props.history.push("/");
        }}
      />
      {current < 3 && (
        <img
          src={Next}
          style={{
            width: "25px",
            position: "absolute",
            top: "45%",
            right: 0,
            cursor: "pointer",
          }}
          onClick={() => setCurrent((c) => c + 1)}
        />
      )}
      {current > 1 && (
        <img
          src={Back}
          style={{
            width: "25px",
            position: "absolute",
            top: "45%",
            left: 0,
            cursor: "pointer",
          }}
          onClick={() => setCurrent((c) => c - 1)}
        />
      )}
      {deleyedRedirect && <Redirect to={`/recipes`} />}{" "}
      {current === 1 && (
        <MainContainerAddRecip>
          <div
            style={{
              width: "50%",
              "border-right": "1px solid black",
              padding: "1%",
            }}
          >
            <NewColumnContainer>
              <NewInputContainer>
                <NewInputLabel for="name">Nazwa przepisu</NewInputLabel>
                <TextInput
                  style={{
                    width: "100%",
                    border: "none",
                    "border-bottom": "1px solid black",
                  }}
                  value={recipeName}
                  onChange={(e) => {
                    setRecipeName(e.target.value);
                  }}
                  type="text"
                  id="name"
                  placeholder="Wprowadź nazwę dania"
                />
              </NewInputContainer>
              <NewInputContainer>
                <NewInputLabel for="time">Czas(w minutach)</NewInputLabel>
                <div style={{ display: "flex" }}>
                  <img
                    src={TimeIcon}
                    style={{ width: "30px", margin: "0 3.5% 0 0" }}
                  />
                  <TextInput
                    style={{
                      "text-align": "center",
                      width: "13%",
                      border: "none",
                      "border-bottom": "1px solid black",
                    }}
                    value={time == 0 ? null : time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    type="number"
                    id="name"
                    placeholder="10"
                  />
                </div>
              </NewInputContainer>
              <NewInputContainer style={{ height: "100%" }}>
                <NewInputLabel for="upload-image">Dodaj zdjęcie</NewInputLabel>
                <AddImageContainer
                  style={{
                    height: "60%",
                    width: "80%",
                    margin: "0 auto",
                    border: "none",
                  }}
                >
                  <div className="image-upload" style={{ height: "100%" }}>
                    <label
                      for="file-input-0"
                      style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        "align-items": "center",
                      }}
                    >
                      {uploadFile[0].name ? (
                        <Image
                          style={{
                            width: "80%",
                            height: "80%",
                            "object-fit": "cover",
                            "border-radius": "4px",
                          }}
                          src={file[0]}
                        />
                      ) : (
                        <Image
                          style={{ margin: "0 auto", "object-fit": "cover" }}
                          src={file[0]}
                        />
                      )}
                    </label>
                    <input
                      id="file-input-0"
                      type="file"
                      onChange={(e) => handleChange(0, e)}
                    />
                  </div>
                </AddImageContainer>
              </NewInputContainer>
            </NewColumnContainer>
          </div>
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "1% 1% 0 1%",
            }}
          >
            <NewColumnContainer
              style={{
                border: "1px solid black",
                "border-radius": "10px",
                height: "100%",
              }}
            >
              <div style={{ margin: "1%", height: "100%" }}>
                <p
                  style={{
                    "text-align": "center",
                    margin: "0 auto",
                    "font-size": "24px",
                    width: "100%",
                  }}
                >
                  Przykład
                </p>
                <p
                  style={{
                    margin: "3% 0 0 0",
                    "text-align": "center",
                    "font-size": "32px",
                    "font-weight": "bold",
                    color: "#388c38",
                  }}
                >
                  {"Vegan Brownies"}
                </p>
                <p
                  style={{
                    "text-align": "center",
                    "font-size": "20px",
                    margin: "2% 0 0 0",
                    color: "#388c38",
                  }}
                >
                  {"30 minut"}
                </p>
                <Image
                  style={{
                    width: "60%",
                    height: "50%",
                    "object-fit": "cover",
                    display: "block",
                    margin: "10% auto 0 auto",
                    "border-radius": "4px",
                  }}
                  src={defaultRecipe.recipe && defaultRecipe.recipe.recipe_foto}
                />
              </div>
            </NewColumnContainer>
          </div>
        </MainContainerAddRecip>
      )}
      {current === 2 && (
        <MainContainerAddRecip>
          <div
            style={{
              width: "50%",
              "border-right": "1px solid black",
              padding: "1%",
            }}
          >
            <NewColumnContainer style={{ height: "100%" }}>
              <ReciptLabel
                for="products"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  height: "100%",
                  margin: "0 auto auto auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    "flex-direction": "column",
                    height: "100%",
                  }}
                >
                  <p style={{ "font-size": "20px", "text-align": "left" }}>
                    Sposób przygotowania
                  </p>
                  <MethodContainer
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "1% auto 1% auto",
                    }}
                  >
                    <TextAreaMethod
                      placeholder="Wprowadź sposób przygotowania"
                      style={{ width: "100%", height: "109%" }}
                      type="text"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </MethodContainer>
                </div>
              </ReciptLabel>
            </NewColumnContainer>
          </div>
          <div
            style={{
              width: "50%",
              padding: "1% 1% 0 1%",
            }}
          >
            <NewColumnContainer
              style={{
                border: "1px solid black",
                "border-radius": "10px",
                height: "100%",
              }}
            >
              <div style={{ margin: "1%" }} style={{ height: "100%" }}>
                <SpanDescription style={{ "white-space": "pre-wrap" }}>
                  {defaultRecipe.recipe &&
                    defaultRecipe.recipe.recipe_decription}
                </SpanDescription>
              </div>
            </NewColumnContainer>
          </div>
        </MainContainerAddRecip>
      )}
      {current === 3 && (
        <MainContainerAddRecip>
          <div
            style={{
              width: "50%",
              padding: "1% 1% 0 1%",
            }}
          >
            <p style={{ "font-size": "20px" }}>Sposób przygotowania:</p>
            <NewColumnContainer
              style={{
                border: "1px solid black",
                "border-radius": "10px",
                height: "90%",
                background: "#E2E2DF",
              }}
            >
              <div style={{ margin: "1%", height: "100%" }}>
                <SpanDescription>
                  {description
                    ? `Opis dla przepisu: ${recipeName}\n\n${description}`
                    : tempDescription}
                </SpanDescription>
              </div>
            </NewColumnContainer>
          </div>
          <div
            style={{
              width: "50%",
              padding: "1% 1% 0 1%",
            }}
          >
            <NewColumnContainer
              style={{
                border: "1px solid black",
                "border-radius": "10px",
                height: "100%",
              }}
            >
              <div style={{ height: "100%", margin: "1%" }}>
                <p>Lista składników</p>
                <ProductsContainer
                  style={{ display: "flex", "align-items": "flex-end" }}
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
                      suggestionsList:
                        classes.n_react_autosuggest__suggestions_list,
                      suggestion: classes.n_react_autosuggest__suggestion,
                      suggestionHighlighted:
                        classes.n_react_autosuggest__suggestion__highlighted,
                    }}
                    key={`suggest`}
                    suggestions={suggestions}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionsFetchRequested={({ value }) => {
                      console.log(value);
                      setValue(value);
                      setSuggestions(getSuggestions(value));
                    }}
                    onSuggestionSelected={(
                      _,
                      { suggestion, suggestionValue }
                    ) => setMySuggestion(suggestion)}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    renderSuggestion={(suggestion) => (
                      <span>{suggestion.name}</span>
                    )}
                    inputProps={{
                      placeholder: "Nazwa produktu",
                      value: value,
                      onChange: (_, { newValue, method }) => {
                        setValue(newValue);
                      },
                    }}
                    highlightFirstSuggestion={true}
                    shouldRenderSuggestions={(v) => v.trim().length > 2}
                  />
                  <TextColumnInput
                    style={{
                      width: "16%",
                      height: "50px",
                      padding: 0,
                      "text-align": "center",
                      border: "none",
                      margin: 0,
                    }}
                    placeholder="Wprowadź ilość"
                    type="text"
                    value={tempQuanity}
                    onChange={(e) => {
                      setTempQuanity(e.target.value);
                    }}
                  />
                  <HighlightText
                    style={{
                      width: "100px",
                      height: "50px",
                      "text-align": "center",
                      padding: 0,
                      margin: 0,
                      "text-align": "center",
                      border: "none",
                      display: "flex",
                      "align-items": "center",
                      "justify-content": "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>gram</p>
                  </HighlightText>{" "}
                  <Button
                    style={{
                      padding: "0",
                      height: "50px",
                      margin: 0,
                      "font-size": "14px",
                    }}
                    onClick={() => {
                      let tempArray = products;
                      console.log(mySuggestion);
                      let temp = {
                        id: mySuggestion.id,
                        name: mySuggestion.name,
                        number: tempQuanity,
                      };
                      tempArray.push(temp);
                      setSuggestions([]);
                      setProducts([...tempArray]);
                      setTempQuanity("0");
                      setValue("");
                      setMySuggestion("");
                    }}
                  >
                    Dodaj produkt
                  </Button>
                </ProductsContainer>
                <div style={{ height: "65%", overflow: "auto" }}>
                  {products &&
                    suggestions &&
                    products.map((product, index) => {
                      console.log(products);
                      if (product.name) {
                        return (
                          <div
                            style={{
                              display: "flex",
                              margin: "1% auto 1% auto",
                              width: "100%",
                              "font-size": "24px",
                            }}
                          >
                            <div
                              style={{
                                width: "50%",
                                "text-align": "left",
                                "font-size": "24px",
                              }}
                            >
                              {product.name}
                            </div>
                            <div
                              style={{
                                width: "30%",
                                "text-align": "center",
                                "font-size": "24px",
                              }}
                            >
                              {product.number}
                            </div>
                            <div
                              style={{
                                "text-align": "center",
                                width: "10%",
                                "font-size": "24px",
                              }}
                            >
                              gram
                            </div>
                            <div
                              style={{ width: "10%", "text-align": "center" }}
                            >
                              <img
                                style={{ width: 15 }}
                                src={CloseImage}
                                onClick={() => {
                                  let temp = products;
                                  temp.splice(index, 1);
                                  setProducts([...temp]);
                                }}
                              />
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
                <Button
                  onClick={() => {
                    sendRequest();
                  }}
                >
                  Dodaj przepis
                </Button>
              </div>
            </NewColumnContainer>
          </div>
        </MainContainerAddRecip>
      )}
      <div style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            margin: "1% auto 0 auto",
            padding: 0,
            "list-style-type": "none",
            width: "10%",
            justifyContent: "space-evenly",
          }}
        >
          <AddRecipeFooterItem
            onClick={() => {
              setCurrent(1);
            }}
            select={current >= 1}
          >
            1
          </AddRecipeFooterItem>
          <AddRecipeFooterItem
            onClick={() => {
              setCurrent(2);
            }}
            select={current >= 2}
          >
            2
          </AddRecipeFooterItem>
          <AddRecipeFooterItem
            onClick={() => {
              setCurrent(3);
            }}
            select={current >= 3}
          >
            3
          </AddRecipeFooterItem>
        </ul>
      </div>
    </Container>
  );
};
export default AddRecipt;
