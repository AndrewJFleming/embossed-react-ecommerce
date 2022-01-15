import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
import * as api from "../api";

export const addToCart =
  (id, quantity, variant) => async (dispatch, getState) => {
    const { data } = await api.addToCart(id);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        productId: data._id,
        title: data.title,
        img: data.img,
        price: data.price,
        inStock: data.inStock,
        quantity,
        variant,
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
