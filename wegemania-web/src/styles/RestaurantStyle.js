import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderRestaurantContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const HeaderRestaurantText = styled.li`
  font-size: 24px;
  color: white;
  font-weight: bold;
  background: #00a835;
  width: 30%;
  margin: 1% auto 1% auto;
  border-radius: 25px;
`;
export const FirstRestaurantRow = styled.div`
  display: block;
  text-align: center;
`;
export const FirstRestaurantItem = styled.li`
  margin: 10px;
  text-align: center;
  padding: 0;
`;
export const RestaurantImageComponent = styled.img`
  margin: 20px auto 0 auto;
  display: block;
  padding: 0;
  width: 400px;
`;
export const RestaurantOpenItem = styled.li`
  margin: 20px 0 0 0;
  padding: 0;
  width: 250px;
  color: black;
  font-weight: bold;
  text-align: justify;
  text-justify: inter-word;
  cursor: pointer;
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
  width: 12%;
  padding: 0;
  margin: 5% auto 0 auto;
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
export const LocationContainer = styled.div`
  margin: 25px 0 0 0;
`;
export const BorderHeader = styled.p`
  text-align: center;
  font-weight: bold;
`;
export const SearchContainer = styled.div`
  display: flex;
`;
export const SearchInput = styled.input`
  padding: 1%;
  font-size: 14px;
  width: 220px;
  height: 60px;
`;
export const SearchButton = styled.button`
  color: white;
  font-size: 14px;
  border: none;
  background: #27ae60;
  opacity: none;
  width: 150px;
  height: 60px;
  padding: 2%;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const RadiusContainer = styled.div`
  display: flex;
`;
export const AddRestaurantLink = styled(Link)`
  color: white;
  text-decoration: none;
  background: #27ae60;
  padding: 2%;
  font-size: 14px;
  display: block;
  min-width: 100px;
  height: 60px;
  text-align: center;
  width: 200px;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const SubscriptionRestaurantsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 37.2vh;
  border-top: ${(props) => (props.index == 0 ? "1px solid black" : "none")};
  border-bottom: 1px solid black;
`;
export const SubscriptionRestaurantImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 35%;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;
export const SubscriptionRestaurantSmallContainer = styled.div`
  height: 100%;
  width: 80%;
`;
export const SubscriptionHeaderParagraph = styled.p`
  font-size: 28px;
  margin: 0;
  padding: 0;
  margin: 4.5% 0 0 0;
  text-align: center;
  font-size: 50px;
  letter-spacing: 7px;
`;
export const SubscriptionParagraph = styled.p`
  font-size: 24px;
  margin: 2% 0 1% 0;
`;
