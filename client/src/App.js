import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart/Cart";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import ProductList from "./pages/ProductList/ProductList";
// import Product from "./components/Products/Product/Product";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Pay from "./pages/Stripe/Pay";
import Success from "./pages/Stripe/Success";
import Account from "./pages/Account/Account";

const App = () => {
  const user = useSelector((state) => state.auth.authData.result);
  const error = useSelector((state) => state.auth.error);

  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_SERVER_URL + "/sales/"
        );
        setSales(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSales();
  }, []);

  return (
    <React.Fragment>
      {sales && <Announcement sales={sales} />}
      <TopNav currentUser={user} />
      <Routes>
        <Route exact path="/" element={<Home sales={sales} />} />
        <Route
          path="/product-list/:category"
          element={<ProductList sales={sales} />}
        />
        {/* <Route path="/product:productId" element={<Product />} /> */}
        <Route
          path="/product/:productId"
          element={<SingleProduct sales={sales} />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/" /> : <Register errorStatus={error} />
          }
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login errorStatus={error} />}
        />
        <Route
          path="/account/:id"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : (
              <Account currentUser={user} errorStatus={error} />
            )
          }
        />
        <Route
          path="/cart"
          element={<Cart currentUserId={user?._id} sales={sales} />}
        />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer currentUser={user} />
    </React.Fragment>
  );
};

export default App;
