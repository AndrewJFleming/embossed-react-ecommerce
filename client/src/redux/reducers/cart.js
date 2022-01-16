import * as actionTypes from "../constants/actionTypes";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      //check to see if item with productId and variant value already exists in array.
      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId && x.variant === item.variant
      );

      if (!existItem) {
        //If new item is unique, append it to cartItems array.
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems,
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.cartItemId !== action.payload.pId
        ),
      };
    case actionTypes.CHANGE_QTY:
      const targetCartItemId = action.payload.cartItemId;
      const newQty = action.payload.quantity;
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.cartItemId === targetCartItemId
            ? { ...cartItem, quantity: newQty }
            : cartItem
        ),
      };
    case actionTypes.RESET_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
