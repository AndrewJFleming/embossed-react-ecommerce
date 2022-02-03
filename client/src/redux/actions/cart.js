import * as actionTypes from "../constants/actionTypes";
import * as api from "../api";
import * as uuid from "uuid";

export const addToCart =
  (pId, quantity, variant) => async (dispatch, getState) => {
    const { data } = await api.addToCart(pId);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        productId: data._id,
        cartItemId: uuid.v4(),
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

export const removeFromCart = (pId, variant) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { pId, variant },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export const changeQuantity =
  (cartItemId, quantity) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.CHANGE_QTY,
      payload: { cartItemId, quantity },
    });
  };

export const createCart = (id, cartData) => async (dispatch, getState) => {
  const newCartData = {
    userId: id,
    products: cartData,
  };
  console.log(newCartData);
  const { data } = await api.createCart(newCartData);

  console.log(data);
};
