import styled from "styled-components";
export const HeaderRecipeContainer = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: auto;
  text-align: center;
`;
export const HeaderRecipeText = styled.li`
  font-size: 24px;
  color: #00a835;
  font-weight: bold;
`;
export const RecipeTimeContainer = styled.ul`
  list-style-type: none;
  margin: 0 auto 0 auto;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
export const RecipeTime = styled.li`
  background: #00a835;
  border: 1px solid black;
  color: white;
`;
export const IngredientsList = styled.ul`
  list-style-type: none;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
`;
export const IngredientsItem = styled.li`
  width: 40%;
  margin: 5px 10px 2px 10px;
  padding: 0;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  border-radius: 25px;
  background: #00a835;
  padding: 1%;
`;
export const PreparationItem = styled.li`
  margin: 5px 10px 2px 10px;
  padding: 0;
  color: white;
  text-align: justify;
  text-justify: inter-word;
  border: 1px solid black;
  cursor: pointer;
  background: #00a835;
  padding: 1%;
`;
export const RecipeImage = styled.img`
  width: 250px;
  margin: 10px auto 10px auto;
  display: block;
`;
export const RateContainer = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 5% auto 0 auto;
`;
export const RateHeader = styled.li`
  font-size: 20px;
  font-weight: bold;
`;
export const RateStars = styled.li`
  position: relative;
  left: 45%;
`;
