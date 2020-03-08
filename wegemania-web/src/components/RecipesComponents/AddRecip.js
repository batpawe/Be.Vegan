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
      <div>
        <ReciptLabel for="products">
          Produkty:{temp}
          <AddItem onClick={() => nextProductField()}>Dodaj pole</AddItem>
        </ReciptLabel>
      </div>
    );
  };
  const MethodFields = () => {
    return (
      <div>
        <ReciptLabel for="products">
          Sposób przygotowania:
          <MethodContainer>
            <TextAreaMethod
              type="text"
              id={1}
              value={methods}
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
      <Button>Dodaj przepis</Button>
    </Container>
  );
};
export default AddRecipt;
