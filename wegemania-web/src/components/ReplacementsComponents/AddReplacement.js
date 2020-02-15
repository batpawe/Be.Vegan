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
  const ReplacementFields = () => {
    const temp = [];
    console.log(replacementsArray[i]);
    for (var i = 0; i < numberReplacements; i++) {
      temp.push(
        <div>
          <TextColumnInput
            type="text"
            id={i}
            value={replacementsArray[i]}
            onChange={e => {
              handleReplacements(e);
            }}
          />
          <img
            style={{ width: 25 }}
            src={CloseImage}
            onClick={() => prevReplacementsField()}
          />
          <div className="image-upload">
            <label for={`file-input-${i}`} style={{ textAlign: "center" }}>
              <ReplacementImage src={file[i]} />
            </label>
            {console.log(i)}
            <input
              key={i}
              name={i}
              id={`file-input-${i}`}
              type="file"
              onChange={e => handleChange(i, e)}
            />
          </div>
        </div>
      );
    }
    return (
      <ReplacementContainer>
        <RecplacementsLabel for="replacements">
          Zamienniki :{temp}
        </RecplacementsLabel>
        <AddItem onClick={() => nextReplacementsField()}>Dodaj pole</AddItem>
      </ReplacementContainer>
    );
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
      <InputLabel for="name">Nazwa:</InputLabel>
      <TextInput type="text" id="name" placeholder="Wprowadź nazwę produktu" />
      <ColumnContainer>
        <ReplacementFields />
      </ColumnContainer>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddReplecement;
