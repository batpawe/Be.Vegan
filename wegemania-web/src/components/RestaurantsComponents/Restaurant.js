import React, { useContext, useState, useEffect } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
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
  RatingComponent,
  RatingHeader,
  PreparingMethod,
} from "../../styles/WallStyle";
import DeleteIcon from "../../icons/bin_delete.svg";
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
  HeaderRestaurantContainer,
  HeaderRestaurantText,
  FirstRestaurantItem,
  RestaurantImageComponent,
  RestaurantOpenItem,
  MenuList,
  MenuItem,
  HeaderColumn,
  RateContainer,
  RateHeader,
  RateStars,
  LocationContainer,
  BorderHeader,
  FirstRestaurantRow,
  SearchContainer,
  SearchInput,
  SearchButton,
  RadiusContainer,
  AddRestaurantLink,
} from "../../styles/RestaurantStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RestaurantImage from "../../images/restaurant.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import ReactStars from "react-stars";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import "../../App.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { NewNotifyContext } from "../../context/Notify";
const Restaurant = (props) => {
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const notify = useContext(NewNotifyContext);
  const [descriptionComment, setDescriptionComment] = useState("");
  const user = useContext(NewLoginInfo);
  const [myRate, setRate] = useState(0);
  const [restaurant, setRestaurant] = useState({});
  const [hours, setHours] = useState([]);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `https://veggiesapp.herokuapp.com/restaurants/${props.match.params.id}/`
      )
        .then((res) => {
          setRestaurant(res.data);
          const tempTime = res.data.restaurant.hours.split("\r\n");
          const time = tempTime.map((time) => {
            return [
              time.split(":", 1).toString(),
              time.split(":").slice(1).join(":"),
            ];
          });
          const desc = res.data.restaurant.description
            .replace("\r\n\r\n", "\n")
            .replace("\r\n", "\n");
          setHours(time);
          setDescription(desc);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  const AddComment = async () => {
    const data = new FormData();
    data.append("id_resaurant", props.match.params.id);
    data.append("user_comment", descriptionComment);
    data.append("rating", myRate);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
      },
      body: data,
    };
    await fetch(`https://veggiesapp.herokuapp.com/restaurants/rating`, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        /*
        res.text().then((text) => {
          let json = JSON.parse(text);
          console.log(json);
          if (json.id_restaurant) {
            notify.set("Pomyślnie dodano komentarz.");
            setTimeout(() => {
              setDeleyedRedirect(true);
            }, 2000);
          } else {
            console.log(res);
            console.log(res.response);
            notify.set("Wystąpił nieoczekiwany błąd!");
          }
        });
        */
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
  };
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

  return (
    <MainContainer>
      {" "}
      {deleyedRedirect && <Redirect to={`/restaurants`} />}
      {restaurant.restaurant && (
        <Container style={{ position: "relative" }}>
          <div>
            <UserActionsContainer>
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
                  pathname: "/editpost",
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
          <OrderedList>
            <UnorderedList>
              <HeaderRestaurantContainer>
                <HeaderRestaurantText>
                  {restaurant.restaurant.name}
                </HeaderRestaurantText>
              </HeaderRestaurantContainer>
              <FirstRestaurantRow>
                <p
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    "text-align": "justify",
                    "white-space": "pre-wrap",
                    padding: "1%",
                    "font-size": "18px",
                  }}
                >
                  {description}
                </p>
                <RestaurantImageComponent src={restaurant.restaurant.foto} />
              </FirstRestaurantRow>
              <RateContainer>
                <RateHeader>Ocena</RateHeader>
                <RateStars>
                  <ReactStars
                    value={restaurant.restaurant.rating}
                    count={5}
                    className="test"
                    //onChange
                    size={24}
                    color2={"#4CAF50"}
                  />
                </RateStars>
              </RateContainer>
              <ColumnContainer>
                <div>
                  <Item>
                    <BorderText
                      style={{
                        color: "black",
                        "font-weight": "bold",
                        "text-align": "center",
                      }}
                    >
                      Godziny otwarcia:
                    </BorderText>
                  </Item>
                  <UnorderedListIn
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      "border-radius": "15px",
                      "text-align": "center",
                    }}
                  >
                    {hours.map((h) => {
                      return (
                        <RestaurantOpenItem
                          style={{
                            "text-align": "center",
                            display: "flex",
                            "justify-content": "space-between",
                          }}
                        >
                          <p>{`${h[0]}: `}</p>
                          <p>{h[1]}</p>
                        </RestaurantOpenItem>
                      );
                    })}
                  </UnorderedListIn>
                </div>
                <LocationContainer>
                  <BorderHeader
                    style={{ color: "black", "font-weight": "bold" }}
                  >
                    Lokalizacja :
                  </BorderHeader>
                  <Map
                    id="mapid"
                    center={[
                      restaurant.restaurant.latX,
                      restaurant.restaurant.longY,
                    ]}
                    zoom={12}
                    style={{
                      width: 400,
                      height: 300,
                      "z-index": 0,
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                      position={[
                        restaurant.restaurant.latX,
                        restaurant.restaurant.longY,
                      ]}
                    >
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </Map>
                </LocationContainer>
              </ColumnContainer>
              <HeaderText>Komentarze:</HeaderText>
              <UnorderedListComments>
                {restaurant.rating.map((rate) => {
                  return (
                    <UnorderedListCommentsIn>
                      <HighlightItem>
                        {rate.username || "mateuszklimek"}
                      </HighlightItem>
                      <CommentContent>
                        {rate.user_comment || "testowy komentarz"}
                      </CommentContent>
                      <RateStars style={{ width: "14%" }}>
                        <ReactStars
                          value={rate.rating}
                          count={5}
                          className="test"
                          //onChange
                          size={24}
                          color2={"#4CAF50"}
                        />
                      </RateStars>
                    </UnorderedListCommentsIn>
                  );
                })}

                <CommentContainer
                  style={{ "flex-direction": "column", width: "30%" }}
                >
                  <TextInput
                    value={descriptionComment}
                    onChange={(e) => {
                      setDescriptionComment(e.target.value);
                    }}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.7)",
                    }}
                    type="text"
                    placeholder="Wprowadź treść komentarza"
                  />
                  <RateStars style={{ width: "42%", margin: "1% auto" }}>
                    <ReactStars
                      value={myRate}
                      count={5}
                      className="test"
                      onChange={(e) => setRate(e)}
                      size={24}
                      color2={"#4CAF50"}
                    />
                  </RateStars>
                  <SubmitCommentButton
                    style={{ width: "100%" }}
                    type="submit"
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
        </Container>
      )}
      <RightPanel />
    </MainContainer>
  );
};
export default Restaurant;
