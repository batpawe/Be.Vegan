import React from "react";
import { RecommendedRestauration } from "./RecommendedRestauration";
import { RecommendedEvent } from "./RecommendedEvent";
import { RecommendedPlace } from "./RecommendedPlace";
import { RecommendedRecipt } from "./RecommendedRecipt";
import { RecommendedTip } from "./RecommendedTip";
import { GlobalContainer } from "../../styles/GlobalStyle";
import {
  LocalContainer,
  UnorderedList,
  HeaderText,
  HyperLink,
  Image,
  BoldText,
} from "../../styles/GlobalStyle";
const RightPanel = (props) => {
  console.log(props.recommend);
  return (
    <GlobalContainer style={{ margin: 0 }}>
      {!props.recommend ? (
        <div>
          <RecommendedRestauration />
          <RecommendedRecipt />
          <RecommendedTip />
        </div>
      ) : (
        <div>
          <h1
            style={{
              padding: 0,
              color: "white",
              "border-radius": "20px",
              background: "#00a835",
              margin: "0 0 10px 0",
              "font-size": "25px",
              "text-align": "center",
            }}
          >
            Rekomendowane przepisy
          </h1>
          {props.recommend &&
            props.recommend.map((recom) => {
              return (
                <LocalContainer>
                  <UnorderedList>
                    <li>
                      <BoldText>Nazwa:</BoldText>
                      {recom.recipe_name}
                    </li>
                    <li>
                      <BoldText>Czas przygotowania:</BoldText>
                      {`${recom.time} minut`}
                    </li>
                    <li>
                      <HyperLink to={`/recipes/${recom.id}`}>
                        <Image src={recom.recipe_foto}></Image>{" "}
                      </HyperLink>
                    </li>
                  </UnorderedList>
                </LocalContainer>
              );
            })}
        </div>
      )}
    </GlobalContainer>
  );
};
export default RightPanel;
