import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {
  Container,
  Button,
  TextInput,
  InputLabel,
  TextArea,
  Image,
  ImagesContainer,
  ColumnContainer,
  TextColumnInput,
  AddItem,
  SmallContainer,
  SecondColumn,
  SmallDiv,
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import CloseImage from "../../images/close.svg";
import AutoSuggest from "react-autosuggest";
import "../../styles/SuggestUserStyle.css";
import { NewNotifyContext } from "../../context/Notify";
const ValidateRestaurant = (props) => {
  const [deleyedRedirect, setDeleyedRedirect] = useState(false);
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [restaurantTitle, setRestaurantTitle] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  let time = [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ];
  const handleTimeFirst = (e) => {
    let temp = timeArray;
    for (var i = 0; i < 7; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    console.log(temp);
    console.log(e.target.value);
    console.log(temp[e.target.id][0]);
    temp[e.target.id][0] = e.target.value;
    setTimeArray([...temp]);
  };
  const handleTimeSecond = (e) => {
    let temp = timeArray;
    for (var i = 0; i < 7; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id][1] = e.target.value;
    setTimeArray([...temp]);
  };
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];

  let closed = [false, false, false, false, false, false, false];
  const [file, setFile] = useState(temp);
  const [markers, setMarkers] = useState([23, 23]);
  const [isClosed, setIsClosed] = useState(closed);
  const [timeArray, setTimeArray] = useState(time);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(null);
  const [myRestaurant, setMyRestaurant] = useState([]);
  useEffect(() => {
    const getFile = async (path) => {
      let response = await fetch(path);
      let data = await response.blob();
      let metadata = {
        type: "image/jpeg",
      };
      let file = new File([data], "test.jpg", metadata);
      return file;
    };
    const fetchData = async () => {
      await axios(`${user.Api}/restaurants/`)
        .then((res) => {
          res.data.map((date) => {
            if (date.id_moderator === user.userInfo.id) {
              setMyRestaurant(date);
              setRestaurantTitle(date.name);
              setRestaurantDescription(
                date.description.replace("\r\n\r\n", "\n").replace("\r\n", "\n")
              );
              const tempTime = date.hours.split("\r\n");
              const time = tempTime.map((time) => {
                return [
                  time.split(":", 1).toString(),
                  time.split(":").slice(1).join(":"),
                ];
              });
              let newTimeArray = [];
              console.log(time);
              time.map((t, index) => {
                if (t[1] !== " Nieczynne") {
                  t[1] = t[1].trim().split(" ");
                  newTimeArray.push(t[1]);
                } else {
                  let tempArr = ["00:00", "00:00"];
                  t[1] = tempArr;
                  let tempClose = isClosed;
                  tempClose[index] = true;
                  setIsClosed(tempClose);
                  newTimeArray.push(t[1]);
                }
              });
              setTimeArray([...newTimeArray]);
              setMarkers([date.latX, date.longY]);
              setCity(date.city);
              setStreet(date.street);
              setNumber(date.street_number);
              let temp = getFile(`${date.foto}`).then((res) => {
                return res;
              });
              temp.then((responses) => {
                console.log(responses);
                setFile([responses]);
              });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  const handleChange = (i, event) => {
    console.log(i);
    let temp = file;
    temp[i] = URL.createObjectURL(event.target.files[0]);
    setFile([...temp]);
  };
  const addMarker = (e) => {
    let temp = [e.latlng.lat, e.latlng.lng];
    setMarkers(temp);
  };
  const usersName = users.map((date) => {
    return date;
  });
  const getSuggestions = (value) => {
    return usersName.filter((user) => user.username.includes(value.trim()));
  };
  const setButton = (e, t) => {
    if (t === true) {
      let tmp = timeArray;
      tmp[e.target.id][0] = null;
      tmp[e.target.id][1] = null;
      setTimeArray(tmp);
    }
    let temp = isClosed;
    temp[e.target.id] = t;
    setIsClosed([...temp]);
  };
  const Input = (props) => {
    if (isClosed[props.id] === true) {
      return (
        <div style={{ display: "flex" }}>
          <TextColumnInput
            style={{ width: "100px" }}
            type="time"
            id={props.id}
            value={timeArray[props.id][0]}
            onInput={(e) => {
              handleTimeFirst(e);
            }}
            onClick={(e) => {
              let temp = timeArray;
              temp[e.target.id][1] = null;
              setTimeArray([...temp]);
            }}
            disabled
          />
          <TextColumnInput
            style={{ width: "100px" }}
            type="time"
            id={props.id}
            value={timeArray[props.id][1]}
            onInput={(e) => {
              handleTimeSecond(e);
            }}
            disabled
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <TextColumnInput
            style={{ width: "100px" }}
            type="time"
            id={props.id}
            value={timeArray[props.id][0]}
            onChange={(e) => {
              handleTimeFirst(e);
            }}
            onClick={(e) => {
              let temp = timeArray;
              if (temp[e.target.id][0] !== null) {
                temp[e.target.id][0] = null;
                setTimeArray([...temp]);
              }
            }}
          />
          <TextColumnInput
            style={{ width: "100px" }}
            type="time"
            id={props.id}
            value={timeArray[props.id][1]}
            onChange={(e) => {
              handleTimeSecond(e);
            }}
            onClick={(e) => {
              let temp = timeArray;
              if (temp[e.target.id][1] !== null) {
                temp[e.target.id][1] = null;
                setTimeArray([...temp]);
              }
            }}
          />
        </div>
      );
    }
  };
  const TimeButton = (props) => {
    if (props.close === true) {
      return (
        <AddItem
          id={props.id}
          onClick={(e) => {
            setButton(e, false);
          }}
        >
          Otwarta
        </AddItem>
      );
    } else {
      return (
        <AddItem
          id={props.id}
          onClick={(e) => {
            setButton(e, true);
          }}
        >
          Zamknięta
        </AddItem>
      );
    }
  };
  const Days = (props) => {
    if (props.i == 0) {
      return <span>Poniedziałek:</span>;
    }
    if (props.i == 1) return <span>Wtorek:</span>;
    if (props.i == 2) return <span>Środa:</span>;
    if (props.i == 3) return <span>Czwartek:</span>;
    if (props.i == 4) return <span>Piątek:</span>;
    if (props.i == 5) return <span>Sobota:</span>;
    if (props.i == 6) return <span>Niedziela:</span>;
  };
  const TimeFields = () => {
    const temp = [];
    for (var i = 0; i < 7; i++) {
      temp.push(
        <SmallContainer style={{ width: "100%" }}>
          <Days i={i} />
          <SmallDiv>
            <Input key={`${i}p`} id={i} />
            <TimeButton key={`${i}s`} id={i} close={isClosed[i]} />
          </SmallDiv>
        </SmallContainer>
      );
    }
    return (
      <div style={{ "text-align": "center" }}>
        <InputLabel for="times" style={{ "font-size": "22px" }}>
          Godziny otwarcia:{temp}
        </InputLabel>
      </div>
    );
  };
  const AddRestaurantFunction = async () => {
    let tempTimeText = "";
    for (var i = 0; i < timeArray.length; i++) {
      if (i == 0) {
        tempTimeText += "poniedziałek: ";
      }
      if (i == 1) {
        tempTimeText += "wtorek: ";
      }
      if (i == 2) {
        tempTimeText += "środa: ";
      }
      if (i == 3) {
        tempTimeText += "czwartek: ";
      }
      if (i == 4) {
        tempTimeText += "piątek: ";
      }
      if (i == 5) {
        tempTimeText += "sobota: ";
      }
      if (i == 6) {
        tempTimeText += "niedziela: ";
      }
      if (timeArray[i][0] !== null) {
        tempTimeText += timeArray[i][0] + " " + timeArray[i][1] + "\r\n";
      } else {
        tempTimeText += "Nieczynne\r\n";
      }
    }
    console.log(JSON.stringify(tempTimeText));
    let userIndex = null;
    await axios(`${user.Api}/users/`)
      .then((res) => {
        let i = 0;
        res.data.map((date) => {
          if (date.username == value && i == 0) {
            userIndex = date.id;
            i++;
          }
        });
      })
      .catch((err) => console.log(err));
    console.log(userIndex);
    console.log(markers);
    console.log(restaurantDescription);
    console.log(restaurantTitle);
    console.log(file);

    const data = new FormData();
    data.append("id", myRestaurant.id);
    data.append("id_moderator", myRestaurant.id_moderator);
    data.append("name", restaurantTitle);
    data.append("foto", file[0]);
    data.append("street", street);
    data.append("street_number", number);
    data.append("latX", markers[0]);
    data.append("longY", markers[1]);
    data.append("hours", tempTimeText);
    data.append("description", restaurantDescription.replace("\n", "\r\n"));
    const config = {
      method: "PUT",
      headers: {
        Accept: "application/json; charset=UTF-8",
        Authorization: `Token ${user.userInfo.token}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: data,
    };

    await fetch(`${user.Api}/restaurant/change/`, config)
      .then((res) => {
        console.log(res);
        res
          .text()
          .then((text) => {
            let json = JSON.parse(text);
            console.log(text);
            if (json.id_moderator) {
              notify.set("Pomyślnie edytowano restaurację.");
              setTimeout(() => {
                setDeleyedRedirect(true);
              }, 2000);
            } else {
              console.log(res);
              console.log(res.response);
              notify.set("Wystąpił nieoczekiwany błąd!");
            }
          })
          .catch((err) => {
            console.log(res);
            notify.set("Wystąpił nieoczekiwany błąd!");
          });
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
        notify.set("Wystąpił nieoczekiwany błąd!");
      });
  };
  return (
    <div
      style={{ margin: "7% auto 1% auto", background: "rgba(255,255,255,0.7)" }}
    >
      {console.log(myRestaurant)}
      <div style={{ margin: "3% 0 0 0 " }}>
        {deleyedRedirect && <Redirect to={`/restaurants`} />}
        <div>
          <h1
            style={{
              "font-size": "28px",
              "text-align": "center",
              color: "rgb(39,117,46)",
              "font-weight": "bold",
            }}
          >
            Dodaj restaurację
          </h1>
          <div>
            <label
              for="name"
              style={{
                margin: "2% auto",
                display: "flex",
                "flex-direction": "column",
                "text-align": "center",
              }}
            >
              <h2 style={{ "font-size": "26px" }}>Nazwa:</h2>
              <input
                value={restaurantTitle}
                onChange={(e) => setRestaurantTitle(e.target.value)}
                style={{
                  margin: "1% auto",
                  "font-size": "22px",
                  border: "1px solid black",
                  outline: "none",
                  padding: "1%",
                  width: "400px",
                }}
                type="text"
                id="name"
                placeholder="Wprowadź nazwę restauracji"
              />
            </label>
          </div>
          <div>
            <label
              for="description"
              style={{
                margin: "2% auto",
                display: "flex",
                "flex-direction": "column",
                "text-align": "center",
              }}
            >
              <h2 style={{ "font-size": "26px" }}>Opis:</h2>
              <textarea
                value={restaurantDescription}
                onChange={(e) => setRestaurantDescription(e.target.value)}
                style={{
                  margin: "1% auto",
                  "font-size": "22px",
                  border: "1px solid black",
                  outline: "none",
                  padding: "1%",
                  width: "80%",
                  resize: "none",
                  padding: "1%",
                }}
                type="text"
                id="description"
                placeholder="Wprowadź opis restauracji"
              />
            </label>
          </div>
        </div>
        <TimeFields />
        <div style={{ width: "100%", display: "flex", margin: "2% 0 0 0" }}>
          <label
            style={{ width: "100%", display: "flex", "align-items": "center" }}
            for="city"
          >
            <p style={{ margin: 0 }}>Miasto:</p>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              id="city"
              placeholder="Wprowadź nazwę miasta"
              style={{
                "font-size": "22px",
                margin: "1%",
                border: "1px solid black",
                outline: "none",
                padding: "1%",
              }}
              type="text"
            />
          </label>
          <label
            style={{ width: "100%", display: "flex", "align-items": "center" }}
            for="nameStreet"
          >
            <p style={{ margin: 0 }}>Nazwa uliczy:</p>
            <input
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              value={street}
              id="nameStreet"
              placeholder="Wprowadź nazwę ulicy"
              style={{
                "font-size": "22px",
                margin: "1%",
                border: "1px solid black",
                outline: "none",
                padding: "1%",
              }}
              type="text"
            />
          </label>
          <label
            style={{ width: "100%", display: "flex", "align-items": "center" }}
            for="numberStreet"
          >
            <p style={{ margin: 0 }}>Numer ulicy:</p>
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
              placeholder="Wprowadź numer ulicy"
              style={{
                "font-size": "22px",
                margin: "1%",
                border: "1px solid black",
                outline: "none",
                padding: "1%",
              }}
              type="text"
            />
          </label>
        </div>
        <Map
          id="map"
          center={[53.01379, 18.598444]}
          zoom={13}
          style={{
            height: 300,
            "z-index": 0,
            width: "90%",
            margin: "2% auto 2% auto",
          }}
          onClick={(e) => {
            addMarker(e);
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker key={`marker`} position={markers}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
        <ImagesContainer>
          <div className="image-upload">
            <label for="file-input-0">
              {file[0].name ? (
                <Image
                  style={{ width: "550px" }}
                  src={file[0].name ? URL.createObjectURL(file[0]) : file[0]}
                />
              ) : (
                <Image
                  src={file[0].name ? URL.createObjectURL(file[0]) : file[0]}
                />
              )}
            </label>
            <input
              id="file-input-0"
              type="file"
              onChange={(e) => handleChange(0, e)}
            />
          </div>
        </ImagesContainer>
        <div style={{ width: "100%", "text-align": "center" }}>
          <button
            onClick={() => {
              AddRestaurantFunction();
            }}
            style={{
              background: "#388E3C",
              margin: "1% auto 1% auto",
              color: "white",
              "text-align": "center",
              "font-size": "28px",
              border: "none",
            }}
          >
            Edytuj restaurację
          </button>
        </div>
      </div>
    </div>
  );
};
export default ValidateRestaurant;
