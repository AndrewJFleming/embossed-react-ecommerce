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

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Announcement />
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
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
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
