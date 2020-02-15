import React from "react";
import {
  Container,
  HelloMessage,
  UnorderedListProfile,
  UserProfileItem,
  UserProfileItemRow,
  UnorderedFlexList,
  EditProfileButton
} from "../../styles/UserProfile";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  UnorderedList,
  ColumnContainer,
  BorderText,
  Image,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer
} from "../../styles/WallStyle";
import PostImage from "../../images/postimage.jpg";
const Users = props => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          "align-items": "center",
          margin: "3% 0 0 0"
        }}
      >
        <HelloMessage>Witaj {props.match.params.id}</HelloMessage>
        <EditProfileButton to="/edituser/1">
          Edytuj użytkownika
        </EditProfileButton>
      </div>
      <UnorderedListProfile>
        <UnorderedFlexList>
          <UserProfileItemRow>
            <BorderText>Adres e-mail:</BorderText> mail@mail.com
          </UserProfileItemRow>
          <UserProfileItemRow>
            <BorderText>Wzrost:</BorderText> 190
          </UserProfileItemRow>
          <UserProfileItemRow>
            <BorderText>Wiek:</BorderText> 18
          </UserProfileItemRow>
          <UserProfileItemRow>
            <BorderText>Waga:</BorderText> 23
          </UserProfileItemRow>
          <UserProfileItemRow>
            <BorderText>Aktywność:</BorderText>
            <ProgressBar striped variant="success" now={60} />
          </UserProfileItemRow>
        </UnorderedFlexList>
        <UserProfileItem>
          <UserProfileItem>
            <HelloMessage>Ostatni post:</HelloMessage>
          </UserProfileItem>
          <UserProfileItem>
            <UnorderedList>
              <Item>
                <BorderText>Autor: </BorderText>
                <HighlightItem>Sklep1</HighlightItem>
              </Item>
              <Item>
                <BorderText>Tytuł: </BorderText>
                <HighlightItem>Tytuł</HighlightItem>
              </Item>
              <ColumnContainer>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </CommentContent>
                </UnorderedListCommentsIn>
                <UnorderedListCommentsIn>
                  <HighlightItem>Autor</HighlightItem>
                  <CommentContent>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
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
          </UserProfileItem>
        </UserProfileItem>
      </UnorderedListProfile>
    </Container>
  );
};

export default Users;
