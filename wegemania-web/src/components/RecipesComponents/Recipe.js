import React, { useContext, useState } from "react";
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
  Icon
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
  RatingHeader
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import DinnerImage from "../../images/dinner.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  SearchPanel,
  SearchInput,
  SearchButton
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
  RateStars
} from "../../styles/RecipeStyle";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
import "../../App.css";
import { Link } from "react-router-dom";
const Recipe = props => {
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
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
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
                "border-radius": "25px"
              }}
            >
              <HeaderRecipeText style={{ color: "white" }}>
                ZUPA KREM Z TOPINAMBURU
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
                    color: "black"
                  }}
                >
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                  <IngredientsItem>
                    <p>Składniki</p>
                    <p>100g</p>
                  </IngredientsItem>
                </IngredientsList>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RecipeImage src={DinnerImage} />
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  count={5}
                  className="test"
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
              <CommentContainer
                style={{ "flex-direction": "column", width: "300px" }}
              >
                <TextInput
                  style={{ width: "100%", background: "rgba(255,255,255,0.7)" }}
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton style={{ width: "100%" }} type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
        </OrderedList>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Recipe;
