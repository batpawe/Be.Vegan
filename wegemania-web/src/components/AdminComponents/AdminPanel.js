import React, { useState } from "react";
import ReplacementAccept from "./ReplacementAccept";
import AddRestaurant from "./AddRestaurant";
import { AdminContainer } from "../../styles/MobileStyles";
const AdminPanel = (props) => {
  return (
    <AdminContainer>
      <div>
        <ReplacementAccept />
      </div>
    </AdminContainer>
  );
};
export default AdminPanel;
