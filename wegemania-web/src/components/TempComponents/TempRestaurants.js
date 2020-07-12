import React, { useState } from "react";
import { MainContainer } from "../../styles/WallStyle";
import {
  Container,
  RestaurantName,
  HeaderText,
  ContainerRestaurant,
  ImageRestaurant,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item
} from "../../styles/TempRestaurants";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/restaurant.jpg";

const TempRestaurants = props => {
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);
  const Paggination = props => {
    let no = props.no || 2;
    const handlePage = k => {
      let tmp = page;
      console.log(k);
      if (k == 1) {
        tmp[props.index] = 1;
      } else {
        tmp[props.index] = 0;
      }
      setPage([...tmp]);
    };
    const paggin = Array.from({ length: no }, (_, k) =>
      k == page[props.index] ? (
        <PagginationItem
          key={k}
          active={true}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      ) : (
        <PagginationItem
          key={k}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      )
    );
    return <PagginationContainer>{paggin}</PagginationContainer>;
  };
  const ContentController = props => {
    return (
      <ContainerRestaurant>
        <ImageRestaurant src={Image} style={{ width: "60%" }} />
        <ContentContainer style={{ width: "38%", background: "white" }}>
          <RestaurantName>Kolorowy Piec</RestaurantName>
          {console.log(page[props.index])}
          {page[props.index] == 0 ? (
            <div>
              <HeaderText>Godziny otwarcia:</HeaderText>
              <UnorderedList>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
                <Item>Poniedziałek: 10:00 - 20:00</Item>
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Lokalizacja:</HeaderText>
              <Map
                id="mapid"
                center={[53.009794, 18.591649]}
                zoom={12}
                style={{
                  width: 130,
                  height: 150,
                  "margin-left": 20,
                  "z-index": 0
                }}
              >
                <TileLayer
                  style={{ "font-size": 4 }}
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.009794, 18.591649]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerRestaurant>
    );
  };
  return (
    <MainContainer>
      <Container>
        <ContentController index={0} />
        <ContentController index={1} />
        <ContentController index={2} />
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default TempRestaurants;
