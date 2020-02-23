import React, { useContext, useState, useEffect } from "react";
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
import axios from "axios";
import { NewLoginInfo } from "../../context/LoginInfo";

const Users = props => {
  const user = useContext(NewLoginInfo);
  const [userData, setUserData] = useState();
  let request;
  useEffect(() => {
    if (user.userInfo.id == props.match.params.id) {
      request = "https://veggiesapp.herokuapp.com/me/";
    } else {
      request = `https://veggiesapp.herokuapp.com/users/${props.match.params.id}`;
    }
    const fetchData = async () => {
      const result = await axios.get(request, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: `Token ${user.userInfo.token}`
        }
      });
      console.log(result.data);
      setUserData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {userData && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              "align-items": "center",
              margin: "3% 0 0 0"
            }}
          >
            <HelloMessage>Profil {userData.username}</HelloMessage>

            {props.match.params.id == user.userInfo.id && (
              <EditProfileButton to={`/edituser/${user.userInfo.id}`}>
                Edytuj użytkownika
              </EditProfileButton>
            )}
          </div>
          <UnorderedListProfile>
            {props.match.params.id == user.userInfo.id && (
              <UnorderedFlexList>
                <UserProfileItemRow>
                  <BorderText>Adres e-mail:</BorderText>{" "}
                  {userData.email || "nie podano"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Wzrost:</BorderText>{" "}
                  {(userData.height || "nie podano") + " cm"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Wiek:</BorderText> {userData.age || "nie podano"}
                </UserProfileItemRow>
                <UserProfileItemRow>
                  <BorderText>Waga:</BorderText>
                  {userData.weight || "nie podano"}
                </UserProfileItemRow>
                {userData.activity ? (
                  <UserProfileItemRow>
                    <BorderText>Aktywność:</BorderText>
                    <ProgressBar striped variant="success" now={60} />
                  </UserProfileItemRow>
                ) : (
                  <UserProfileItemRow>
                    <BorderText>Aktywność:</BorderText>
                    Nie podano.
                  </UserProfileItemRow>
                )}
              </UnorderedFlexList>
            )}
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </ColumnContainer>
                  <Image src={PostImage} />
                  <HeaderText>Komentarze:</HeaderText>
                  <UnorderedListComments>
                    <UnorderedListCommentsIn>
                      <HighlightItem>Autor</HighlightItem>
                      <CommentContent>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </CommentContent>
                    </UnorderedListCommentsIn>
                    <UnorderedListCommentsIn>
                      <HighlightItem>Autor</HighlightItem>
                      <CommentContent>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
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
        </div>
      )}
    </Container>
  );
};

export default Users;
