import React, { useState, useEffect, useContext } from "react";
import { ReplacementsContainer, Item } from "../../styles/ReplacementsStyle";
import DeleteIcon from "../../icons/bin_delete.svg";
import EditIcon from "../../icons/more.svg";
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
import { NewNotifyContext } from "../../context/Notify";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
const ReplacementAccept = (props) => {
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [replacements, setReplacements] = useState([]);
  const [current, setCurrent] = useState([]);
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
  const [selected, setSelected] = useState(0);
  const items = [];
  useEffect(() => {
    user.openPanel(false);
    const fetchData = async () => {
      await axios(`${user.Api}/moderate/`)
        .then((res) => {
          console.log(res.data);

          const newTemp = res.data.reduce((acc, obj) => {
            let nextLoop = false;

            acc.forEach((savedFood) => {
              if (
                obj.id_food_to_substitute.id ===
                savedFood.id_food_to_substitute.id
              ) {
                savedFood.id_vegan.push(obj);
                nextLoop = true;
                return acc;
              }
            });
            if (!nextLoop) {
              acc.push({
                ...obj,
                id_vegan: [obj],
              });
            }
            return acc;
          }, []);
          console.log(newTemp);
          setReplacements(newTemp);
          setCurrent(newTemp[0]);
          console.log(newTemp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [props.key]);
  replacements &&
    replacements.map((replacement, index) => {
      items.push(
        <Item
          id={index}
          onClick={(e) => {
            setSelected(e.target.id);
            setCurrent(replacement);
          }}
          select={selected == index}
        >
          {replacement.id_food_to_substitute.food_name}
        </Item>
      );
    });
  return (
    <div>
      {deleyedRedirect && <Redirect to={`/replacements`} />}
      {user.isStaff && (
        <div>
          <h1
            style={{
              "font-size": "28px",
              "text-align": "center",
              color: "rgb(39,117,46)",
              "font-weight": "bold",
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
                "text-align": "center",
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
                width: "80%",
              }}
            >
              <ul
                style={{
                  "border-bottom": "1px solid black",
                  margin: 0,
                  padding: 0,
                  "list-style-type": "none",
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
                    color: "white",
                  }}
                >
                  {current.id_food_to_substitute &&
                    current.id_food_to_substitute.food_name}
                </li>
                <li style={{ padding: "2%" }}>
                  {current.id_food_to_substitute &&
                    current.id_food_to_substitute.description}
                </li>
              </ul>

              {current.id_vegan &&
                current.id_vegan.map((veg) => {
                  return (
                    <ul
                      style={{
                        margin: "1% 0 1% 0",
                        padding: 0,
                        "list-style-type": "none",
                        position: "relative",
                      }}
                    >
                      <div>
                        <UserActionsContainer
                          style={{ right: 0, top: 0, position: "absolute" }}
                        >
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              handleClickOpen();
                            }}
                          >
                            <Icon src={DeleteIcon} />
                          </Button>

                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              fetch(`${user.Api}/moderate/${veg.id}/`, {
                                method: "PATCH",
                                body: JSON.stringify({
                                  id: veg.id,
                                  show_on_view: true,
                                }),
                                headers: {
                                  Authorization: `Token ${user.userInfo.token}`,
                                  "Content-type":
                                    "application/json; charset=UTF-8",
                                },
                              })
                                .then((res) => {
                                  notify.set("Pomyślnie dodano zamiennik.");
                                  setTimeout(() => {
                                    setDeleyedRedirect(true);
                                  }, 2000);
                                })
                                .catch((err) => {
                                  console.log(err.response);
                                  notify.set("Wystąpił nieoczekiwany błąd.");
                                });
                            }}
                          >
                            <Icon src={EditIcon} />
                          </Button>
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
                              Czy chcesz usunąć zamiennik ?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Nie
                            </Button>
                            <Button
                              onClick={() => {
                                fetch(`${user.Api}/moderate/${veg.id}/`, {
                                  method: "DELETE",
                                  headers: {
                                    Authorization: `Token ${user.userInfo.token}`,
                                    "Content-type":
                                      "application/json; charset=UTF-8",
                                  },
                                })
                                  .then((res) => {
                                    notify.set("Pomyślnie usunięto zamiennik.");
                                    setTimeout(() => {
                                      setDeleyedRedirect(true);
                                    }, 2000);
                                  })
                                  .catch((err) => {
                                    console.log(err.response);
                                    notify.set("Wystąpił nieoczekiwany błąd.");
                                  });
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
                          color: "white",
                        }}
                      >
                        {veg.id_vegan.name}
                      </li>
                      <li
                        style={{
                          display: "flex",
                          width: "100%",
                          "justify-content": "space-evenly",
                        }}
                      >
                        <p style={{ width: "20%" }}>Kaloryczność:</p>
                        <p style={{ width: "10%" }}>{veg.id_vegan.kcal}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          width: "100%",
                          "justify-content": "space-evenly",
                        }}
                      >
                        <p style={{ width: "20%" }}>Proteiny:</p>
                        <p style={{ width: "10%" }}>{veg.id_vegan.protein}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          width: "100%",
                          "justify-content": "space-evenly",
                        }}
                      >
                        <p style={{ width: "20%" }}>Tłuszcz:</p>
                        <p style={{ width: "10%" }}>{veg.id_vegan.fat}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          width: "100%",
                          "justify-content": "space-evenly",
                        }}
                      >
                        <p style={{ width: "20%" }}>Węglowodany:</p>
                        <p style={{ width: "10%" }}>{veg.id_vegan.carbs}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          width: "100%",
                          "justify-content": "space-evenly",
                        }}
                      >
                        <p style={{ width: "20%" }}>Celuloza:</p>
                        <p style={{ width: "10%" }}>{veg.id_vegan.celulose}</p>
                      </li>
                    </ul>
                  );
                })}
            </ul>
          </ReplacementsContainer>
        </div>
      )}
    </div>
  );
};
export default ReplacementAccept;
