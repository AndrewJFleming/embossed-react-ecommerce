import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TopNav from "./components/TopNav/TopNav";
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import NewProduct from "./pages/NewProduct/NewProduct";
import UserList from "./pages/UserList/UserList";
import SingleUser from "./pages/SingleUser/SingleUser";
import NewUser from "./pages/NewUser/NewUser";
import CartList from "./pages/CartList/CartList";
import SingleCart from "./pages/SingleCart/SingleCart";
// import SingleOrder from "./pages/SingleOrder/SingleOrder";
import { useSelector } from "react-redux";

const App = () => {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = useSelector((state) => state.auth.authData.result.isAdmin);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{!admin ? <Login /> : <Redirect to="/" />}</Route>
        <React.Fragment>
          <TopNav />
          <Route exact path="/">
            {admin ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/users">
            {admin ? <UserList /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user/:userId">
            {admin ? <SingleUser /> : <Redirect to="/login" />}
          </Route>
          <Route path="/new-user">
            {admin ? <NewUser /> : <Redirect to="/login" />}
          </Route>
          <Route path="/products">
            {admin ? <ProductList /> : <Redirect to="/login" />}
          </Route>
          <Route path="/product/:productId">
            {admin ? <SingleProduct /> : <Redirect to="/login" />}
          </Route>
          <Route path="/new-product">
            {admin ? <NewProduct /> : <Redirect to="/login" />}
          </Route>
          <Route path="/carts">
            {admin ? <CartList /> : <Redirect to="/login" />}
          </Route>
          <Route path="/cart/:cartId">
            {admin ? <SingleCart /> : <Redirect to="/login" />}
          </Route>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
