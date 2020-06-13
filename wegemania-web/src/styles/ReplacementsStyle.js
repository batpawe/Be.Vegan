import styled from "styled-components";
export const Image = styled.img`
  width: 150px;
  border: 1px solid black;
  height: 100px;
`;
export const ReplacementsContainer = styled.div`
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  height: 20%;
  @media (max-width: 1400px) {
    height: 15%;
  }
`;
export const Item = styled.li`
  background: ${props => (props.select ? "#66BB6A" : "none")};
  cursor: pointer;
`;
