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
  ProductsContainer
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
  const [methodsArray, setMethodsArray] = useState([]);
  const [productsArray, setProductsArray] = useState([[], [], []]);
  const handleMethods = e => {
    let temp = methodsArray;
    for (var i = 0; i < numberMethods; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id] = e.target.value;
    setMethodsArray(temp);
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
  const addMarker = e => {
    let temp = [e.latlng.lat, e.latlng.lng];
    setMarkers(temp);
  };
  const handleType = e => {
    let temp = productsArray;
    for (var i = 0; i < numberProducts; i++) {
      if (temp[i] === undefined) {
        temp[i][0] = "";
      }
    }
    temp[e.target.id][2] = e.target.value;
    setProductsArray(temp);
  };
  const ProductFields = () => {
    const temp = [];
    console.log(productsArray[0]);
    for (var i = 0; i < numberProducts; i++) {
      temp.push(
        <ProductsContainer>
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
          <SelectType
            id={i}
            onChange={val => handleType(val)}
            value={productsArray[i][2]}
          >
            <option value="łyżeczka">łyżeczka</option>
            <option value="łyżka">łyżka</option>
            <option value="kubek">kubek</option>
            <option value="gramów">gramów</option>
          </SelectType>
          <img
            style={{ width: 25 }}
            src={CloseImage}
            onClick={() => prevProductField()}
          />
        </ProductsContainer>
      );
    }
    return (
      <div>
        <ReciptLabel for="products">
          Produkty:{temp}
          <AddItem onClick={() => nextProductField()}>Dodaj pole</AddItem>
        </ReciptLabel>
      </div>
    );
  };
  const MethodFields = () => {
    const temp = [];
    for (var i = 0; i < numberMethods; i++) {
      temp.push(
        <MethodContainer>
          <TextAreaMethod
            type="text"
            id={i}
            value={methodsArray[i]}
            onChange={e => {
              handleMethods(e);
            }}
          />
          <img
            style={{ width: 25 }}
            src={CloseImage}
            onClick={() => prevMethodField()}
          />
        </MethodContainer>
      );
    }
    return (
      <div>
        <ReciptLabel for="products">
          Sposób przygotowania:{temp}
          <AddItem onClick={() => nextMethodField()}>Dodaj pole</AddItem>
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
      <InputLabel for="name">Nazwa:</InputLabel>
      <TextInput type="text" id="name" placeholder="Wprowadź nazwę dania" />
      <ColumnContainer>
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
        <div className="image-upload">
          <label for="file-input-1">
            <Image src={file[1]} />
          </label>
          <input
            id="file-input-1"
            type="file"
            onChange={e => handleChange(1, e)}
          />
        </div>
        <div className="image-upload">
          <label for="file-input-2">
            <Image src={file[2]} />
          </label>
          <input
            id="file-input-2"
            type="file"
            onChange={e => handleChange(2, e)}
          />
        </div>
        <div className="image-upload">
          <label for="file-input-3">
            <Image src={file[3]} />
          </label>
          <input
            id="file-input-3"
            type="file"
            onChange={e => handleChange(3, e)}
          />
        </div>
      </ImagesContainer>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddRecipt;
