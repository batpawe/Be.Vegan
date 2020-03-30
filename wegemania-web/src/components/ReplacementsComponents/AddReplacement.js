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
  ReplacementsContainer,
  SecondColumn,
  ReplacementImage,
  ReplacementContainer,
  RecplacementsLabel
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
const AddReplecement = () => {
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [numberReplacements, setNumberReplacements] = useState(1);
  const [replacementsArray, setReplacementsArray] = useState([]);
  const handleReplacements = e => {
    let temp = replacementsArray;
    for (var i = 0; i < numberReplacements; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id] = e.target.value;
    setReplacementsArray(temp);
  };
  const handleChange = (i, event) => {
    console.log(i);
    console.log(event.target.files[0]);
    let temp = file;
    temp[event.target.name] = URL.createObjectURL(event.target.files[0]);
    setFile([...temp]);
  };

  const nextReplacementsField = () => {
    let temp = numberReplacements + 1;
    setNumberReplacements(temp);
  };

  const prevReplacementsField = () => {
    let temp = numberReplacements - 1;
    setNumberReplacements(temp);
  };
  const [selectedOption, setSelectedOption] = useState("vegan");
  const handleCheck = e => {
    setSelectedOption(e.target.value);
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
        <InputLabel
          for="name"
          style={{ "font-size": "22px", "font-weight": "bold" }}
        >
          Nazwa produkut niewegańskiego:
        </InputLabel>
        <TextInput
          type="text"
          id="name"
          placeholder="Wprowadź nazwę produktu"
        />
      </div>
      <div style={{ margin: "1% auto 0 auto", width: "100%" }}>
        <p
          style={{
            "font-size": "22px",
            "font-weight": "bold",
            "text-align": "center"
          }}
        >
          Zamiennik:
        </p>
        <ColumnContainer
          style={{
            margin: "0 0 0 0",
            width: "100%",
            margin: "1% auto 1% auto"
          }}
        >
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between",
              width: "70%",
              margin: "1% auto 1% auto"
            }}
          >
            <label
              for="vegname"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj nazwę produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="vegname"
                type="text"
                placeholder="nazwa produktu wegańskiego"
              />
            </label>
            <label
              for="kalorycznosc"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj kaloryczność produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="kalorycznosc"
                type="text"
                placeholder="kaloryczność produktu wegańskiego"
              />
            </label>
            <label
              for="proteiny"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość protein produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="proteiny"
                type="text"
                placeholder="ilość protein produktu wegańskiego"
              />
            </label>
            <label
              for="tluszcz"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość tłuszczu produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="tluszcz"
                type="text"
                placeholder="ilosc tluszczu produktu wegańskiego"
              />
            </label>
            <label
              for="weglowodany"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość węglowodanów produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="weglowodany"
                type="text"
                placeholder="ilość węglowodanów produktu wegańskiego"
              />
            </label>
            <label
              for="celuloza"
              style={{ display: "flex", "justify-content": "space-between" }}
            >
              <p>Podaj ilość celulozy produktu wegańskiego:</p>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="celuloza"
                type="text"
                placeholder="ilość celulozy produktu wegańskiego"
              />
            </label>
            <div className="image-upload" style={{ margin: "0 auto 0 auto" }}>
              <label for="file-input-0">
                <Image src={file[0]} />
              </label>
              <input
                style={{ width: "300px", border: "1px solid black" }}
                id="file-input-0"
                type="file"
                onChange={e => handleChange(0, e)}
              />
            </div>
          </div>
        </ColumnContainer>
      </div>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddReplecement;
