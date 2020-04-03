//props.match.params
import React, { useState, useEffect } from "react";
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
  RecipesName,
  HeaderText,
  ContainerRecipes,
  ImageRecipes,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item,
  WayItem
} from "../../styles/TempRecipes";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";

import ikonaSkladnikowActive from "../../icons/ikonaSkladnikowactive.svg";
import ikonaTresciPrzepisuActive from "../../icons/ikonaTresciprzepisuactive.svg";
import ikonaSkladnikow from "../../icons/ikonaSkladnikow.svg";
import ikonaTresciPrzepisu from "../../icons/ikonaTresciprzepisu.svg";
import axios from "axios";
const Recipes = props => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/recipes/")
        .then(res => {
          setRecipes(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);
  const Paggination = props => {
    let no = props.no || 2;
    const handlePage = k => {
      let tmp = page;
      console.log(k);
      if (k == 1) {
        tmp[props.index] = 1;
      } else {
        tmp[props.index] = 0;
      }
      setPage([...tmp]);
    };
    const paggin = Array.from({ length: no }, (_, k) => {
      if (k == page[props.index] && k == 0) {
        return (
          <img
            src={ikonaSkladnikowActive}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k == page[props.index] && k == 1) {
        return (
          <img
            src={ikonaTresciPrzepisuActive}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k != page[props.index] && k == 0) {
        return (
          <img
            src={ikonaSkladnikow}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      } else if (k != page[props.index] && k == 1) {
        return (
          <img
            src={ikonaTresciPrzepisu}
            key={k}
            onClick={() => {
              handlePage(k);
            }}
            style={{ width: "35px", cursor: "pointer" }}
          />
        );
      }
    });
    return (
      <PagginationContainer
        style={{
          padding: "4% 0 1% 0",
          "border-top": "1px solid black",
          position: "absolute",
          bottom: 0,
          width: "100%"
        }}
      >
        {paggin}
      </PagginationContainer>
    );
  };
  const ContentController = props => {
    const [listIngredients, setListIngredients] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        await axios(
          `https://veggiesapp.herokuapp.com/recipes/list/${props.recipe.id}/`
        )
          .then(res => {
            setListIngredients(res.data);
            console.log("WWWWWWWWW");
            console.log(props.recipe.id);
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      };
      fetchData();
    }, []);
    return (
      <ContainerRecipes>
        <ImageRecipes
          src={props.recipe.recipe_foto}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push("/recipe/1")}
        />
        <ContentContainer
          style={{
            width: "38%",
            background: "rgba(255,255,255,0.6)",
            position: "relative"
          }}
        >
          <RecipesName style={{ "font-size": "14px" }}>
            {props.recipe.recipe_name}
          </RecipesName>
          <div
            style={{
              display: "flex",
              "justify-content": "space-between",
              width: "100%",
              "font-size": "12px",
              "white-space": "nowrap"
            }}
          >
            <p style={{ color: "#4CAF50", "font-weight": "bold" }}>
              Czas przygotowania:
            </p>
            <p
              style={{ "font-weight": "bold" }}
            >{`${props.recipe.time} minut`}</p>
          </div>
          {page[props.index] == 0 ? (
            <div>
              <HeaderText>Składniki:</HeaderText>
              <UnorderedList
                style={{
                  "max-height": "150px",
                  overflow: "auto",
                  margin: 0,
                  padding: 0,
                  width: "100%"
                }}
              >
                {listIngredients &&
                  listIngredients.map(ingredient => {
                    return (
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          display: "flex",
                          "justify-content": "space-between"
                        }}
                      >
                        <Item style={{ "font-size": "10px" }}>
                          {ingredient.name}
                        </Item>
                        <Item style={{ "font-size": "10px" }}>
                          {ingredient.amount}
                        </Item>
                      </ul>
                    );
                  })}
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Sposób przyrządzenia:</HeaderText>
              <UnorderedList>
                <WayItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </WayItem>
              </UnorderedList>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerRecipes>
    );
  };
  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div style={{ display: "flex", "flex-direction": "column" }}>
            <div>
              <SearchInput
                type="text"
                id="ajax"
                list="json-datalist"
                placeholder="Wprowadź nazwę produktu"
              />
              <datalist id="json-datalist">
                <option value="HTML" />
                <option value="CSS" />
                <option value="JavaScript" />
                <option value="Java" />
                <option value="Ruby" />
                <option value="PHP" />
                <option value="Go" />
                <option value="Erlang" />
                <option value="Python" />
                <option value="C" />
                <option value="C#" />
                <option value="C++" />
              </datalist>
            </div>
            <SearchButton
              style={{
                display: "flex",
                background: "27ae60",
                color: "white",
                "text-decoration": "none",
                padding: "0 1% 0 1%",
                width: "100%",
                "font-size": "18px",
                "justify-content": "center"
              }}
            >
              Wyszukaj
            </SearchButton>
          </div>
          <SearchButton
            to="/addrecipe"
            style={{
              display: "flex",
              background: "27ae60",
              color: "white",
              width: "200px",
              "text-decoration": "none",
              padding: "0 1% 0 1%",
              "font-size": "18px",
              "justify-content": "center",
              "align-items": "center"
            }}
          >
            Dodaj przepis
          </SearchButton>
        </SearchPanel>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          {recipes.map((recipe, index) => {
            return (
              <ContentController
                index={index}
                recipe={recipe}
                historyProps={props.history}
              />
            );
          })}
        </div>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Recipes);
