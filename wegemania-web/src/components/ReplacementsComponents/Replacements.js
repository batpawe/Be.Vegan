import React, { useState } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import { ReplacementsContainer, Item } from "../../styles/ReplacementsStyle";
import { Scrollbars } from "react-custom-scrollbars";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
/*
     <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                */
const Replacements = props => {
  const [selected, setSelected] = useState(0);
  const items = [];
  for (var i = 0; i < 20; i++) {
    items.push(
      <Item
        id={i}
        onClick={e => {
          setSelected(e.target.id);
          console.log(e.target.id);
        }}
        select={selected == i}
      >
        test
      </Item>
    );
  }
  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div>
            <SearchInput
              type="text"
              id="ajax"
              list="json-datalist"
              placeholder="Wprowadź nazwę produktu"
            />
            <datalist id="json-datalist">
              <option value="HTML" />
              <option value="CSS" />
              <option value="JavaScript" />
              <option value="Java" />
              <option value="Ruby" />
              <option value="PHP" />
              <option value="Go" />
              <option value="Erlang" />
              <option value="Python" />
              <option value="C" />
              <option value="C#" />
              <option value="C++" />
            </datalist>
          </div>
          <SearchButton style={{ width: "200px", "font-size": "18px" }}>
            Wyszukaj
          </SearchButton>
          <AddPostPageLink
            style={{
              width: "250px",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "font-size": "18px"
            }}
            to="/addreplacement"
          >
            Dodaj zamiennik
          </AddPostPageLink>
        </SearchPanel>
        <ReplacementsContainer>
          <ul
            style={{
              "list-style-type": "none",
              "font-size": "20px",
              padding: 0,
              margin: 0,
              overflow: "auto",
              width: "20%",
              "max-height": "100%",
              "text-align": "center"
            }}
          >
            {items}
          </ul>
          <ul
            style={{
              "list-style-type": "none",
              "font-size": "20px",
              padding: 0,
              margin: 0,
              overflow: "auto",
              "max-height": "100%",
              width: "80%"
            }}
          >
            <ul
              style={{
                "border-bottom": "1px solid black",
                margin: 0,
                padding: 0,
                "list-style-type": "none"
              }}
            >
              <li
                style={{
                  padding: "1%",
                  "text-align": "center",
                  "font-size": "22px",
                  display: "block",
                  background: "#00a835",
                  width: "40%",
                  "font-weight": "bold",
                  margin: "1% auto 1% auto",
                  "border-radius": "25px",
                  color: "white"
                }}
              >
                Nazwa
              </li>
              <li style={{ padding: "2%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </li>
            </ul>
            <ul
              style={{
                margin: "1% 0 1% 0",
                padding: 0,
                "list-style-type": "none"
              }}
            >
              <li
                style={{
                  padding: "1%",
                  "text-align": "center",
                  "font-size": "16px",
                  display: "block",
                  background: "#00a835",
                  width: "30%",
                  "font-weight": "bold",
                  margin: "1% auto 1% auto",
                  "border-radius": "25px",
                  color: "white"
                }}
              >
                Nazwa
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Kaloryczność:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Proteiny:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Tłuszcz:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Węglowodany:</p>
                <p style={{ width: "10%" }}> 100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Celuloza:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li>
                <img
                  style={{
                    width: "330px",
                    margin: "1% auto 1% auto",
                    display: "block"
                  }}
                  src={Image}
                />
              </li>
            </ul>
            <ul
              style={{
                margin: "1% 0 1% 0",
                padding: 0,
                "list-style-type": "none"
              }}
            >
              <li
                style={{
                  padding: "1%",
                  "text-align": "center",
                  "font-size": "16px",
                  display: "block",
                  background: "#00a835",
                  width: "30%",
                  "font-weight": "bold",
                  margin: "1% auto 1% auto",
                  "border-radius": "25px",
                  color: "white"
                }}
              >
                Nazwa
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Kaloryczność:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Proteiny:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Tłuszcz:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Węglowodany:</p>
                <p style={{ width: "10%" }}> 100</p>
              </li>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  "justify-content": "space-evenly"
                }}
              >
                <p style={{ width: "20%" }}>Celuloza:</p>
                <p style={{ width: "10%" }}>100</p>
              </li>
              <li>
                <img
                  style={{
                    width: "330px",
                    margin: "1% auto 1% auto",
                    display: "block"
                  }}
                  src={Image}
                />
              </li>
            </ul>
          </ul>
        </ReplacementsContainer>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Replacements);
