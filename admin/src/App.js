import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TopNav from "./components/TopNav/TopNav";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./components/Products/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import { useSelector } from "react-redux";

const App = () => {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        {/* {admin && ( */}
        <React.Fragment>
          <TopNav />
          <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </div>
        </React.Fragment>
        {/* )} */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
