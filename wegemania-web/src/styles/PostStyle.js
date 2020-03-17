import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../images/web2.png";
export const ContainerPosts = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.3);
  margin: auto;
`;
export const SortPost = styled.select`
  padding: 1em;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 1.1em;
  border: 1px solid black;
`;
export const UserLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const SortOption = styled.option`
  cursor: pointer;
  display: inline-block;
  font-family: "Nunito", sans-serif;
  position: relative;
`;
export const WallHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UnorderedImage = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const Comments = styled.li`
  font-size: 1.3em;
  margin-bottom: 1em;
`;
export const ListImage = styled.li`
  padding: 0.3em 0.3em 0.3em 0;
`;

export const ListPostOptions = styled.li`
  padding: 0.4em 0.4em 0.4em 0;
  display: ${props => props.flex && "flex"};
  align-items: ${props => props.flex && "center"};
`;
export const StarContent = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: content 1s;
  /*
  :hover {
    content: url(${props => props.name});
  }
  */
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0.6, 0.6) 100%
    ),
    url(${Background});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  align-items: flex-start;
`;

export const UsersRankingStyled = styled.ul`
  font-size: 1.2em;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
export const UsersItem = styled.li`
  margin-left: 1em;
  padding: 0;
  color: green;
  font-weight: bold;
`;
export const OrderedUsersList = styled.ol`
  margin: 2em 0 0 0;
  max-height: 200px;
  background: white;
`;
export const UnorderedPost = styled.ul`
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: #fffcfc;
  margin: 3em 0 0.2em 0;
  text-align: justify;
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const PostAuthor = styled.li`
  font-size: 1.2em;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const PostSubject = styled.li`
  font-size: 1.2em;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const PostContent = styled.li`
  margin-top: 1em;
  width: 100%;
`;

export const UnorderedComment = styled.li`
  list-style: none;
  margin: 1em 0 0 0;
`;
export const CommentAuthor = styled.p`
  margin: 0;
  padding: 0;
`;
export const CommentContent = styled.p`
  padding: 0;
  margin: 0;
`;
export const ShowComments = styled.button`
  padding: 2%;
  font-size: 10px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
`;
export const TextUser = styled.p`
  padding: 0;
  margin: 0;
`;
export const PostHeader = styled.div`
  justify-content: space-between;
  font-size: 18px;
`;
export const PostLink = styled(Link)`
  padding: 1em;
  border: 1px solid black;
  font-size: 1.2em;
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export const PostForm = styled.form`
  margin: 5em 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  margin-bottom: 20px;
`;
export const TextField = styled.input`
  font-family: "Nunito", sans-serif;
  min-width: 500px;
  height: 35px;
  outline-color: black;
  background: transparent;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid black;
  line-height: 1.2px;
  outline: none;
  padding: 0 0 0.2em 0;
  transition: padding 0.4s;
  ::placeholder {
    color: #464646;
  }
  :focus {
    padding: 0 0 0.4em 0;
  }
`;
export const TextArea = styled.textarea`
  border: 1px solid black;
  min-width: 500px;
  min-height: 300px;
  font-size: 24px;
  outline: none;
`;
export const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
  cursor: pointer;
  font-size: 20px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
export const UserControl = styled.div`
  padding: 0 0 0 0.1em;
`;
export const AddPostPageContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  padding: 2%;
  align-items: center;
  margin: auto auto 5% auto;
  display: flex;
  justify-content: space-between;
`;
export const AddPostPageLink = styled(Link)`
  color: white;
  text-decoration: none;
  background: #27ae60;
  padding: 1.6%;
  box-sizing: border-box;
  font-size: 14px;
  display: block;
  text-align: center;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const SearchInput = styled.input`
  font-size: 14px;
  padding: 4%;
  width: 200px;
  outline: none;
  opacity: none;
`;
export const SearchButton = styled.button`
  color: white;
  font-size: 14px;
  border: none;
  background: #27ae60;
  opacity: none;
  padding: 2%;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 300px;
`;
