import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
import {
  Container,
  Button,
  TextInput,
  InputLabel,
  TextArea,
  Image,
  ImagesContainer
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
const AddPost = () => {
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const handleChange = (i, event) => {
    console.log(i);
    let temp = file;
    temp[i] = URL.createObjectURL(event.target.files[0]);
    setFile([...temp]);
  };
  return (
    <Container>
      <InputLabel for="title">Tytuł:</InputLabel>
      <TextInput type="text" id="title" placeholder="Wprowadź tytuł posta" />
      <InputLabel for="content">Treść:</InputLabel>
      <TextArea id="content" placeholder="Wprowadź treść posta" />
      <ImagesContainer>
        <div class="image-upload">
          <label for="file-input-0">
            <Image src={file[0]} />
          </label>
          <input
            id="file-input-0"
            type="file"
            onChange={e => handleChange(0, e)}
          />
        </div>
        <div class="image-upload">
          <label for="file-input-1">
            <Image src={file[1]} />
          </label>
          <input
            id="file-input-1"
            type="file"
            onChange={e => handleChange(1, e)}
          />
        </div>
        <div class="image-upload">
          <label for="file-input-2">
            <Image src={file[2]} />
          </label>
          <input
            id="file-input-2"
            type="file"
            onChange={e => handleChange(2, e)}
          />
        </div>
        <div class="image-upload">
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
export default AddPost;
