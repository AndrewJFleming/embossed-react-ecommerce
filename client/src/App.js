import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart/Cart";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./components/Products/Product/Product";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Pay from "./pages/Stripe/Pay";
import Success from "./pages/Stripe/Success";
import { useSelector } from "react-redux";
import Account from "./pages/Account/Account";

const App = () => {
  const user = useSelector((state) => state.auth.authData.result);
  const error = useSelector((state) => state.auth.error);

  return (
    <BrowserRouter>
      <Announcement />
      <TopNav currentUser={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/product-list">
          <ProductList />
        </Route> */}
        <Route path="/product-list/:category">
          <ProductList />
        </Route>
        <Route path="/product:id">
          <Product />
        </Route>
        <Route path="/product">
          <SingleProduct />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register errorStatus={error} />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login errorStatus={error} />}
        </Route>
        <Route path="/account/:id">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <Account currentUser={user} errorStatus={error} />
          )}
        </Route>
        <Route path="/cart">
          <Cart currentUserId={user._id} />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
      <Footer currentUser={user} />
    </BrowserRouter>
  );
};

export default App;
