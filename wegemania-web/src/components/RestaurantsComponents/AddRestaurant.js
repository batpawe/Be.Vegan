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
  SmallDiv
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import CloseImage from "../../images/close.svg";
import "../../App.css";
const AddRestaurant = () => {
  let time = [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null]
  ];
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  let closed = [false, false, false, false, false, false, false];
  const [isClosed, setIsClosed] = useState(closed);
  const [file, setFile] = useState(temp);
  const [markers, setMarkers] = useState([23, 23]);
  const [numberMenu, setNumberMenu] = useState(1);
  const tempArray = [""];
  const [menuArray, setMenuArray] = useState([]);
  const [timeArray, setTimeArray] = useState(time);
  const handleChange = (i, event) => {
    console.log(i);
    let temp = file;
    temp[i] = URL.createObjectURL(event.target.files[0]);
    setFile([...temp]);
  };
  const addMarker = e => {
    let temp = [e.latlng.lat, e.latlng.lng];
    setMarkers(temp);
  };
  //

  const handleMenu = e => {
    let temp = menuArray;
    for (var i = 0; i < numberMenu; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id] = e.target.value;
    setMenuArray(temp);
  };
  const handleTimeFirst = e => {
    let temp = timeArray;
    for (var i = 0; i < 7; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id][0] = e.target.value;
    setTimeArray(temp);
  };
  const handleTimeSecond = e => {
    let temp = timeArray;
    for (var i = 0; i < 7; i++) {
      if (temp[i] === undefined) {
        temp[i] = "";
      }
    }
    temp[e.target.id][1] = e.target.value;
    setTimeArray(temp);
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
  const Input = props => {
    if (isClosed[props.id] === true) {
      return (
        <div>
          <TextColumnInput
            type="time"
            id={props.id}
            value={timeArray[props.id][0]}
            onChange={e => {
              handleTimeFirst(e);
            }}
            disabled
          />
          <TextColumnInput
            type="time"
            id={props.id}
            value={timeArray[props.id][1]}
            onChange={e => {
              handleTimeSecond(e);
            }}
            disabled
          />
        </div>
      );
    } else {
      return (
        <div>
          <TextColumnInput
            type="time"
            id={props.id}
            value={timeArray[props.id][0]}
            onChange={e => {
              handleTimeFirst(e);
            }}
          />
          <TextColumnInput
            type="time"
            id={props.id}
            value={timeArray[props.id][1]}
            onChange={e => {
              handleTimeSecond(e);
            }}
          />
        </div>
      );
    }
  };
  const TimeButton = props => {
    if (props.close === true) {
      return (
        <AddItem
          id={props.id}
          onClick={e => {
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
          onClick={e => {
            setButton(e, true);
          }}
        >
          Zamknięta
        </AddItem>
      );
    }
  };
  const Days = props => {
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
        <SmallContainer>
          <Days i={i} />
          <SmallDiv>
            <Input key={i} id={i} />
            <TimeButton key={i} id={i} close={isClosed[i]} />
          </SmallDiv>
        </SmallContainer>
      );
    }
    return (
      <div>
        <InputLabel for="times">Godziny otwarcia:{temp}</InputLabel>
      </div>
    );
  };
  const nextMenuField = () => {
    let temp = numberMenu + 1;
    setNumberMenu(temp);
  };
  const prevMenuField = () => {
    let temp = numberMenu - 1;
    setNumberMenu(temp);
  };

  return (
    <Container>
      <h1
        style={{
          "font-size": 28,
          "text-align": "center",
          color: "#27752e",
          "font-weight": "bold"
        }}
      >
        Dodaj restaurację:
      </h1>
      <div
        style={{
          margin: "1% auto 1% auto",
          display: "flex",
          "flex-direction": "column",
          "text-align": "center"
        }}
      >
        <InputLabel for="name" style={{ "font-size": 26 }}>
          Nazwa:
        </InputLabel>
        <TextInput
          style={{ "font-size": 22 }}
          type="text"
          id="name"
          placeholder="Wprowadź nazwę restauracji"
        />
      </div>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "text-align": "center"
        }}
      >
        <InputLabel for="content" style={{ "font-size": 26 }}>
          Opis:
        </InputLabel>
        <TextArea
          style={{ margin: "1% auto 1% auto" }}
          id="content"
          placeholder="Podaj opis restauracji"
        />
      </div>
      <ColumnContainer
        style={{
          width: "100%",
          "text-align": "center",
          "justify-content": "center"
        }}
      >
        <TimeFields />
      </ColumnContainer>
      <InputLabel for="map">Podaj lokalizację restauracji ?</InputLabel>
      <Map
        id="map"
        center={[53.01379, 18.598444]}
        zoom={13}
        style={{ height: 300, "z-index": 0 }}
        onClick={e => {
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
            <Image src={file[0]} />
          </label>
          <input
            id="file-input-0"
            type="file"
            onChange={e => handleChange(0, e)}
          />
        </div>
      </ImagesContainer>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddRestaurant;
