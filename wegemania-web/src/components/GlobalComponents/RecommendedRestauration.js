import React from "react";
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
export const RecommendedRestauration = () => {
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
      <UnorderedList style={{ padding: 0 }}>
        <HyperLink to="/posts">
          <Item style={{ "text-align": "center" }}>
            <BoldText>Nazwa:</BoldText>Restauracja1
          </Item>
          <Item style={{ "text-align": "center" }}>
            <BoldText>Godziny otwarcia:</BoldText>8:00 - 20:00
          </Item>
          <Item style={{ "text-align": "center" }}>
            <BoldText>Lokalizacja:</BoldText>
            <Map
              id="mapid"
              center={[53.009794, 18.591649]}
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
              <Marker position={[53.009794, 18.591649]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </Item>
          <Item style={{ "text-align": "center" }}>
            <Image src={RestaurantImage}></Image>
          </Item>
        </HyperLink>
      </UnorderedList>
      <UnorderedList style={{ padding: 0 }}>
        <HyperLink to="/posts">
          <Item style={{ "text-align": "center" }}>
            <BoldText>Nazwa:</BoldText>Restauracja1
          </Item>
          <Item style={{ "text-align": "center" }}>
            <BoldText>Godziny otwarcia:</BoldText>8:00 - 20:00
          </Item>
          <Item style={{ "text-align": "center" }}>
            <BoldText>Lokalizacja:</BoldText>
            <Map
              id="mapid"
              center={[53.009794, 18.591649]}
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
              <Marker position={[53.009794, 18.591649]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </Item>
          <Item style={{ "text-align": "center" }}>
            <Image src={RestaurantImage}></Image>
          </Item>
        </HyperLink>
      </UnorderedList>
    </LocalContainer>
  );
};
