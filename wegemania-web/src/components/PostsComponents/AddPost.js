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
import { NewNotifyContext } from "../../context/Notify";
import * as Yup from "yup";
import { Formik } from "formik";
const AddPost = () => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const [file, setFile] = useState(temp);
  const [tempForm, setTempForm] = useState({
    title: "",
    description: "",
  });
  const handleAddPost = async (values) => {
    console.log(tempForm);
    console.log(file);
    const data = new FormData();
    data.append("title", values.title);
    data.append("description", values.content);
    data.append("foto", file[0]);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: data,
    };
    console.log(file[0]);

    await fetch(`${user.Api}/posts/`, config)
      .then((res) => {
        res
          .text()
          .then((text) => {
            let json = JSON.parse(text);
            if (json.author) {
              notify.set("Pomyślnie dodano post.");
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
            console.log(res);
            notify.set("Wystąpił nieoczekiwany błąd!");
          });
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
  };
  const handleChange = (i, event) => {
    console.log(i);
    let temp = file;
    temp[i] = event.target.files[0];
    setFile([...temp]);
  };
  const handleAdd = () => {
    let temp = tags;
    temp.push(currentTag);
    setCurrentTag("");
    setTags(temp);
  };
  const handleRemove = (event) => {
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
            onClick={(event) => {
              handleRemove(event);
            }}
          />
        </li>
      </UnorderedList>
    );
  });
  return (
    <Container style={{ height: "auto" }}>
      <h1
        style={{
          "font-size": 28,
          "text-align": "center",
          color: "#27752e",
          "font-weight": "bold",
        }}
      >
        Dodaj post
      </h1>
      {deleyedRedirect && <Redirect to={`/posts`} />}
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={(values) => handleAddPost(values)}
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
                <ErrorText>{errors.title}</ErrorText>

                <TextInput
                  style={{
                    "font-size": "24px",
                    border: "none",
                    "border-bottom": "1px solid black",
                  }}
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
              <div
                style={{ display: "flex", height: "35vh", margin: "1% 0 3% 0" }}
              >
                <FormContainer style={{ width: "50%", height: "100%" }}>
                  <ErrorText>{errors.content}</ErrorText>

                  <TextArea
                    style={{ height: "100%", width: "100%" }}
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
                <ImagesContainer
                  style={{
                    width: "50%",
                    height: "100%",
                    margin: "0 auto 0 auto",
                  }}
                >
                  <div
                    class="image-upload"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <label
                      for="file-input-0"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                      }}
                    >
                      {file[0].name ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            "object-fit": "contain",
                          }}
                          src={
                            file[0].name
                              ? URL.createObjectURL(file[0])
                              : file[0]
                          }
                        />
                      ) : (
                        <Image
                          src={
                            file[0].name
                              ? URL.createObjectURL(file[0])
                              : file[0]
                          }
                        />
                      )}
                    </label>
                    <input
                      id="file-input-0"
                      type="file"
                      onChange={(e) => setFile([e.target.files[0]])}
                    />
                  </div>
                </ImagesContainer>
              </div>
              <Button type="submit">Dodaj post</Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
};
export default AddPost;
