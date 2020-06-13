import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  EditProfileContainer,
  InputText,
  Button,
  InputsContainer,
  InputContainer,
  NumberInput,
} from "../../styles/UserProfile";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { NewNotifyContext } from "../../context/Notify";
const EditUser = () => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  let activityText = [
    "Brak aktywności, nie wykonuje żadnej aktywności sportowej, pracuje w pracy na stanowisku siedzącym, dojeżdżam do niej samochodem",
    "Mała aktywność, aktywności sportowe zdarzają się bardzo rzadko, do pracy chodzę pieszo, w pracy wykonuję lekką aktywność fizyczną",
    "Średnia aktywność, aktywność sportowa co najmniej raz w tygodniu, staram się być aktywnym przy codziennych obowiązkach (praca, sklep), w pracy wykonuje lekką aktywność fizyczną",
    " Duża aktywność, aktywność sportowa co najmniej 3 razy w tygodniu, aktywny przy codziennych obowiązkach, w pracy przerwy na rozciąganie i rozgrzewanie ciała",
    "Bardzo duża aktywność, aktywność sportowa codziennie, aktywny przy każdej możliwej okazji, w trakcie pracy aktywny lub robi przerwy na aktywność fizyczną",
  ];

  useEffect(() => {
    user.openPanel(false);
    var request = `${user.Api}/me/`;
    const fetchData = async () => {
      const result = await axios.get(request, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: `Token ${user.userInfo.token}`,
        },
      });
      setUserInfo({ ...result.data });
    };
    fetchData();
  }, []);
  const handleSuccess = () => {
    notify.set("Pomyślnie edytowano dane użytkownika.");
    setTimeout(() => {
      setDeleyedRedirect(true);
    }, 2000);
  };
  const sendRequest = (val) => {
    const fetchData = async () => {
      console.log(val.activity);
      console.log(parseInt(val.age));
      console.log(parseInt(val.height));
      console.log(parseInt(val.weight).toFixed(2));
      console.log(parseInt(val.activity));
      await axios
        .put(
          "http://veggies.ddns.net:8181/me/",
          {
            age: parseInt(val.age, 10),
            height: parseInt(val.height, 10),
            weight: parseInt(val.weight).toFixed(2),
            activity: parseInt(val.activity, 10),
          },
          {
            headers: {
              Accept: "application/json; charset=UTF-8",
              authorization: `Token ${user.userInfo.token}`,
              // 'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((res) => {
          console.log(res);

          if (res.status == 200) {
            handleSuccess();
          } else {
            notify.set("Wystąpił nieoczekiwany błąd");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
          notify.set("Wystąpił nieoczekiwany błąd");
        });
    };
    fetchData();
  };
  return (
    <EditProfileContainer style={{ background: "rgba(244,244,244,0.9)" }}>
      {deleyedRedirect && <Redirect to={`/users/${user.userInfo.id}`} />}
      {userInfo.username && (
        <Formik
          initialValues={{
            username: userInfo.username || "",
            password: "",
            repeatPassword: "",
            email: userInfo.email || "",
            height: userInfo.height || 0,
            weight: userInfo.weight || 0,
            age: userInfo.age || 0,
            activity: userInfo.activity || 0,
          }}
          onSubmit={(values) => {
            sendRequest(values);
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .min(5, "Podana nazwa użytkownika jest za krótka.")
              .max(15, "Podana nazwa użytkownika jest za długa"),
            password: Yup.string()
              .min(5, "Podane hasło jest za krótkie.")
              .max(15, "Podane hasło jest za długie"),
            repeatPassword: Yup.string().oneOf(
              [Yup.ref("password")],
              "Podane hasła nie pasują do siebie"
            ),
            email: Yup.string().email(),
            height: Yup.number()
              .min(10, "Podany wzrost jest niepoprawna")
              .max(250, "Poprawny wzrost jest niepoprawna"),
            weight: Yup.number()
              .min(10, "Podana waga jest niepoprawna")
              .max(400, "Podana waga jest niepoprawna"),
            age: Yup.number()
              .min(13, "Podany wiek jest niepoprawny")
              .max(120, "Podany wiek jest niepoprawny"),
            activity: Yup.number()
              .min(0, "Liczba powinna być przedziale od 0 do 4")
              .max(4, "Liczba powinna być przedziale od 0 do 4"),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors[Object.keys(errors)[0]]}
                </div>
              )}
              <InputsContainer>
                <InputContainer>
                  <label for="login">Login:</label>
                  <InputText
                    id="login"
                    type="text"
                    value={values.username}
                    onChange={handleChange("username")}
                  />
                </InputContainer>{" "}
                <InputContainer>
                  <label for="password">
                    Wprowadź aktualne hasło do weryfikacji:
                  </label>
                  <InputText
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange("password")}
                  />
                </InputContainer>
              </InputsContainer>
              <InputsContainer>
                <InputContainer>
                  <label for="repeatPassword">
                    Powtórz aktualne hasło do weryfikacji:
                  </label>
                  <InputText
                    id="repeatPassword"
                    type="password"
                    value={values.repeatPassword}
                    onChange={handleChange("repeatPassword")}
                  />
                </InputContainer>{" "}
                <InputContainer>
                  <label for="weight">Waga:</label>
                  <InputText
                    id="weight"
                    type="text"
                    value={values.weight}
                    onChange={handleChange("weight")}
                  />
                </InputContainer>
              </InputsContainer>
              <InputsContainer>
                <InputContainer>
                  <label for="height">Wzrost:</label>
                  <InputText
                    id="height"
                    type="text"
                    value={values.height}
                    onChange={handleChange("height")}
                  />
                </InputContainer>

                <InputContainer>
                  <label for="age">Wiek:</label>
                  <NumberInput
                    id="age"
                    type="text"
                    value={values.age}
                    onChange={handleChange("age")}
                  />
                </InputContainer>
              </InputsContainer>
              <InputsContainer>
                <div
                  style={{
                    display: "flex",
                    "flex-direction": "column",
                    width: "46%",
                  }}
                >
                  <label for="activity">Aktywność:</label>

                  <p>{activityText[values.activity]}</p>
                  {/*}
                <NumberInput
                  id="activity"
                  type="number"
                  max={100}
                  value={values.activity}
                  onChange={handleChange("activity")}
                />{*/}
                  <select
                    id="activity"
                    onChange={handleChange("activity")}
                    style={{ width: "100%" }}
                  >
                    {userInfo.activity !== 0 ? (
                      <option value={0}>Brak aktywności</option>
                    ) : (
                      <option value={0} selected="selected">
                        Brak aktywności
                      </option>
                    )}
                    {userInfo.activity !== 1 ? (
                      <option value={1}>Mała aktywność</option>
                    ) : (
                      <option value={1} selected="selected">
                        Mała aktywność
                      </option>
                    )}
                    {userInfo.activity !== 2 ? (
                      <option value={2}>Średnia aktywność</option>
                    ) : (
                      <option value={2} selected="selected">
                        Średnia aktywność
                      </option>
                    )}
                    {userInfo.activity !== 3 ? (
                      <option value={3}>Duża aktywność</option>
                    ) : (
                      <option value={3} selected="selected">
                        Duża aktywność
                      </option>
                    )}
                    {userInfo.activity !== 4 ? (
                      <option value={4}>Bardzo duża aktywność</option>
                    ) : (
                      <option value={4} selected="selected">
                        Bardzo duża aktywność
                      </option>
                    )}
                  </select>
                  {/*}
                <ProgressBar
                  style={{ width: 200, border: "1px solid black" }}
                  striped
                  variant="success"
                  max={100}
                  now={values.activity}
                />
                {*/}
                </div>
              </InputsContainer>
              <InputsContainer>
                <Button type="submit">Edytuj profil</Button>
              </InputsContainer>
            </form>
          )}
        </Formik>
      )}
    </EditProfileContainer>
  );
};
export default EditUser;
