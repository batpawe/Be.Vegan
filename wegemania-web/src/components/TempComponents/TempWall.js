import React, { useState } from "react";
import { MainContainer } from "../../styles/WallStyle";
import RightPanel from "../GlobalComponents/RightPanel";
import Image from "../../images/restaurant.jpg";
import {
  ImageComponent,
  ElementContainer,
  Icon,
  Container,
  HoverContainer,
  HoverHeader,
  HoverText,
  ImageHoverComponent
} from "../../styles/TempStyle";
import PinIcon from "../../icons/VeganAppIcons/pin.svg";
import PostsIcon from "../../icons/VeganAppIcons/posts.svg";
import RecipesIcon from "../../icons/VeganAppIcons/recipes.svg";
import ReplacementsIcon from "../../icons/VeganAppIcons/replacements.svg";
import RestaurantsIcon from "../../icons/VeganAppIcons/restaurants.svg";
const Element = props => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ElementContainer
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <HoverContainer>
        {isHover ? (
          <div>
            <ImageHoverComponent src={Image} />
            <HoverHeader>Witaj</HoverHeader>
            <HoverText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </HoverText>
            <Icon src={PostsIcon} />
          </div>
        ) : (
          <div>
            <ImageComponent src={Image} />
            <Icon src={PostsIcon} />
          </div>
        )}
      </HoverContainer>
    </ElementContainer>
  );
};
const TempWall = () => {
  return (
    <MainContainer>
      <Container>
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
        <Element key={1} />
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default TempWall;
