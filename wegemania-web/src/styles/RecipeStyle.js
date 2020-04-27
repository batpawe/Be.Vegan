import styled from "styled-components";
export const HeaderRecipeContainer = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
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
  padding: 0;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 1%;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 350px;
`;
export const IngredientsItem = styled.li`
  font-weight: bold;
  font-size: 14px;
  margin: 5px 10px 2px 10px;
  padding: 0;
  color: black;
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 1%;
`;
export const PreparationItem = styled.li`
  margin: 5px 10px 2px 0;
  border-radius: 10px;
  color: black;
  background: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
  padding: 3%;
`;
export const RecipeImage = styled.img`
  width: 250px;
  margin: 10px auto 10px auto;
  display: block;
`;
export const RateContainer = styled.ul`
  list-style-type: none;
  text-align: center;
  width: 12%;
  padding: 0;
  margin: 5% auto 1% auto;
  position: relative;
`;
export const RateHeader = styled.li`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;
export const RateStars = styled.li`
  padding: 0;
  margin: 0;
`;
export const BigRateContaiener = styled.ul`
  list-style-type: none;
  text-align: center;
  @media (min-width: 1400px) {
    width: 14%;
  }
  width: 23%;
  padding: 0;
  margin: 5% auto 1% auto;
  position: relative;
`;
export const SmallRateContainer = styled.ul`
  list-style-type: none;
  text-align: center;
  display: "block";
  @media (min-width: 1400px) {
    width: 100%;
  }
  width: 100%;
  padding: 0;
  margin: 5% auto 1% auto;
  position: relative;
`;
