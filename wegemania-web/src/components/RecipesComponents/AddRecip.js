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
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestProducts.css";
import { NewNotifyContext } from "../../context/Notify";
import Back from "../../icons/back.svg";
import Next from "../../icons/next.svg";
import TimeIcon from "../../icons/ikonaCzasu.svg";
const AddRecipt = () => {
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
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/ingredients/")
        .then((res) => {
          setData(res.data);
          setSuggestions(res.data.map((date) => date.name));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  const productName = data.map((date) => {
    return date;
  });
  const getSuggestions = (value) => {
    setMySuggestion(
      productName.filter((name) => name.name.includes(value.trim()))
    );
    return productName.filter((name) => name.name.includes(value.trim()));
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
    await fetch("https://veggiesapp.herokuapp.com/recipes/", config)
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
                  fetch(
                    `https://veggiesapp.herokuapp.com/recipes/list/${result.id}/`,
                    configProduct
                  )
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
  return (
    <Container>
      {deleyedRedirect && <Redirect to={`/recipes`} />}
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", "border-right": "1px solid black" }}>
          <NewColumnContainer style={{ padding: "0 2% 0 0" }}>
            <NewInputContainer>
              <NewInputLabel for="name">Nazwa przepisu</NewInputLabel>
              <TextInput
                style={{ width: "100%" }}
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
                  style={{ width: "30px", margin: "0 10% 0 0" }}
                />
                <TextInput
                  style={{ "text-align": "right", width: "13%" }}
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
            <NewInputContainer>
              <NewInputLabel for="upload-image">Dodaj zdjęcie</NewInputLabel>
              <AddImageContainer>
                <div className="image-upload">
                  <label for="file-input-0">
                    {uploadFile[0].name ? (
                      <Image style={{ width: "550px" }} src={file[0]} />
                    ) : (
                      <Image src={file[0]} />
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
        <div style={{ width: "50%", "border-right": "1px solid black" }}>
          <NewColumnContainer>
            <div>lsl</div>
          </NewColumnContainer>
        </div>
        <div style={{ position: "absolute", bottom: 10, width: "98%" }}>
          <ul
            style={{
              display: "flex",
              margin: 0,
              padding: 0,
              "list-style-type": "none",
              width: "10%",
              margin: "0 auto",
              justifyContent: "space-evenly",
            }}
          >
            <AddRecipeFooterItem
              onClick={() => {
                setCurrent(1);
              }}
              select={current === 1}
            >
              1
            </AddRecipeFooterItem>
            <AddRecipeFooterItem
              onClick={() => {
                setCurrent(2);
              }}
              select={current === 2}
            >
              2
            </AddRecipeFooterItem>
            <AddRecipeFooterItem
              onClick={() => {
                setCurrent(3);
              }}
              select={current === 3}
            >
              3
            </AddRecipeFooterItem>
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default AddRecipt;
