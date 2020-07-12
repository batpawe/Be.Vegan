import React, { useState, useEffect, useContext } from "react";
import { NewNotifyContext } from "../../context/Notify";
import * as Yup from "yup";
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
  ImagesContainer,
  FormContainer,
  TextContainer,
  ErrorText,
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import { TagInput, TagButton } from "../../styles/PostsWallStyle";
import "../../App.css";
import TrashImg from "../../icons/trash.svg";
import {
  AddHeader,
  OrderedList,
  DeleteIcon,
  UnorderedList,
} from "../../styles/PostsWallStyle";
import { Formik } from "formik";

const EditPost = (props) => {
  const user = useContext(NewLoginInfo);
  const notify = useContext(NewNotifyContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    const getFile = async (path) => {
      let response = await fetch(path);
      let data = await response.blob();
      let metadata = {
        type: "image/jpeg",
      };
      let file = new File([data], "test.jpg", metadata);
      return file;
    };
    const fetchData = async () => {
      await axios(
        `https:/veggiesapp.herokuapp.com/posts/${props.match.params.id}/`
      ).then((res) => {
        /*
          setContent(
            res.data[0].description
              .replace("\r\n\r\n", "\n")
              .replace("\r\n", "\n")
          );
          setTitle(res.data[0].title);
          
          */
        setDataState(res.data[0]);
        let temp = getFile(`${res.data[0].foto}`).then((res) => {
          return res;
        });
        temp.then((responses) => {
          console.log(responses);
          setFile([responses]);
        });
      });
    };
    fetchData();
  }, []);
  const handleEditPost = async (values) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("description", values.content.replace("\n", "\r\n"));
    data.append("foto", file[0]);
    const config = {
      method: "PUT",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: data,
    };
    await fetch(
      `https://veggiesapp.heroku.com/posts/${props.match.params.id}/`,
      config
    ).then((res) => {
      if (res.status === 200) {
        res
          .text()
          .then((text) => {
            let json = JSON.parse(text);
            if (json.id) {
              notify.set("Pomyślnie edytowano restaurację.");
              setTimeout(() => {
                setDeleyedRedirect(true);
              }, 2000);
            } else {
              console.log(res);
              console.log(res.response);
              notify.set("Wystąpił nieoczekiwany błąd!");
            }
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response);
            notify.set("Wystąpił nieoczekiwany błąd!");
          });
      }
    });
  };
  return (
    <Container>
      {console.log(dataState)}
      {console.log(dataState.title)}
      {console.log(dataState.description)}
      <h1
        style={{
          "font-size": 28,
          "text-align": "center",
          color: "#27752e",
          "font-weight": "bold",
        }}
      >
        Edytuj post:
      </h1>
      {deleyedRedirect && <Redirect to={`/posts`} />}
      <Formik
        initialValues={{
          title: dataState.title,
          content: dataState.description,
        }}
        enableReinitialize={true}
        onSubmit={(values) => handleEditPost(values)}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required("To pole jest wymagane")
            .min(3, "Tytuł jest za krótki!")
            .max(18, "Tytuł jest za długi"),
          content: Yup.string()
            .required("To pole jest wymagane")
            .min(3, "Treść posta jest za krótka!")
            .max(80, "Treść posta jest za długa!"),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <form style={{ with: "100%" }} onSubmit={handleSubmit}>
            <div>
              <FormContainer>
                <TextContainer>
                  <InputLabel for="title">
                    <p style={{ margin: 0, "font-size": "26px" }}>Tytuł:</p>
                  </InputLabel>
                  <ErrorText>{errors.title}</ErrorText>
                </TextContainer>
                <TextInput
                  type="text"
                  id="title"
                  value={values.title}
                  placeholder="Wprowadź tytuł posta"
                  onChange={handleChange("title")}
                  /*
              onChange={e => {
                let temp = tempForm;
                temp.title = e.target.value;
                setTempForm({ ...temp });
              }}
              */
                />
              </FormContainer>
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
              <FormContainer>
                <TextContainer>
                  <InputLabel for="content">
                    <p style={{ margin: 0, "font-size": "26px" }}>Treść:</p>
                  </InputLabel>
                  <ErrorText>{errors.content}</ErrorText>
                </TextContainer>
                <TextArea
                  id="content"
                  placeholder="Wprowadź treść posta"
                  value={values.content}
                  /*
              onChange={e => {
                let temp = tempForm;
                temp.description = e.target.value;
                setTempForm({ ...temp });
              }}
              */
                  onChange={handleChange("content")}
                />
              </FormContainer>
              <ImagesContainer>
                <p
                  style={{
                    margin: 0,
                    "font-size": "26px",
                    "font-weight": "bold",
                  }}
                >
                  Dodaj zdjęcie:
                </p>
                <div class="image-upload">
                  <label for="file-input-0">
                    <Image
                      src={
                        file[0].name ? URL.createObjectURL(file[0]) : file[0]
                      }
                    />
                  </label>
                  <input
                    id="file-input-0"
                    type="file"
                    onChange={(e) => setFile([e.target.files[0]])}
                  />
                </div>
              </ImagesContainer>
              <Button type="submit">Edytuj post</Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
};
export default EditPost;
