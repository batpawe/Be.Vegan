import styled from "styled-components";
export const Container = styled.div`
  padding: 0 0.5% 0.5% 0.5%;
  align-content: flex-start;
  font-size: 17px;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  margin: 10vw 0 0 1%;
  width: 65%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ContainerReplacements = styled.div`
  width: 50%;
  min-height: 300px;
  margin: 1% 0 1% 0;
  display: flex;
`;
export const ImageReplacements = styled.img`
  width: 60%;
`;
export const ContentContainer = styled.div`
  width: 38%;
  background: white;
`;
export const ReplacementsName = styled.h1`
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
  background: #00a835;
  margin: 1% 0 0 0;
  width: 40%;
  padding: 1%;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
`;
export const WayItem = styled.li`
  background: #00a835;
  text-align: justify;
  margin: 1% 0 0 0;
  font-size: 10px;
  border: 1px solid black;
  color: white;
  width: 100%;
`;

export const ReplacementsImage = styled.img`
  width: 80px;
`;
export const OuterUnorderedList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;
export const InnerUnorderedList = styled.ul`
  width: 60%;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
