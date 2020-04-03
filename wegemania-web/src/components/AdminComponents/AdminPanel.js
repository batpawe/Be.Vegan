import React, { useState } from "react";
import ReplacementAccept from "./ReplacementAccept";
import AddRestaurant from "./AddRestaurant";
import { AdminContainer } from "../../styles/MobileStyles";
const AdminPanel = props => {
  const [select, setSelect] = useState(0);
  return (
    <AdminContainer>
      <div>
        <ul
          style={{
            "list-style-type": "none",
            padding: 0,
            margin: 0,
            display: "flex",
            "justify-content": "space-around"
          }}
        >
          <li>
            <button
              onClick={() => setSelect(0)}
              style={{
                background: "#27ae60",
                border: "none",
                color: "white",
                padding: "1%",
                "font-size": "22px",
                "white-space": "nowrap",
                "text-align": "center"
              }}
            >
              Dodaj restaurację
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelect(1)}
              style={{
                background: "#27ae60",
                border: "none",
                padding: "1%",
                "white-space": "nowrap",
                color: "white",
                "font-size": "22px",
                "text-align": "center"
              }}
            >
              Weryfikuj zamiennik
            </button>
          </li>
        </ul>
      </div>
      <div>{select == 0 ? <AddRestaurant /> : <ReplacementAccept />}</div>
    </AdminContainer>
  );
};
export default AdminPanel;
