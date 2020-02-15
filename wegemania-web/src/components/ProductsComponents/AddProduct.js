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
  ImagesContainer
} from "../../styles/AddForms";
import UploadImage from "../../images/upload.png";
import "../../App.css";
const AddProduct = () => {
  const user = useContext(NewLoginInfo);
  let temp = [UploadImage, UploadImage, UploadImage, UploadImage];
  const [file, setFile] = useState(temp);
  const [markers, setMarkers] = useState([23, 23]);
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
  return (
    <Container>
      <InputLabel for="name">Nazwa:</InputLabel>
      <TextInput type="text" id="name" placeholder="Wprowadź nazwę produktu" />
      <InputLabel for="map">Gdzie można kupić produkt ?</InputLabel>
      <Map
        id="map"
        center={[51.505, -0.09]}
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
        <div className="image-upload">
          <label for="file-input-1">
            <Image src={file[1]} />
          </label>
          <input
            id="file-input-1"
            type="file"
            onChange={e => handleChange(1, e)}
          />
        </div>
        <div className="image-upload">
          <label for="file-input-2">
            <Image src={file[2]} />
          </label>
          <input
            id="file-input-2"
            type="file"
            onChange={e => handleChange(2, e)}
          />
        </div>
        <div className="image-upload">
          <label for="file-input-3">
            <Image src={file[3]} />
          </label>
          <input
            id="file-input-3"
            type="file"
            onChange={e => handleChange(3, e)}
          />
        </div>
      </ImagesContainer>
      <Button>Dodaj post</Button>
    </Container>
  );
};
export default AddProduct;
