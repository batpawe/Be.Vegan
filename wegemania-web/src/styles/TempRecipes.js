import styled from "styled-components";
export const Container = styled.div`
  padding: 0 0.5% 0.5% 0.5%;
  align-content: flex-start;
  font-size: 17px;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  margin: 10vw 0 0 1%;
  width: 75%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ContainerRecipes = styled.div`
  width: 50%;
  min-height: 300px;
  margin: 1% 0 1% 0;
  display: flex;
`;
export const ImageRecipes = styled.img`
  width: 60%;
`;
export const ContentContainer = styled.div`
  width: 38%;
  background: white;
`;
export const RecipesName = styled.h1`
  font-size: 16px;
  color: #00a835;
  font-weight: bold;
  text-align: center;
`;
export const HeaderText = styled.h2`
  font-size: 14px;
  text-align: center;
  color: #00a835;
  font-weight: bold;
  margin: 0;
`;
export const UnorderedList = styled.ul`
  padding: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3% auto;
  list-style-type: none;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  font-size: 12px;
`;
export const PagginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding: 0;
  margin: 0 0 1% 0;
`;
export const PagginationItem = styled.li`
  background: ${props => (props.active ? "#00e849" : "#00a835")};
  padding: 2%;
  color: white;
  width: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background: #00e849;
  }
`;
export const Item = styled.li`
  margin: 1% 0 0 0;
  font-size: 15px;
  white-space: nowrap;
  font-weight: bold;
  padding: 1%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const WayItem = styled.li`
  text-align: justify;
  margin: 1% 0 0 0;
  font-size: 14px;
  color: black;
`;
