import React, { useContext, useState, useEffect } from "react";
import Contents from "./Contents";
import {
  Container,
  HelloMessage,
  UnorderedListProfile,
  UserProfileItem,
  UserProfileItemRow,
  UnorderedFlexList,
  EditProfileButton,
  UserName,
  Header,
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
  CommentContainer,
} from "../../styles/WallStyle";
import PostImage from "../../images/postimage.jpg";
import axios from "axios";
import { NewLoginInfo } from "../../context/LoginInfo";
const ActivityText = (props) => {
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
  return <p style={{ width: "50%" }}>{temp}</p>;
};
const Users = (props) => {
  const user = useContext(NewLoginInfo);
  const [userData, setUserData] = useState();
  let request;
  useEffect(() => {
    user.openPanel(false);
    if (user.userInfo.id == props.match.params.id) {
      request = `${user.Api}/me/`;
    } else {
      request = `${user.Api}/users/${props.match.params.id}`;
    }
    const fetchData = async () => {
      const result = await axios.get(request, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: `Token ${user.userInfo.token}`,
        },
      });
      console.log(result.data);
      setUserData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ background: "rgba(244,244,244,0.9)" }}>
      {userData && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              "align-items": "center",
              margin: "3% 0 0 0",
            }}
          >
            <Header>
              <UserName
                style={{
                  background: "none",
                  "border-radius": "20px",
                  "font-size": "20px",
                  padding: "10%",
                  color: "#27ae60",
                  "font-weight": "bold",
                }}
              >
                {userData.username}
              </UserName>
            </Header>

            {props.match.params.id == user.userInfo.id && (
              <EditProfileButton
                style={{ "font-size": "20px", "white-space": "nowrap" }}
                to={`/edituser/${user.userInfo.id}`}
              >
                Edytuj użytkownika
              </EditProfileButton>
            )}
          </div>
          <UnorderedListProfile style={{ border: "none" }}>
            {props.match.params.id == user.userInfo.id && (
              <UnorderedFlexList
                style={{ border: "none", background: "rgba(255,255,255,0.8)" }}
              >
                <UserProfileItemRow style={{ display: "flex" }}>
                  <BorderText style={{ width: "50%" }}>
                    Adres e-mail:
                  </BorderText>{" "}
                  <p style={{ width: "50%" }}>
                    {userData.email || "nie podano"}
                  </p>
                </UserProfileItemRow>
                <UserProfileItemRow style={{ display: "flex" }}>
                  <BorderText style={{ width: "50%" }}>Wzrost:</BorderText>{" "}
                  <p style={{ width: "50%" }}>
                    {userData.height ? userData.height + "cm" : "nie podano"}
                  </p>
                </UserProfileItemRow>
                <UserProfileItemRow style={{ display: "flex" }}>
                  <BorderText style={{ width: "50%" }}>Wiek:</BorderText>
                  <p style={{ width: "50%" }}>{userData.age || "nie podano"}</p>
                </UserProfileItemRow>
                <UserProfileItemRow style={{ display: "flex" }}>
                  <BorderText style={{ width: "50%" }}>Waga:</BorderText>
                  <p style={{ width: "50%" }}>
                    {userData.weight ? userData.weight + "kg" : "nie podano"}
                  </p>
                </UserProfileItemRow>
                {userData.activity ? (
                  <UserProfileItemRow style={{ display: "flex" }}>
                    <BorderText style={{ width: "50%" }}>Aktywność:</BorderText>
                    <ActivityText activity={userData.activity} />
                    {/*<ProgressBar striped variant="success" now={60} />{*/}
                  </UserProfileItemRow>
                ) : (
                  <UserProfileItemRow style={{ display: "flex" }}>
                    <BorderText style={{ width: "50%" }}>Aktywność:</BorderText>
                    <p>Nie podano.</p>
                  </UserProfileItemRow>
                )}
              </UnorderedFlexList>
            )}
          </UnorderedListProfile>
          <h1>Twoje aktywności:</h1>
          <Contents />
        </div>
      )}
    </Container>
  );
};

export default Users;
