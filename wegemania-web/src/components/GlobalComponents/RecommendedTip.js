import { users } from "../../temp/users";
import React, { useState, useEffect } from "react";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  BoldItem,
  Item,
} from "../../styles/GlobalStyle";
import axios from "axios";
export const RecommendedTip = () => {
  const [curiosities, setCuriosities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://veggiesapp.herokuapp.com/curiosities/")
        .then((res) => {
          let temp = [];
          let randArray = [];
          for (var i = 0; i < res.data.length; i++) {
            randArray.push(i);
          }
          let getUniqueRandomNumbers = (n) => {
            let set = new Set();
            while (set.size < n) set.add(Math.floor(Math.random() * n));
            return Array.from(set);
          };

          let result = getUniqueRandomNumbers(randArray.length).map(
            (x) => randArray[x]
          );

          temp.push(res.data[result[0]]);
          temp.push(res.data[result[1]]);

          setCuriosities(temp);
        })
        .catch((err) => {
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
          margin: "1% auto 1% auto",
        }}
      >
        Dzisiejsze Ciekawostki :
      </HeaderText>
      {curiosities &&
        curiosities.map((curiosit) => {
          return (
            <UnorderedList>
              <Item>{curiosit.text}</Item>
            </UnorderedList>
          );
        })}
    </LocalContainer>
  );
};
