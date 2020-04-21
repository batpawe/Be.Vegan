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
} from "../../styles/RecipeStyle";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { NewNotifyContext } from "../../context/Notify";
const Recipe = (props) => {
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
      url: "https://veggiesapp.herokuapp.com/recipe/rating/",
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
    console.log(
      `https://veggiesapp.herokuapp.com/recipes/${props.match.params.id}`
    );
    const fetchData = async () => {
      await axios(
        `https://veggiesapp.herokuapp.com/recipes/${props.match.params.id}`
      )
        .then((res) => {
          setRecipe(res.data);
          console.log("!!!");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      await axios(
        `https://veggiesapp.herokuapp.com/recipes/list/${props.match.params.id}/`
      )
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
        <OrderedList>
          <UnorderedList>
            <HeaderRecipeContainer
              style={{
                background: "#00a835",
                width: "40%",
                "font-size": "24px",
                color: "white",
                "font-weight": "bold",
                margin: "1% auto 1% auto",
                "border-radius": "25px",
              }}
            >
              <HeaderRecipeText style={{ color: "white" }}>
                {recipe.recipe && recipe.recipe.recipe_name}
              </HeaderRecipeText>
            </HeaderRecipeContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
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
                <RecipeImage
                  style={{ width: "90%", margin: "3% 0 0 0" }}
                  src={recipe.recipe && recipe.recipe.recipe_foto}
                />
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem style={{ "white-space": "pre-wrap" }}>
                    {recipe.recipe &&
                      recipe.recipe.recipe_decription
                        .replace("\r\n\r\n", "\n")
                        .replace("\r\n", "\n")}
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RateContainer>
              <RateHeader>Ocena</RateHeader>
              <RateStars>
                <ReactStars
                  value={recipe.recipe ? recipe.recipe.rating : 0}
                  count={5}
                  className="test"
                  //onChange
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              {recipe.rating &&
                recipe.rating.map((rate) => {
                  return (
                    <UnorderedListCommentsIn>
                      <HighlightItem>
                        {rate.id_user.username || "mateuszklimek"}
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
      <RightPanel recommend={recipe.recommend} />
    </MainContainer>
  );
};
export default Recipe;