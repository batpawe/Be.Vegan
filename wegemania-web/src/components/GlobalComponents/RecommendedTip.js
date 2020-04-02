import { users } from "../../temp/users";
import React, { useState, useEffect } from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  BoldItem,
  Item
} from "../../styles/GlobalStyle";
import axios from "axios";
export const RecommendedTip = () => {
  const [curiosities, setCuriosities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/curiosities/")
        .then(res => {
          let temp = [];
          for (var i = 0; i < 2; i++) {
            temp.push(res.data[Math.floor(Math.random() * res.data.length)]);
          }
          setCuriosities(temp);
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
        Dzisiejsze Ciekawostki :
      </HeaderText>
      {curiosities &&
        curiosities.map(curiosit => {
          return (
            <UnorderedList>
              <Item>{curiosit.text}</Item>
            </UnorderedList>
          );
        })}
    </LocalContainer>
  );
};
