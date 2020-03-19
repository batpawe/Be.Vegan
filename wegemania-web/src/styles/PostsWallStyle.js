import styled, { withTheme } from "styled-components";
export const HeaderPostsContainer = styled.ul`
  list-style-type: none;
  margin: auto;
  text-align: center;
  display: block;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 0;
`;
export const HeaderPostsItem = styled.li`
  text-align: center;
  margin: auto;
  font-size: 12px;
  font-weight: bold;
`;
export const HeaderPostsText = styled.h1`
  font-size: 24px;
  color: #00a835;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
export const TagsPostsHeaderContainer = styled.ul`
  list-style-type: none;
  margin: 5% 0 0 0;
  padding: 0;
`;
export const TagsPostsHeader = styled.h1`
  text-align: center;
  font-size: 18px;
  margin: auto;
  padding: 0;
  font-weight: bold;
`;
export const TagsPostsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 5%;
`;
export const TagsItems = styled.li`
  background: #00a835;
  padding: 1%;
  width: 15%;
  text-align: center;
  border: 1px solid black;
  color: white;
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
export const TagInput = styled.input`
  width: 91.4%;
  font-size: 20px;
  border: 1px solid black;
  padding: 1%;
`;
export const TagButton = styled.button`
  font-size: 20px;
  color: white;
  background: #00a835;
  border: 1px solid black;
  height: 55px;
`;
export const AddHeader = styled.h1`
  color: black;
  margin: 5% 0 0 0;
  font-size: 22px;
  text-align: center;
`;
export const OrderedList = styled.ol`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  text-align: center;
  flex-direction: row;
`;
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin: 2% auto 0 auto;
  background: #00a835;
  padding: 1%;
  border: 1px solid black;
  color: white;
`;
export const DeleteIcon = styled.img`
  cursor: pointer;
  color: white;
  width: 25px;
`;
export const ImageForUpload = styled.img`
  width: 120px;
  cursor: pointer;
`;
