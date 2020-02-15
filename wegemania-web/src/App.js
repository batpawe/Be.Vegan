import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/LoginComponents/Login";
import Register from "./components/LoginComponents/Register";
import Wall from "./components/WallComponents/Wall";
import Reciptes from "./components/ReciptesComponents/Reciptes";
import Restaurants from "./components/RestaurantsComponents/Restaurants";
import Products from "./components/ProductsComponents/Products";
import Replacements from "./components/ReplacementsComponents/Replacements";
import Users from "./components/UsersComponents/Users";
import EditUser from "./components/UsersComponents/EditUser";
import Posts from "./components/PostsComponents/Posts";
import About from "./components/About";
import Header from "./components/LoginComponents/MenuLogin";
import AddPost from "./components/PostsComponents/AddPost";
import { Container } from "./styles/LoginStyle";
import { createGlobalStyle } from "styled-components";
import { ContentContainer } from "./styles/PostStyle";
import { NewLoginInfo } from "./context/LoginInfo";
import { NewNotifyContext } from "./context/Notify";
import AcceptProducts from "./components/AdminComponents/AcceptProducts";
import AcceptReplacements from "./components/AdminComponents/AcceptReplacements";
import AcceptRestaurations from "./components/AdminComponents/AcceptRestaurations";
import AdminComponent from "./components/AdminComponents/AdminComponent";
import NotificationPosts from "./components/AdminComponents/NotificationPosts";
import NotificationProducts from "./components/AdminComponents/NotificationProducts";
import NotificationReciptes from "./components/AdminComponents/NotificationReciptes";
import NotificationReplacements from "./components/AdminComponents/NotificationReplacements";
import NotificationRestaurations from "./components/AdminComponents/NotificationRestaurations";
import AddProduct from "./components/ProductsComponents/AddProduct";
import AddRecipt from "./components/ReciptesComponents/AddRecipt";
import AddReplacement from "./components/ReplacementsComponents/AddReplacement";
import AddRestaurant from "./components/RestaurantsComponents/AddRestaurant";
import "bootstrap/dist/css/bootstrap.min.css";
import Notify from "./components/Notify";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  body{
    font-family: 'Titillium Web', sans-serif
  }
`;

const App = props => {
  const notify = useContext(NewNotifyContext);
  const user = useContext(NewLoginInfo);
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Header /> <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Notify val={notify.val} />
        {user.username !== "" ? (
          <ContentContainer>
            <Route path="/about" component={About} />
            <Route path="/wall" component={Wall} />
            <Route path="/posts" component={Posts} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/products" component={Products} />
            <Route path="/reciptes" component={Reciptes} />
            <Route path="/replacements" component={Replacements} />
            <Route path="/users/:id" component={Users} />
            <Route path="/edituser/:id" component={EditUser} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/addrecipt" component={AddRecipt} />
            <Route path="/addreplacement" component={AddReplacement} />
            <Route path="/addrestaurant" component={AddRestaurant} />
            <Route path="/acceptproducts" component={AcceptProducts} />
            <Route path="/acceptreplacements" component={AcceptReplacements} />
            <Route
              path="/acceptrestaurations"
              component={AcceptRestaurations}
            />
            <Route path="/admincomponent" component={AdminComponent} />
            <Route path="/notificationposts" component={NotificationPosts} />
            <Route
              path="/notificationproducts"
              component={NotificationProducts}
            />
            <Route
              path="/notificationreciptes"
              component={NotificationReciptes}
            />
            <Route
              path="/notificationreplacements"
              component={NotificationReplacements}
            />
            <Route
              path="/notificationrestaurations"
              component={NotificationRestaurations}
            />
          </ContentContainer>
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    </Container>
  );
};

export default App;
