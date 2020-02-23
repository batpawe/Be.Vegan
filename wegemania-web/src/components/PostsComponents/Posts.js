import React, { useContext } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
  TagContainer,
  TagItem,
  RatingComponent
} from "../../styles/WallStyle";
import {
  HeaderPostsContainer,
  HeaderPostsItem,
  HeaderPostsText,
  TagsPostsHeader,
  TagsPostsHeaderContainer,
  TagsPostsContainer,
  TagsItems
} from "../../styles/PostsWallStyle";
import PostImage from "../../images/postimage.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import "../../styles/MenuLoginStyle.css";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
import { Link } from "react-router-dom";
const Posts = () => {
  const user = useContext(NewLoginInfo);

  return (
    <MainContainer>
      <Container>
        <AddPostPageContainer>
          <AddPostPageLink to="/addpost">Dodaj post</AddPostPageLink>
        </AddPostPageContainer>
        <OrderedList>
          <UnorderedList>
            <HeaderPostsContainer>
              <HeaderPostsItem>
                <HeaderPostsText>Post1</HeaderPostsText>
              </HeaderPostsItem>
              <HeaderPostsItem>Autor</HeaderPostsItem>
            </HeaderPostsContainer>
            <TagsPostsHeaderContainer>
              <li>
                <TagsPostsHeader>Tagi:</TagsPostsHeader>
              </li>
            </TagsPostsHeaderContainer>
            <TagsPostsContainer>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
            </TagsPostsContainer>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
          <UnorderedList>
            <HeaderPostsContainer>
              <HeaderPostsItem>
                <HeaderPostsText>Post1</HeaderPostsText>
              </HeaderPostsItem>
              <HeaderPostsItem>Autor</HeaderPostsItem>
            </HeaderPostsContainer>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
        </OrderedList>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Posts;
