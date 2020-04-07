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
const AddRecipt = () => {
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
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
  let tempProducts = [
    {
      name: "",
      quanity: 0,
    },
  ];
  const [products, setProducts] = useState(tempProducts);
  const sendRequest = () => {
    console.log(recipeName);
    console.log(description);
    console.log(products);
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
  };

  const ProductFields = () => {
    const temp = [];
    console.log(productsArray[0]);
    for (var i = 0; i < numberProducts; i++) {
      temp.push(
        <ProductsContainer style={{ width: "100%" }}>
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

  return (
    <Container>
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
        {products &&
          products.map((product, index) => {
            return (
              <div>
                <ProductsContainer style={{ display: "flex" }}>
                  <TextColumnInput
                    style={{ width: "300px" }}
                    placeholder="Nazwa produktu"
                    type="text"
                    value={product.name}
                    onChange={(e) => {
                      let temp = products;
                      temp[index].name = e.target.value;
                      setProducts([...temp]);
                    }}
                  />
                  <TextColumnInput
                    style={{ width: "200px" }}
                    placeholder="Wprowadź ilość"
                    type="text"
                    value={products.quanity}
                    onChange={(e) => {
                      let temp = products;
                      temp[index].quanity = e.target.value;
                      setProducts([...temp]);
                    }}
                  />
                  <HighlightText style={{ width: "100px" }}>gram</HighlightText>
                  <img
                    style={{ width: 25 }}
                    src={CloseImage}
                    onClick={() => {
                      let temp = products;
                      temp.splice(index, 1);
                      setProducts([...temp]);
                    }}
                  />
                </ProductsContainer>
              </div>
            );
          })}
        <AddItem
          onClick={() => {
            let tempArray = products;
            let temp = { name: "", number: 0 };
            tempArray.push(temp);
            setProducts([...tempArray]);
          }}
        >
          Dodaj produkt
        </AddItem>
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
