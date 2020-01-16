import React, { useState, useEffect, useContext } from "react";
import {
  PostForm,
  FormButton,
  InputWrapper,
  TextField,
  TextArea
} from "../../styles/PostStyle";
import { Redirect } from "react-router-dom";
import { NewLoginInfo } from "../../context/LoginInfo";
import axios from "axios";
const GoPostsPage = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimeToRedirect(true), 1200);
  }, []);

  return <div>{timeToRedirect && <Redirect to="/wall" />}</div>;
};
const AddPost = () => {
  const user = useContext(NewLoginInfo);
  const [userid, setUserId] = useState();
  const [tempPost, setPost] = useState([]);
  const [isError, setError] = useState(undefined);

  const publicPost = () => {
    const newPost = {
      idposts: 0,
      tytul: tempPost.subject,
      content: tempPost.content,
      wynik: 100,
      autor: userid
    };

    axios
      .post("http://localhost:3001/posts", newPost)
      .then(res => {
        setError(false);
      })
      .catch(error => {
        setError(true);
      });

    console.log(newPost);
  };
  const newSubject = event => {
    setPost({
      subject: event.target.value
    });
  };
  const newContent = event => {
    setPost({
      ...tempPost,
      content: event.target.value
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3001/users/${user.username}`
      );
      return result.data;
    };
    fetchData().then(res => {
      setUserId(res[0].idusers);
    });
  }, [user.username]);
  return (
    <PostForm>
      {isError === false && (
        <div>
          <p className="successMessage">Udało się dodać post</p>
          <GoPostsPage />
        </div>
      )}
      {isError === true && (
        <p className="errorMessage">Nie udało się dodać postu.</p>
      )}
      <InputWrapper>
        <label for="subject">Temat:</label>
        <TextField
          className={isError === true && "TextFieldError"}
          placeholder="Wpisz temat posta"
          type="text"
          id="subject"
          onChange={newSubject}
          defaultValue=""
          value={tempPost.subject}
        />
      </InputWrapper>
      <InputWrapper>
        <label for="content">Treść:</label>
        <TextArea
          className={isError === true && "TextFieldError"}
          placeholder="Wpisz treść posta"
          type="text"
          id="content"
          onChange={newContent}
          value={tempPost.content}
        />
      </InputWrapper>
      <FormButton type="button" value="Opublikuj" onClick={publicPost} />
    </PostForm>
  );
};
export default AddPost;
