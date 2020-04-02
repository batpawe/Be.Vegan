import React, { useState, useEffect } from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  HyperLink,
  Image,
  BoldText,
  Item
} from "../../styles/GlobalStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RestaurantImage from "../../images/restaurant.jpg";
import axios from "axios";
var moment = require("moment");
export const RecommendedRestauration = () => {
  const [restaurations, setRestaurations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/restaurants/")
        .then(res => {
          setRestaurations(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <LocalContainer>
      <HeaderText
        style={{
          "text-align": "center",
          background: "#00a835",
          "border-radius": "20px",
          color: "white",
          padding: "1%",
          margin: "1% auto 1% auto"
        }}
      >
        Polecane Restauracje :
      </HeaderText>
      {restaurations &&
        restaurations.map((restaurant, index) => {
          let hours = restaurant.hours.split("\r\n");
          let today = moment().day();
          let hour = hours[moment().day()];
          if (index < 2) {
            return (
              <UnorderedList style={{ padding: 0 }}>
                <HyperLink to="/posts">
                  <Item style={{ "text-align": "center" }}>
                    <BoldText>Nazwa:</BoldText>
                    {restaurant.name}
                  </Item>
                  <Item style={{ "text-align": "center" }}>
                    <BoldText>Godziny otwarcia:</BoldText>
                    {hour}
                  </Item>
                  <Item style={{ "text-align": "center" }}>
                    <BoldText>Lokalizacja:</BoldText>
                    <Map
                      id="mapid"
                      center={[restaurant.latX, restaurant.longY]}
                      zoom={12}
                      style={{
                        width: 300,
                        height: 200,
                        "z-index": 0,
                        margin: "1% auto 1% auto"
                      }}
                    >
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[restaurant.latX, restaurant.longY]}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </Map>
                  </Item>
                  <Item style={{ "text-align": "center" }}>
                    <Image src={restaurant.foto}></Image>
                  </Item>
                </HyperLink>
              </UnorderedList>
            );
          }
        })}
    </LocalContainer>
  );
};
