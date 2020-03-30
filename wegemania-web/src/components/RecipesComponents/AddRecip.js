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
  HighlightText
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
  const handleMethods = e => {
    let temp = methods;
    temp = e.target.value;
    setMethods(temp);
  };
  const handleProducts = e => {
    let temp = productsArray;
    for (var i = 0; i < numberProducts; i++) {
      if (temp[i] === undefined) {
        temp[i][0] = "";
      }
    }
    temp[e.target.id][0] = e.target.value;
    setProductsArray(temp);
  };
  const handleQuanity = e => {
    let temp = productsArray;
    for (var i = 0; i < numberProducts; i++) {
      if (temp[i] === undefined) {
        temp[i][0] = "";
      }
    }
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
            type="text"
            placeholder="Nazwa produktu"
            id={i}
            value={productsArray[i][0]}
            onChange={e => {
              handleProducts(e);
            }}
          />
          <TextColumnInput
            type="number"
            id={i}
            placeholder="Wprowadź ilość"
            value={productsArray[i][1]}
            onChange={e => {
              handleQuanity(e);
            }}
          />
          <HighlightText>gram</HighlightText>
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
        <ReciptLabel for="products">
          <p style={{ "font-size": "20px", "font-weight": "bold" }}>
            Produkty:
          </p>
          {temp}
          <AddItem onClick={() => nextProductField()}>Dodaj pole</AddItem>
        </ReciptLabel>
      </div>
    );
  };
  const MethodFields = () => {
    return (
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
                style={{ width: "100%", height: "200px" }}
                type="text"
                id={1}
                value={newMethod}
                onChange={e => {
                  setNewMethod(e.target.value);
                }}
              />
            </MethodContainer>
          </div>
        </ReciptLabel>
      </div>
    );
  };
  const nextProductField = () => {
    let temp = numberProducts + 1;
    setNumberProducts(temp);
  };
  const nextMethodField = () => {
    let temp = numberMethods + 1;
    setNumberMethods(temp);
  };
  const prevProductField = () => {
    let temp = numberProducts - 1;
    setNumberProducts(temp);
  };
  const prevMethodField = () => {
    let temp = numberMethods - 1;
    setNumberMethods(temp);
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "flex-direction": "column",
          "align-items": "center"
        }}
      >
        <InputLabel for="name" style={{ "font-size": "20px" }}>
          Nazwa:
        </InputLabel>
        <TextInput type="text" id="name" placeholder="Wprowadź nazwę dania" />
      </div>
      <ColumnContainer style={{ display: "flex", "flex-direction": "column" }}>
        <MethodFields />
        <ProductFields />
      </ColumnContainer>
      <ImagesContainer>
        <div className="image-upload">
          <label for="file-input-0">
            <Image src={file[0]} />
          </label>
          <input
            id="file-input-0"
            type="file"
            onChange={e => handleChange(0, e)}
          />
        </div>
      </ImagesContainer>
      <Button>Dodaj przepis</Button>
    </Container>
  );
};
export default AddRecipt;
