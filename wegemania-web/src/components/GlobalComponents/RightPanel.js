import React from "react";
import { RecommendedRestauration } from "./RecommendedRestauration";
import { RecommendedEvent } from "./RecommendedEvent";
import { RecommendedPlace } from "./RecommendedPlace";
import { RecommendedRecipt } from "./RecommendedRecipt";
import { RecommendedTip } from "./RecommendedTip";
import { GlobalContainer } from "../../styles/GlobalStyle";
const RightPanel = () => {
  return (
    <GlobalContainer>
      <RecommendedRestauration />
      <RecommendedEvent />
      <RecommendedPlace />
      <RecommendedRecipt />
      <RecommendedTip />
    </GlobalContainer>
  );
};
export default RightPanel;
