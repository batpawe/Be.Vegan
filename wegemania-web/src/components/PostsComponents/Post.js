import React, { useState, useEffect, useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import DeleteIcon from "../../icons/bin_delete.svg";
import EditIcon from "../../icons/edit.svg";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import {
  SortPageButton,
  SortContainer,
  SortRow,
  SortLabel,
  SortLabelLocation,
  SortSelect,
  SortInput,
  SortButton,
  PostTextHeader,
  PostInfoContainer,
  PostRow,
  PostInfoItem,
  ImagesContainer,
  TextPostMinHeader,
  HeaderCommentsText,
  HeaderContainer,
  CommentsContainer,
  MapContainer,
  HeaderCommentsElements,
  PostInfoParagraph,
  AddCommentContainer,
  AddCommentButton,
  TextArea,
  Comment,
  UserLink,
  PostLink,
  UserActionsContainer,
  Icon,
} from "../../styles/ContainerStyles";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
  TagContainer,
  TagItem,
  RatingComponent,
} from "../../styles/WallStyle";
import {
  HeaderPostsContainer,
  HeaderPostsItem,
  HeaderPostsText,
  TagsPostsHeader,
  TagsPostsHeaderContainer,
  TagsPostsContainer,
  TagsItems,
  ImageForUpload,
} from "../../styles/PostsWallStyle";
import PostImage from "../../images/postimage.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import {
  AddPostPageContainer,
  AddPostPageLink,
  SearchInput,
  SearchButton,
  SearchContainer,
} from "../../styles/PostStyle";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import UploadImage from "../../images/upload.png";
import "../../App.css";
import ImageRestaurant from "../../images/restaurant.jpg";
import { NewNotifyContext } from "../../context/Notify";
var moment = require("moment");
const CommentPostContainer = (props) => {
  const [err, setErr] = useState(false);
  return (
    <UnorderedListCommentsIn>
      <HighlightItem
        to={`/users/${props.comment.author.id}`}
        style={{ "font-size": "20px" }}
      >
        {props.comment.author.username}
      </HighlightItem>

      <p style={{ "font-size": "16px" }}>
        {moment(props.comment.data_stamp).format("YYYY-MM-D HH:mm:ss")}
      </p>
      <CommentContent style={{ "font-size": "18px" }}>
        {props.comment.description}
      </CommentContent>
      {err && (
        <span style={{ color: "red" }}>Nie udało się załadować zdjęcia</span>
      )}
      {props.comment.foto && (
        <img
          style={{
            width: 240,
            margin: "1% 0 0 0",
            "border-radius": "4px",
          }}
          src={props.comment.foto}
          onError={(e) => {
            setErr(true);
            e.target.style.display = "none";
          }}
        />
      )}
    </UnorderedListCommentsIn>
  );
};
const Post = (props) => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletePost = (id) => {
    handleClose();
    /*
    const redirect = () => {
      userInfo.setRequest({});
      props.history.push("/userpanel");
    };
    axios
      .delete(`${userInfo.apiip}/posty/${id}`)
      .then(res => {
        if (res.status === 200) {
          userInfo.initNotify("Post usunięty pomyślnie");
          setTimeout(redirect, 4000);
        } else {
          userInfo.initNotify("Wystąpił błąd");
        }
      })
      .catch(err => {
        userInfo.initNotify("Wystąpił błąd");
      });
      */
  };
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [post, setPost] = useState({});
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const [tempContent, setTempContent] = useState("");
  const AddComment = async () => {
    if (tempContent !== "") {
      console.log(file[0]);
      const data = new FormData();
      data.append("title", "");
      data.append("description", tempContent);
      data.append("foto", file[0].size ? file[0] : "");
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json; charset=UTF-8",
          Authorization: `Token ${user.userInfo.token}`,
        },
        body: data,
      };

      await fetch(`${user.Api}/posts/${props.match.params.id}/`, config)
        .then((res) => {
          if (res.status === 200) {
            console.log("KWKEKWK");
            notify.set("Pomyślnie dodano komentarz");
            setTempContent("");
            setTimeout(() => {
              setDeleyedRedirect(true);
            }, 2000);
            setFile(temp);
          } else {
            notify.set("Wystąpił nieoczekiwany błąd");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
          notify.set("Wystąpił nieoczekiwany błąd!");
        });
    } else {
      notify.set("Treść komentarza jest wymagana");
    }
  };
  useEffect(() => {
    user.openPanel(false);
    console.log(props.match.params);
    console.log(file[0]);
    const fetchData = async () => {
      await axios(`${user.Api}/posts/${props.match.params.id}`)
        .then((res) => {
          console.log(res.data);
          setPost({ ...res.data });
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, [props.match.params.id, deleyedRedirect]);

  return (
    <MainContainer margin={notify.onMargin}>
      <Container style={{ position: "relative" }}>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Usunięcie posta"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Czy chcesz usunąć post ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Nie
              </Button>
              <Button
                onClick={() => {
                  deletePost(props.data.idPosty);
                }}
                color="primary"
                autoFocus
              >
                Tak
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {post[0] && (
          <OrderedList>
            <UnorderedList>
              <div
                style={{
                  width: "100%",
                  padding: "2% 0 3% 0",
                  "border-bottom": "1px solid black",
                }}
                onClick={() => props.history.push(`/post/${post[0].index}`)}
              >
                <div style={{ display: "flex", width: "100%" }}>
                  <p
                    style={{
                      color: "#27ae60",
                      "font-size": "26px",
                      width: "26%",
                    }}
                  >
                    {post[0].author.username}
                  </p>
                  <p
                    style={{
                      "font-size": "28px",
                      "font-weight": "bold",
                      width: "48%",
                      "text-align": "center",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      props.historyProps.push(`/post/${post[0].index}`)
                    }
                  >
                    {post[0].title}
                  </p>
                  <p
                    style={{
                      "font-size": "26px",
                      width: "26%",
                      "text-align": "right",
                    }}
                  >
                    {moment(post[0].data_stamp).format("YYYY-MM-D")}
                  </p>
                </div>
                <p style={{ "font-size": "24px" }}>{post[0].description}</p>
                {post[0] && post[0].foto && visible && (
                  <div
                    style={{
                      width: "100%",
                      margin: "auto",
                      cursor: "pointer",
                      height: "60%",
                    }}
                  >
                    <img
                      src={post[0].foto}
                      style={{
                        "object-fit": "contain",
                        width: "60%",
                        margin: "0 auto",
                        display: "block",
                        height: "80%",
                      }}
                      onError={() => {
                        setVisible(false);
                      }}
                    />
                  </div>
                )}
              </div>
              <HeaderText>Komentarze:</HeaderText>

              <UnorderedListComments>
                {post[1].map((comment) => {
                  return <CommentPostContainer comment={comment} />;
                })}
                <CommentContainer check={file[0].name}>
                  <TextInput
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      "border-radius": "4px",
                      height: "20%",
                      width: "100%",
                      border: "none",
                      "font-size": "20px",
                    }}
                    type="text"
                    value={tempContent}
                    placeholder="Wprowadź treść komentarza"
                    onChange={(e) => {
                      setTempContent(e.target.value);
                    }}
                  />
                  <div
                    class="image-upload"
                    style={{ width: "100%", height: "70%" }}
                  >
                    <label
                      for="file-input-0"
                      style={{
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        width: "100%",
                        "text-align": "center",
                        height: "100%",
                      }}
                    >
                      {file[0].name ? (
                        <ImageForUpload
                          style={{
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover",
                            "text-align": "center",
                          }}
                          src={
                            file[0].name
                              ? URL.createObjectURL(file[0])
                              : file[0]
                          }
                        />
                      ) : (
                        <ImageForUpload
                          style={{ width: "100px", "text-align": "center" }}
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
                  <SubmitCommentButton
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: "1%",
                      "font-size": "28px",
                    }}
                    onClick={() => {
                      AddComment();
                    }}
                  >
                    Dodaj komentarz
                  </SubmitCommentButton>
                </CommentContainer>
              </UnorderedListComments>
            </UnorderedList>
          </OrderedList>
        )}
      </Container>
    </MainContainer>
  );
};
export default Post;
