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
import ShopImage from "../../images/shop.jpg";
export const RecommendedPlace = () => {
  return (
    <LocalContainer>
      <HeaderText> Polecane Miejsca :</HeaderText>
      <UnorderedList>
        <HyperLink to="/posts">
          <Item>
            <BoldText>Nazwa:</BoldText>Martket1
          </Item>
          <Item>
            <BoldText>Lokalizacja:</BoldText>
            <Map
              id="mapid"
              center={[53.009794, 18.591649]}
              zoom={12}
              style={{ width: 300, height: 200, "z-index": 0 }}
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
          <Item>
            <BoldText>Godziny otwarcia:</BoldText>8:00 - 20:00
          </Item>
          <Item>
            <Image src={ShopImage}></Image>
          </Item>
        </HyperLink>
      </UnorderedList>
      <UnorderedList>
        <HyperLink to="/posts">
          <Item>
            <BoldText>Nazwa:</BoldText>Martket1
          </Item>
          <Item>
            <BoldText>Lokalizacja:</BoldText>
            <Map
              id="mapid"
              center={[53.009794, 18.591649]}
              zoom={12}
              style={{ width: 300, height: 200, "z-index": 0 }}
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
          <Item>
            <BoldText>Godziny otwarcia:</BoldText>8:00 - 20:00
          </Item>
          <Item>
            <Image src={ShopImage}></Image>
          </Item>
        </HyperLink>
      </UnorderedList>
    </LocalContainer>
  );
};
