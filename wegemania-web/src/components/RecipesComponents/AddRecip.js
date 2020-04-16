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
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestProducts.css";
import { NewNotifyContext } from "../../context/Notify";
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
            style={{ width: "200px" }}
            type="number"
            id={i}
            key={i}
            placeholder="Wprowadź ilość"
            value={productsArray[i][1]}
            onChange={(e) => {
              handleQuanity(e);
            }}
          />
          <HighlightText style={{ width: "100px" }}>gram</HighlightText>
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
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <InputLabel for="name" style={{ "font-size": "20px" }}>
          Nazwa:
        </InputLabel>
        <TextInput
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
          type="text"
          id="name"
          placeholder="Wprowadź nazwę dania"
        />
        <InputLabel for="time" style={{ "font-size": "20px" }}>
          Czas(w minutach):
        </InputLabel>
        <TextInput
          style={{ "text-align": "right", width: "10%" }}
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          type="number"
          id="name"
          placeholder="Wprowadź czas wykonania przepisu"
        />
      </div>
      <ColumnContainer style={{ display: "flex", "flex-direction": "column" }}>
        <div style={{ display: "flex", "justify-content": "center" }}>
          <ReciptLabel
            for="products"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <div style={{ display: "flex", "flex-direction": "column" }}>
              <p style={{ "font-size": "20px", "font-weight": "bold" }}>
                Sposób przygotowania:
              </p>
              <MethodContainer
                style={{ width: "40%", margin: "1% auto 1% auto" }}
              >
                <TextAreaMethod
                  placeholder="Wprowadź sposób przygotowania"
                  style={{ width: "100%", height: "200px" }}
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </MethodContainer>
            </div>
          </ReciptLabel>
        </div>
        <p
          style={{
            "font-size": "20px",
            "font-weight": "bold",
            "text-align": "center",
          }}
        >
          Produkty:
        </p>
        <ProductsContainer style={{ display: "flex", "align-items": "center" }}>
          <AutoSuggest
            key={`suggest`}
            suggestions={suggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionsFetchRequested={({ value }) => {
              console.log(value);
              setValue(value);
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionSelected={(_, { suggestion, suggestionValue }) =>
              setMySuggestion(suggestion)
            }
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
            shouldRenderSuggestions={(v) => v.trim().length > 2}
          />
          <TextColumnInput
            style={{
              width: "200px",
              height: "40px",
              padding: 0,
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
              height: "40px",
              "text-align": "center",
              padding: 0,
              margin: 0,
            }}
          >
            gram
          </HighlightText>
        </ProductsContainer>
        <AddItem
          style={{ padding: "0", margin: "1% auto 1% auto" }}
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
            setTempQuanity("");
            setValue("");
            setMySuggestion("");
          }}
        >
          Dodaj produkt
        </AddItem>
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
                    width: "40%",
                    "justify-content": "space-around",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "1%",
                      "text-align": "center",
                      width: "60%",
                    }}
                  >
                    {product.name}
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "1%",
                      "text-align": "right",
                      width: "20%",
                    }}
                  >
                    {product.number}
                  </div>
                  <img
                    style={{ width: 25 }}
                    src={CloseImage}
                    onClick={() => {
                      let temp = products;
                      temp.splice(index, 1);
                      setProducts([...temp]);
                    }}
                  />
                </div>
              );
            }
          })}
      </ColumnContainer>
      <ImagesContainer>
        <div className="image-upload">
          <label for="file-input-0">
            <Image src={file[0]} />
          </label>
          <input
            id="file-input-0"
            type="file"
            onChange={(e) => handleChange(0, e)}
          />
        </div>
      </ImagesContainer>
      <Button
        onClick={() => {
          sendRequest();
        }}
      >
        Dodaj przepis
      </Button>
    </Container>
  );
};
export default AddRecipt;
