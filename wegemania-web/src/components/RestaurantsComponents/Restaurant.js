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
import { Link } from "react-router-dom";
const Restaurant = (props) => {
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
                <RateHeader>Oceń</RateHeader>
                <RateStars>
                  <ReactStars
                    value={restaurant.restaurant.description}
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
              {/*}
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
            {*/}
            </UnorderedList>
          </OrderedList>
        </Container>
      )}

      <RightPanel />
    </MainContainer>
  );
};
export default Restaurant;
