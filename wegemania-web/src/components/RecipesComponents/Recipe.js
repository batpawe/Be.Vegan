import React, { useContext, useState, useEffect } from "react";
import ProductImage from "../../images/product.jpg";
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
import { MainContainer, Container } from "../../styles/WallStyle";
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
  PreparingMethod,
  RatingComponent,
  RatingHeader,
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import DinnerImage from "../../images/dinner.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  SearchPanel,
  SearchInput,
  SearchButton,
} from "../../styles/GlobalStyle";
import "../../styles/MenuLoginStyle.css";
import ReactStars from "react-stars";

import UserIcon from "../../icons/white_user.svg";
import {
  ImageComponent,
  ElementContainer,
  HoverIcon,
  HoverContainer,
  HoverHeader,
  HoverText,
  ImageHoverComponent,
} from "../../styles/TempRecipes";
import { Redirect } from "react-router-dom";
import {
  HeaderRecipeContainer,
  RecipeTimeContainer,
  HeaderRecipeText,
  RecipeTime,
  IngredientsList,
  IngredientsItem,
  PreparationItem,
  RecipeImage,
  RateContainer,
  RateHeader,
  RateStars,
  BigRateContaiener,
  SmallRateContainer,
} from "../../styles/RecipeStyle";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
import "../../styles/Rate.css";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  BigRateContainerRecipes,
  SmallRateContainerRecipes,
} from "../../styles/StarsStyle";
import axios from "axios";
import ClockIcon from "../../icons/white_clock.svg";
import { NewNotifyContext } from "../../context/Notify";

const Recipe = (props) => {
  const RecommendElements = (props) => {
    const [isHover, setIsHover] = useState(false);
    return (
      <ElementContainer
        style={{ width: "18%", height: "100%", padding: "1% 0 0 0" }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => props.historyProps.push(`/recipe/${props.recommend.id}`)}
      >
        <HoverContainer style={{ width: "100%" }}>
          {isHover ? (
            <div style={{ width: "100%", position: "relative" }}>
              <ImageHoverComponent
                style={{
                  width: "100%",
                  height: "220px",
                  "border-radius": "4px",
                  "object-fit": "cover",
                }}
                src={`${props.recommend.recipe_foto}`}
              />

              <HoverText
                style={{
                  "font-size": "14px",
                  top: "0",
                  display: "flex",
                  "justify-content": "center",
                }}
              >
                <img
                  src={UserIcon}
                  style={{ width: "20px", height: "20px", margin: "0 1% 0 0" }}
                />
                <p style={{ margin: 0, color: "white" }}>
                  {props.recommend.id_user.username}
                </p>
              </HoverText>
              <HoverText
                style={{
                  "font-size": "16px",
                  top: "15%",
                  display: "flex",
                  "justify-content": "center",
                }}
              >
                <img
                  src={ClockIcon}
                  style={{ width: "25px", height: "25px", margin: "0 5% 0 0" }}
                />
                <p style={{ margin: 0, color: "white" }}>
                  {props.recommend.time}min
                </p>
              </HoverText>
              <div
                style={{
                  width: "100%",
                  position: "absolute",
                  top: "25%",
                }}
              >
                <SmallRateContainer>
                  <RateStars
                    style={{
                      width: "100%",
                      margin: "0 auto 0 auto",
                      "text-align": "center",
                      display: "block",
                    }}
                  >
                    <ReactStars
                      edit={false}
                      value={props.recommend.rating}
                      count={5}
                      className="recipes_rate"
                      //onChange
                      size={24}
                      color2={"#4CAF50"}
                    />
                  </RateStars>
                </SmallRateContainer>
              </div>
            </div>
          ) : (
            <div style={{ width: "100%" }}>
              <ImageComponent
                style={{
                  width: "100%",
                  height: "220px",
                  "border-radius": "4px",
                  "object-fit": "cover",
                }}
                src={`${props.recommend.recipe_foto}`}
              />
            </div>
          )}
        </HoverContainer>
        <p style={{ width: "100%" }}>{props.recommend.recipe_name}</p>
      </ElementContainer>
    );
  };
  const qs = require("querystring");

  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [descriptionComment, setDescriptionComment] = useState("");
  const [myRate, setRate] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [listIngredients, setListIngredients] = useState([]);
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
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = (val) => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  const AddComment = async () => {
    const params = new URLSearchParams();
    params.append("id_recipe", props.match.params.id);
    params.append("user_comment", descriptionComment);
    params.append("rating", myRate);

    axios({
      method: "post",
      url: "http://veggies.ddns.net:8181/recipe/rating/",
      data: qs.stringify({
        id_recipe: parseInt(props.match.params.id, 10),
        user_comment: descriptionComment,
        rating: myRate,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Token ${user.userInfo.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          notify.set("Pomyślnie dodano komentarz.");
          setTimeout(() => {
            setDeleyedRedirect(true);
          }, 2000);
        } else if (res.data.detail) {
          notify.set("Przepis został już przez Ciebie oceniony.");
        } else {
          notify.set("Wystąpił nieoczekiwany błąd");
        }
        console.log(res.data.data);
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
    /*
    const data = new FormData();
    data.append("id_restaurant", props.match.params.id);
    data.append("user_comment", descriptionComment);
    data.append("rating", parseInt(myRate, 10));
    console.log([...data]);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
      },
      body: data,
    };
    */
    /*
    const params = new URLSearchParams();
    params.append("id_recipe", props.match.params.id);
    params.append("user_comment", descriptionComment);
    params.append("rating", myRate);

    axios({
      method: "post",
      url: "https://veggiesapp.herokuapp.com/recipe/rating/",
      data: qs.stringify({
        id_restaurant: parseInt(props.match.params.id, 10),
        user_comment: descriptionComment,
        rating: myRate,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Token ${user.userInfo.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
      */
    /*
    await axios
      .post("https://veggiesapp.herokuapp.com/recipe/rating/", params, {
        headers: {
          Authorization: `Token ${user.userInfo.token}`,
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.response.data);
      });
*/
    /*
    await fetch(`https://veggiesapp.herokuapp.com/restaurants/rating/`, config)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          res.text().then((text) => {
            let json = JSON.parse(text);
            console.log(json);
            if (json.id_restaurant) {
              notify.set("Pomyślnie dodano komentarz.");
              setTimeout(() => {
                setDeleyedRedirect(true);
              }, 2000);
            } else if (json.detail) {
              notify.set("Ocena już istnieje");
            } else {
              console.log(res);
              console.log(res.response);
              notify.set("Wystąpił nieoczekiwany błąd!");
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
      */
  };
  useEffect(() => {
    user.openPanel(false);
    console.log(`${user.Api}/recipes/${props.match.params.id}`);
    const fetchData = async () => {
      await axios(`${user.Api}/recipes/${props.match.params.id}`)
        .then((res) => {
          setRecipe(res.data);
          console.log("!!!");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      await axios(`${user.Api}/recipes/list/${props.match.params.id}/`)
        .then((res) => {
          setListIngredients(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [props.match.params.id, deleyedRedirect]);
  return (
    <MainContainer>
      <Container style={{ position: "relative", width: "80%" }}>
        {recipe.recipe && user.userInfo.id === recipe.recipe.id_user.id && (
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
                  Czy chcesz usunąć przepis ?
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
        )}
        <div style={{ display: "flex" }}>
          <RecipeImage
            style={{
              width: "40%",
              margin: "0",
              "border-radius": "4px",
              "object-fit": "cover",
            }}
            src={recipe.recipe && recipe.recipe.recipe_foto}
          />
          <div style={{ width: "60%" }}>
            <p
              style={{
                "text-align": "center",
                "font-size": "40px",
                "letter-spacing": "20px",
                padding: "8% 0 0 0",
                width: "80%",
                margin: "0 auto",
                "border-bottom": "1px solid black",
              }}
            >
              {recipe.recipe && recipe.recipe.recipe_name}
            </p>
            <p
              style={{
                "text-align": "center",
                color: "#4CAF50",
                "font-size": "30px",
                margin: "3% 0 3% 0",
                "font-weight": "bold",
              }}
            >
              {recipe.recipe && recipe.recipe.id_user.username}
            </p>
            <div
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "20px",
              }}
            >
              <img
                src={ClockIcon}
                style={{
                  margin: "0 2% 0 0",
                  width: "30px",
                  height: "30px",
                  "border-radius": "50%",
                  background: "rgb(76,175,80)",
                }}
              />
              <p style={{ margin: "0 3% 0 0", "font-size": "24px" }}>
                {recipe.recipe && recipe.recipe.time} minut
              </p>
            </div>
            <BigRateContaiener style={{ width: "100%" }}>
              <RateStars>
                <ReactStars
                  edit={false}
                  value={recipe.recipe ? recipe.recipe.rating : 0}
                  count={5}
                  className="recipes_rate"
                  //onChange
                  size={56}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </BigRateContaiener>
          </div>
        </div>
        <OrderedList>
          <UnorderedList>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText style={{ width: "100%", "text-align": "center" }}>
                    Składniki
                  </BorderText>
                </Item>
                <IngredientsList
                  styles={{
                    background: "rgba(255,255,255,0.6)",
                    color: "black",
                  }}
                >
                  {listIngredients &&
                    listIngredients.map((ingredient) => {
                      return (
                        <IngredientsItem
                          style={{
                            "justify-content": "space-between",
                            width: "90%",
                          }}
                        >
                          <p>{ingredient.name}</p>
                          <p>{ingredient.amount}</p>
                        </IngredientsItem>
                      );
                    })}
                </IngredientsList>
              </div>
              <PreparingMethod style={{ width: "58%", "max-width": "unset" }}>
                <Item>
                  <BorderText style={{ width: "100%", "text-align": "center" }}>
                    Sposób przygotowania
                  </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem style={{ "white-space": "pre-wrap" }}>
                    {recipe.recipe &&
                      recipe.recipe.recipe_decription
                        .replace("/\r\n/", "d")
                        .replace("/\r\n\r\n/", "\n")}
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "space-between",
              }}
            >
              {recipe.recommend &&
                recipe.recommend.map((recp) => {
                  return (
                    <RecommendElements
                      recommend={recp}
                      historyProps={props.history}
                    />
                  );
                })}
            </div>
            <HeaderText>Komentarze</HeaderText>
            <UnorderedListComments>
              {recipe.rating &&
                recipe.rating.map((rate) => {
                  return (
                    <UnorderedListCommentsIn>
                      <HighlightItem>
                        {rate.id_user.username || "mateuszklimek"}
                      </HighlightItem>
                      <CommentContent style={{ "font-size": "14px" }}>
                        {rate.user_comment || "testowy komentarz"}
                      </CommentContent>
                      <RateStars
                        style={{ width: "18%", margin: 0, padding: 0 }}
                      >
                        <ReactStars
                          style={{ background: "none" }}
                          edit={false}
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
                style={{ "flex-direction": "column", width: "100%" }}
              >
                <TextInput
                  value={descriptionComment}
                  onChange={(e) => {
                    setDescriptionComment(e.target.value);
                  }}
                  style={{
                    width: "40%",
                    margin: "1% 0 0 0",
                    background: "rgba(255,255,255,0.7)",
                  }}
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <RateStars
                  style={{
                    width: "52%",
                    margin: "0",
                    padding: "0 0 1% 0",
                    background: "none",
                  }}
                >
                  <ReactStars
                    style={{
                      background: "none",
                      margin: 0,
                      padding: "0 0 1% 0",
                    }}
                    value={myRate}
                    count={5}
                    className="test"
                    onChange={(e) => setRate(e)}
                    size={24}
                    color2={"#4CAF50"}
                  />
                </RateStars>
                <SubmitCommentButton
                  style={{ width: "40%" }}
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
      {/*<RightPanel recommend={recipe.recommend} />*/}
    </MainContainer>
  );
};
export default Recipe;
