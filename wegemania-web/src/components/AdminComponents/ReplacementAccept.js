import React, { useState } from "react";
import { ReplacementsContainer, Item } from "../../styles/ReplacementsStyle";
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
  Icon
} from "../../styles/ContainerStyles";
import { Link } from "react-router-dom";
const ReplacementAccept = props => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletePost = id => {
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
  const [selected, setSelected] = useState(0);
  const items = [];
  for (var i = 0; i < 20; i++) {
    items.push(
      <Item
        id={i}
        onClick={e => {
          setSelected(e.target.id);
          console.log(e.target.id);
        }}
        select={selected == i}
      >
        test
      </Item>
    );
  }
  return (
    <div>
      <h1
        style={{
          "font-size": "28px",
          "text-align": "center",
          color: "rgb(39,117,46)",
          "font-weight": "bold"
        }}
      >
        Weryfikuj zamienniki:
      </h1>
      <ReplacementsContainer style={{ width: "80%", margin: "1% auto" }}>
        <ul
          style={{
            "list-style-type": "none",
            "font-size": "20px",
            padding: 0,
            margin: 0,
            overflow: "auto",
            width: "20%",
            "max-height": "100%",
            "text-align": "center"
          }}
        >
          {items}
        </ul>
        <ul
          style={{
            "list-style-type": "none",
            "font-size": "20px",
            padding: 0,
            margin: 0,
            overflow: "auto",
            height: "600px",
            width: "80%"
          }}
        >
          <ul
            style={{
              "border-bottom": "1px solid black",
              margin: 0,
              padding: 0,
              "list-style-type": "none"
            }}
          >
            <li
              style={{
                padding: "1%",
                "text-align": "center",
                "font-size": "22px",
                display: "block",
                background: "#00a835",
                width: "40%",
                "font-weight": "bold",
                margin: "1% auto 1% auto",
                "border-radius": "25px",
                color: "white"
              }}
            >
              Nazwa
            </li>
            <li style={{ padding: "2%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </li>
          </ul>
          <ul
            style={{
              margin: "1% 0 1% 0",
              padding: 0,
              "list-style-type": "none",
              position: "relative"
            }}
          >
            {" "}
            <div>
              <UserActionsContainer style={{ right: "20px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    handleClickOpen();
                  }}
                >
                  <Icon src={DeleteIcon} />
                </Button>

                <Link
                  to={{
                    pathname: "/editpost"
                    /*params: { id: props.data.idPosty }*/
                  }}
                >
                  <Button variant="outlined" color="primary">
                    <Icon src={EditIcon} />
                  </Button>
                </Link>
              </UserActionsContainer>
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
            <li
              style={{
                padding: "1%",
                "text-align": "center",
                "font-size": "16px",
                display: "block",
                background: "#00a835",
                width: "30%",
                "font-weight": "bold",
                margin: "1% auto 1% auto",
                "border-radius": "25px",
                color: "white"
              }}
            >
              Nazwa
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly"
              }}
            >
              <p style={{ width: "20%" }}>Kaloryczność:</p>
              <p style={{ width: "10%" }}>100</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly"
              }}
            >
              <p style={{ width: "20%" }}>Proteiny:</p>
              <p style={{ width: "10%" }}>100</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly"
              }}
            >
              <p style={{ width: "20%" }}>Tłuszcz:</p>
              <p style={{ width: "10%" }}>100</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly"
              }}
            >
              <p style={{ width: "20%" }}>Węglowodany:</p>
              <p style={{ width: "10%" }}> 100</p>
            </li>
            <li
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-evenly"
              }}
            >
              <p style={{ width: "20%" }}>Celuloza:</p>
              <p style={{ width: "10%" }}>100</p>
            </li>
            <li>
              <img
                style={{
                  width: "330px",
                  margin: "1% auto 1% auto",
                  display: "block"
                }}
                src={Image}
              />
            </li>
          </ul>
        </ul>
      </ReplacementsContainer>
    </div>
  );
};
export default ReplacementAccept;
