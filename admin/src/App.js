import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TopNav from "./components/TopNav/TopNav";
import ProductList from "./pages/Products/ProductList/ProductList";
import SingleProduct from "./pages/Products/SingleProduct/SingleProduct";
import NewProduct from "./pages/Products/NewProduct/NewProduct";
import CategoryList from "./pages/Categories/CategoryList/CategoryList";
import SingleCategory from "./pages/Categories/SingleCategory/SingleCategory";
import NewCategory from "./pages/Categories/NewCategory/NewCategory";
import UserList from "./pages/Users/UserList/UserList";
import SingleUser from "./pages/Users/SingleUser/SingleUser";
import NewUser from "./pages/Users/NewUser/NewUser";
import SaleList from "./pages/Sales/SaleList/SaleList";
import SingleSale from "./pages/Sales/SingleSale/SingleSale";
import NewSale from "./pages/Sales/NewSale/NewSale";
import CartList from "./pages/Carts/CartList/CartList";
import SingleCart from "./pages/Carts/SingleCart/SingleCart";
import { useSelector } from "react-redux";

const App = () => {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = useSelector((state) => state.auth.authData.result?.isAdmin);
  const error = useSelector((state) => state.auth.error);

  return (
    <React.Fragment>
      <TopNav />
      <Routes>
        <Route
          path="/login"
          element={!admin ? <Login errorStatus={error} /> : <Navigate to="/" />}
        ></Route>
        <React.Fragment>
          <Route
            exact
            path="/"
            element={admin ? <Home /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/users"
            element={admin ? <UserList /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/user/:userId"
            element={admin ? <SingleUser /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/new-user"
            element={
              admin ? <NewUser errorStatus={error} /> : <Navigate to="/login" />
            }
          ></Route>
          <Route
            path="/products"
            element={admin ? <ProductList /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/product/:productId"
            element={admin ? <SingleProduct /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/new-product"
            element={admin ? <NewProduct /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/categories"
            element={admin ? <CategoryList /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/category/:catId"
            element={admin ? <SingleCategory /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/new-category"
            element={admin ? <NewCategory /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/carts"
            element={admin ? <CartList /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/cart/:cartId"
            element={admin ? <SingleCart /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/sales"
            element={admin ? <SaleList /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/sale/:saleId"
            element={admin ? <SingleSale /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/new-sale"
            element={admin ? <NewSale /> : <Navigate to="/login" />}
          ></Route>
        </React.Fragment>
      </Routes>
    </React.Fragment>
  );
};

export default App;
