import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart/Cart";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

const App = () => {
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
        <Route path="/product">
          <SingleProduct />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
