import styled from "styled-components";
export const Container = styled.div`
  padding: 0 2% 2% 2%;
  align-content: flex-start;
  font-size: 17px;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  margin: 10vw 0 0 1%;
  width: 55%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ElementContainer = styled.div`
  background: white;
  margin: 1% 0 0 0;
  padding: 0.1%;
  height: 4%;
  align-items: flex-start;
  width: 46%;
  border: 1px solid black;
  text-align: center;
  display: flex;
  cursor: pointer;
`;
export const ImageComponent = styled.img`
  width: 96%;
`;
export const Icon = styled.img`
  width: 26px;
  position: absolute;
  top: 0;
  left: 92%;
  z-index: 100;
  filter: brightness(100%);
`;

export const HoverContainer = styled.div`
  position: relative;
  text-align: center;
  color: White;
`;
export const HoverHeader = styled.h1`
  font-size: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: 1px solid white;
`;
export const HoverText = styled.span`
  font-size: 12px;
  top: 10%;
  text-align: justify;
  width: 100%;
  left: 0;
  padding: 5%;
  position: absolute;
`;
export const ImageHoverComponent = styled.img`
  filter: brightness(50%);
  width: 96%;
`;
