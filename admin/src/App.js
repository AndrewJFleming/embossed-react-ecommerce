import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TopNav from "./components/TopNav/TopNav";
import ProductList from "./pages/Products/ProductList/ProductList";
import SingleProduct from "./pages/Products/SingleProduct/SingleProduct";
import NewProduct from "./pages/Products/NewProduct/NewProduct";
import UserList from "./pages/Users/UserList/UserList";
import SingleUser from "./pages/Users/SingleUser/SingleUser";
import NewUser from "./pages/Users/NewUser/NewUser";
import CartList from "./pages/Carts/CartList/CartList";
import SingleCart from "./pages/Carts/SingleCart/SingleCart";
import SaleList from "./pages/Sales/SaleList/SaleList";
import SingleSale from "./pages/Sales/SingleSale/SingleSale";
import NewSale from "./pages/Sales/NewSale/NewSale";
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
          <Route path="/sales">
            {admin ? <SaleList /> : <Redirect to="/login" />}
          </Route>
          <Route path="/sale/:saleId">
            {admin ? <SingleSale /> : <Redirect to="/login" />}
          </Route>
          <Route path="/new-sale">
            {admin ? <NewSale /> : <Redirect to="/login" />}
          </Route>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
