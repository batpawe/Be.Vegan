import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextEffect } from "../style/TextBlockStyle";
const TextBlock = () => {
  const ApiLink = "http://127.0.0.1:8000/";
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(ApiLink).then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Container>
      {data && (
        <div>
          Witaj <TextEffect>{data.users}</TextEffect>
        </div>
      )}
    </Container>
  );
};
export default TextBlock;
