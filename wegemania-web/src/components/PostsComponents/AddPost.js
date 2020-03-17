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
import { TagInput, TagButton } from "../../styles/PostsWallStyle";
import "../../App.css";
import TrashImg from "../../icons/trash.svg";
import {
  AddHeader,
  OrderedList,
  DeleteIcon,
  UnorderedList
} from "../../styles/PostsWallStyle";
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
  const handleAdd = () => {
    let temp = tags;
    temp.push(currentTag);
    setCurrentTag("");
    setTags(temp);
  };
  const handleRemove = event => {
    let temp = tags;
    temp.splice(event.target.id, 1);
    setTags([...temp]);
  };
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState(["mateusz", "adam", "kacper", "filip"]);
  const TagsContent = tags.map((tag, index) => {
    return (
      <UnorderedList>
        <li>{tag}</li>
        <li>
          <DeleteIcon
            src={TrashImg}
            id={index}
            onClick={event => {
              handleRemove(event);
            }}
          />
        </li>
      </UnorderedList>
    );
  });
  return (
    <Container>
      <InputLabel for="title">Tytuł:</InputLabel>
      <TextInput type="text" id="title" placeholder="Wprowadź tytuł posta" />
      {/*}
      <InputLabel for="tag">Dodaj tagi:</InputLabel>
      <div>
        <TagInput
          value={currentTag}
          onChange={e => {
            setCurrentTag(e.target.value);
          }}
          type="text"
          id="tag"
          placeholder="Wprowadź tag"
        />
        <TagButton
          onClick={() => {
            handleAdd();
          }}
        >
          Dodaj tag
        </TagButton>
      </div>
     
      <div>
        <AddHeader>Tagi:</AddHeader>
        <OrderedList>{TagsContent}</OrderedList>
      </div> {*/}
      <InputLabel for="content">Treść:</InputLabel>
      <TextArea id="content" placeholder="Wprowadź treść posta" />
      <ImagesContainer>
        <p>Dodaj zdjęcie:</p>
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
      </ImagesContainer>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddPost;
