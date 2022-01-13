import * as actionTypes from "../constants/actionTypes";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/products/find/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      productId: data._id,
      title: data.title,
      img: data.img,
      price: data.price,
      inStock: data.inStock,
      quantity,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
