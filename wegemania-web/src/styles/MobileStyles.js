import styled from "styled-components";
export const AdminContainer = styled.div`
  @media (max-width: 1400px) {
    margin: 10% auto 0 auto;
  }
  margin: 5% auto 0 auto;
  width: 90%;
  padding: 1%;
  background: rgba(255, 255, 255, 0.8);
`;
export const WallContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1%;
`;
export const ElementContainerMobile = styled.div`
  position: relative;

  width: 40%;

  margin: 1% 0 1% 0;
`;
export const ImageElement = styled.img`
  cursor: pointer;
  @media (min-width: 1400px) {
    width: 300px;
  }
  @media (max-width: 1401px) {
    width: 200px;
  }
`;
export const PostsContainer = styled.div`
  width: 100%;
  justify-content: "flex-start";
  margin: 0;
`;
export const MobileContainer = styled.div`
  height: 300px;
  margin: 0;
  width: 100%;
  display: flex;
`;
export const ScrollContainer = styled.div`
  @media (min-width: 1400px) {
    max-height: 380px;
  }
  max-height: 236px;
  overflow: auto;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 6% 0 0 0;
  font-size: 18px;
  @media (max-width: 1400px) {
    font-size: 12px;
  }
`;
