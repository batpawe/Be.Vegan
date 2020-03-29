import styled from "styled-components";
import { Link } from "react-router-dom";
export const OrderedList = styled.ol`
  padding: 0;
  color: black;
  margin: 0;
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 12% 0 0 0;
  width: 100vw;
`;
export const Container = styled.div`
  padding: 0.5% 2% 2% 2%;
  font-size: 17px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 1% 0 1%;
  width: 1000px;
  border-radius: 2px;
`;
export const UnorderedList = styled.ul`
  margin: 0 0 2% 0;
  list-style-type: none;
  padding: 1%;
`;
export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const BorderText = styled.span`
  font-weight: bold;
`;
export const Image = styled.img`
  width: 350px;
  margin: 5% auto 0 auto;
  display: block;
  height: 250px;
`;
export const UnorderedListIn = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  margin: 7% 0 0 0;
  display: flex;
  align-items: center;
`;
export const UnorderedListComments = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const UnorderedListCommentsIn = styled.ul`
  padding: 1%;
  list-style-type: none;
  background: rgba(255, 255, 255, 0.6);
  margin: 3% 0 3% 0;
`;
export const HighlightItem = styled(Link)`
  color: green;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  :hover,
  :active {
    color: green;
    text-decoration: none;
  }
`;
export const CommentContent = styled.li`
  font-size: 12px;
`;
export const HeaderText = styled.h1`
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid black;
  width: 100%;
`;
export const HyperLink = styled(Link)`
  display: block;
  margin: auto;
  text-decoration: none;
  color: white;
  background: #27ae60;
  font-size: 14px;
  text-align: center;
  padding: 2%;
  letter-spacing: 0.1em;
  transition: text-shadow 0.3s;
  :hover {
    text-shadow: 0 0 1px white, 0 0 1px white;
    background: #2ecc71;
    color: white;
    text-decoration: none;
  }
  cursor: pointer;
`;
export const TextInput = styled.textarea`
  height: 100px;
  min-width: 250px;
  margin: auto 0 auto 0;
  line-height: 20px;
  font-size: 14px;
  display: block;
  outline: none;
  border: 1px solid black;
  resize: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 1; /* Firefox */
  }
`;
export const SubmitCommentButton = styled.button`
  border: 1px solid black;
  color: white;
  box-sizing: border-box;
  background: #27ae60;
  font-size: 14px;
  height: 100px;
  :hover {
    text-shadow: 0 0 1px white, 0 0 1px white;
    background: #2ecc71;
  }
  cursor: pointer;
`;
export const CommentContainer = styled.div`
  display: flex;
  margin: 3% 0 0 0;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid black;
`;
export const PreparingMethod = styled.div`
  max-width: 400px;
`;
export const TagContainer = styled.div`
  display: flex;
  margin: 5% 0 0 0;
`;
export const TagItem = styled.li`
  margin: 0 1% 0 0;
  min-width: 100px;
  display: block;
  padding: 1%;
  font-size: 20px;
  border-radius: 100%;
  text-align: center;
  border: 1px solid black;
  background: #27ae60;
  color: white;
`;
export const RatingComponent = styled.div`
  margin: 5% 0 5% 0;
  font-size: 18px;
  & > i {
    font-size: 200px;
  }
`;
export const RatingHeader = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
export const ProductAttributes = styled.ul`
  display: flex;
  margin: 5% 0 5% 0;
  list-style-type: none;
  font-size: 16px;
  flex-wrap: wrap;
`;
export const AttributeItem = styled.li`
  width: 45%;
  color: white;
  padding: 1%;
  margin: 1%;
  background: #27ae60;
`;

export const HeaderRecipe = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;
export const ItemHeaderRecipe = styled.li`
  justify-content: space-between;
  width: 400px;
  font-size: 20px;
  color: black;
  align-items: center;
  display: flex;
`;
export const HiglightItemHeaderRecipe = styled.span`
  color: white;
  background: #00a835;
  padding: 1%;
  border: 1px solid black;
  text-align: center;
  font-weight: bold;
`;
export const HeaderList = styled.ul`
  text-align: center;
  width: 100%;
  list-style-type: none;
`;
export const HeaderItem = styled.li`
  margin: 0;
  padding: 0;
  color: green;
  font-size: 24px;
  text-align: center;
`;
