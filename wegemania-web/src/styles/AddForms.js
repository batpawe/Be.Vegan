import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 1%;
  min-width: 82%;
  width: 82%;
  border-radius: 25px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  position: relative;
  @media (max-width: 1400px) {
    height: 500px;
    margin: 8% auto auto auto;
  }
  @media (min-width: 1401px) {
    margin: 10% auto auto auto;
    height: 600px;
  }
`;
export const Button = styled.button`
  padding: 1%;
  color: white;
  font-size: 20px;
  border: 1px solid black;
  min-width: 40%;
  margin: 5% auto auto auto;
  margin: 1% auto auto auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #2c8434;
  cursor: pointer;
  :hover {
    background: #2f8b2e;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const InputLabel = styled.label`
  font-weight: bold;
  margin: 5% 0 0 0;
`;
export const TextInput = styled.input`
  border: 1px solid black;
  outline: none;
  padding: 1%;
  width: 400px;
  font-size: 22px;
`;
export const TextArea = styled.textarea`
  outline: none;
  width: 80%;
  font-size: 22px;
  resize: none;
  border: 1px solid black;
  padding: 1%;
`;
export const Image = styled.img`
  width: 180px;
  display: block;
  cursor: pointer;
`;
export const ImagesContainer = styled.div`
  margin: 5% auto 0 auto;
  display: flex;
  font-size: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 0 0 0;
`;
export const TextColumnInput = styled.input`
  outline: none;
  border: 1px solid black;
  padding: 1%;
  margin: 1% 0 0 0;
`;
export const AddItem = styled.button`
  outline: none;
  width: 125px;
  border: 1px solid black;
  background: #2c8434;
  color: white;
  display: block;
  :hover {
    background: #2f8b2e;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
  margin: 1% auto auto auto;
  font-size: 20px;
`;
export const SmallContainer = styled.div`
  display: flex;
  margin: 1% auto 0 auto;
  min-width: 400px;
  justify-content: space-between;
  align-items: center;
`;
export const SecondColumn = styled.div`
  margin: 1% 0 0 0;
  align-items: center;
  display: flex;
  min-width: 600px;
  flex-direction: column;
`;
export const SmallDiv = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;
export const ReplacementsContainer = styled.div`
  display: flex;
`;
export const ReplacementContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100vw;
`;
export const ReplacementImage = styled.img`
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
`;
export const RecplacementsLabel = styled.label`
  margin: 5% auto auto auto;
  width: 700px;
  align-items: center;
`;
export const ReciptLabel = styled.label`
  margin: 5% auto auto auto;
  text-align: center;
  width: 600px;
  align-items: center;
`;
export const SelectType = styled.select`
  border: 1px solid black;
  outline: none;
  font-size: 20px;
  margin: 1% 0 0 0;
  box-sizing: border-box;
  line-height: 3;
  height: 41px;
  display: block;
`;
export const MethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0 0 0;
`;
export const TextAreaMethod = styled.textarea`
  outline: none;
  resize: none;
  border: 1px solid black;
  padding: 1%;

  min-width: 500px;
`;
export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0 0 0;
`;
export const HighlightText = styled.div`
  border: 1px solid black;
  padding: 1%;
  margin: 1% 0 0 0;
`;
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 1% 0 0 0;
  flex-direction: column;
  text-align: center;
`;
export const TextContainer = styled.div`
  width: 300px;
`;
export const ErrorText = styled.div`
  color: red;
`;
export const AddRecipeFooterItem = styled.li`
  background: ${(props) => (props.select ? "#32CD32" : "white")};
  color: ${(props) => (props.select ? "#32CD32" : "white")};
  border: 1px solid black;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-size: 0;
  cursor: pointer;
`;
export const NewInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NewInputLabel = styled.label`
  font-size: 22px;
  color: #388c38;
  font-weight: bold;
  margin: 0;
`;
export const NewColumnContainer = styled.div`
  width: 100%;
  height: 90%;
  @media (min-width: 1400px) {
    height: 100%;
  }
`;
export const AddImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 1400px) {
    height: 260px;
  }
`;
export const MainContainerAddRecip = styled.div`
  width: 100%;
  display: flex;
  height: 95%;
  @media (max-width: 1400px) {
    height: 90%;
  }
`;
export const ImageRecipeContainer = styled.div`
  border: 1px solid black;
  height: 300px;
  margin: 4%;
  @media (max-width: 1400px) {
    height: 220px;
  }
`;
export const SpanDescription = styled.span`
  @media (max-width: 1400px) {
    white-space: pre-line;
  }
  display: block;
  white-space: pre;
  line-height: 1em;
  height: 100%;
  overflow: auto;
  padding: 1.5%;
`;
