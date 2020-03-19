import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  HelloMessage,
  UnorderedListProfile,
  UserProfileItem,
  UserProfileItemRow,
  UnorderedFlexList,
  EditProfileButton,
  UserName,
  Header
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
const ActivityText = props => {
  let temp;
  if (props.activity == 0) {
    temp =
      "Brak aktywności, nie wykonuje żadnej aktywności sportowej, pracuje w pracy na stanowisku siedzącym, dojeżdżam do niej samochodem";
  } else if (props.activity == 1) {
    temp =
      "Mała aktywność, aktywności sportowe zdarzają się bardzo rzadko, do pracy chodzę pieszo, w pracy wykonuję lekką aktywność fizyczną";
  } else if (props.activity == 2) {
    temp =
      "Średnia aktywność, aktywność sportowa co najmniej raz w tygodniu, staram się być aktywnym przy codziennych obowiązkach (praca, sklep), w pracy wykonuje lekką aktywność fizyczną,";
  } else if (props.activity == 3) {
    temp =
      "Duża aktywność, aktywność sportowa co najmniej 3 razy w tygodniu, aktywny przy codziennych obowiązkach, w pracy przerwy na rozciąganie i rozgrzewanie ciała";
  } else if (props.activity == 4) {
    temp =
      "Bardzo duża aktywność, aktywność sportowa codziennie, aktywny przy każdej możliwej okazji, w trakcie pracy aktywny lub robi przerwy na aktywność fizyczną";
  }
  return <p>{temp}</p>;
};
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
            <Header>
              <HelloMessage>Profil: </HelloMessage>
              <UserName>{userData.username}</UserName>
            </Header>

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
                    <ActivityText activity={userData.activity} />
                    {/*<ProgressBar striped variant="success" now={60} />{*/}
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
