import styled from "styled-components";
export const HeaderRestaurantContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const HeaderRestaurantText = styled.li`
  font-size: 24px;
  color: #00a835;
  font-weight: bold;
`;
export const FirstRestaurantRow = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
`;
export const FirstRestaurantItem = styled.li`
  margin: 10px;
  text-align: center;
  padding: 0;
`;
export const RestaurantImageComponent = styled.img`
  margin: 25px;
  padding: 0;
  width: 300px;
`;
export const RestaurantOpenItem = styled.li`
  margin: 20px 10px 20px 10px;
  padding: 0;
  color: white;
  width: 300px;
  text-align: justify;
  text-justify: inter-word;
  border: 1px solid black;
  cursor: pointer;
  background: #00a835;
  padding: 1%;
`;
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
`;
export const MenuItem = styled.li`
  width: 40%;
  margin: 15px 10px 2px 10px;
  padding: 0;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  border-radius: 25px;
  background: #00a835;
  padding: 1%;
`;
export const HeaderColumn = styled.li`
  text-align: center;
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
