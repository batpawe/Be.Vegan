import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  EditProfileContainer,
  InputText,
  Button
} from "../../styles/UserProfile";
const EditUser = () => {
  const [activity, setActivity] = useState(0);
  return (
    <EditProfileContainer>
      <label for="login">Login:</label>
      <InputText id="login" type="text" />
      <label for="login">Mail:</label>
      <InputText id="email" type="text" />
      <label for="login">Hasło:</label>
      <InputText id="password" type="password" />
      <label for="login">Waga:</label>
      <InputText id="height" type="text" />
      <label for="login">Wzrost:</label>
      <InputText id="weight" type="text" />
      <label for="login">Wiek:</label>
      <InputText id="age" type="text" />
      <label for="login">Aktywność:</label>
      <InputText
        id="activity"
        type="number"
        max={100}
        onChange={e => setActivity(e.target.value)}
      />
      <ProgressBar
        style={{ width: 200, margin: "auto" }}
        striped
        variant="success"
        max={100}
        now={activity}
      />
      <Button type="submit">Edytuj profil</Button>
    </EditProfileContainer>
  );
};
export default EditUser;
