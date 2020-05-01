import React, { useEffect, useState, useContext } from "react";
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
const EditRestaurant = (props) => {
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
      await axios(`${user.Api}/restaurants/${props.match.params.id}/`)
        .then((res) => {
          res.data.map((date) => {
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
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  });
};
export default EditRestaurant;
