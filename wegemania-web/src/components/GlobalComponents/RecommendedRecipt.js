import React, { useEffect, useState } from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  HyperLink,
  Image,
  BoldText,
} from "../../styles/GlobalStyle";
import DinnerImage from "../../images/dinner.jpg";
import axios from "axios";
export const RecommendedRecipt = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/recipes/")
        .then((res) => {
          //console.log(res.data);
          //setRecipes(res.data);
          //console.log(res.data[0]);
          let temp = [];
          let randArray = [];
          for (var i = 0; i < res.data.length; i++) {
            randArray.push(i);
          }
          let getUniqueRandomNumbers = (n) => {
            let set = new Set();
            while (set.size < n) set.add(Math.floor(Math.random() * n));
            return Array.from(set);
          };
          let result = getUniqueRandomNumbers(randArray.length).map(
            (x) => randArray[x]
          );
          temp.push(res.data[result[0]]);
          temp.push(res.data[result[1]]);
          setRecipes(temp);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    };
    fetchData();
  }, []);
  return (
    <LocalContainer>
      <HeaderText
        style={{
          "text-align": "center",
          background: "#00a835",
          "border-radius": "20px",
          color: "white",
          padding: "1%",
          margin: "1% auto 1% auto",
        }}
      >
        Polecane Przepisy :
      </HeaderText>
      {recipes &&
        recipes.map((recipe, index) => {
          return (
            <UnorderedList>
              <li>
                <BoldText>Nazwa:</BoldText>
                {recipe.recipe_name}
              </li>
              <li>
                <BoldText>Czas przygotowania:</BoldText>
                {`${recipe.time} minut`}
              </li>
              <li>
                <HyperLink to={`/recipe/${recipe.id}`}>
                  <Image src={recipe.recipe_foto}></Image>
                </HyperLink>
              </li>
            </UnorderedList>
          );
        })}
    </LocalContainer>
  );
};
