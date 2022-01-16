import * as actionTypes from "../constants/actionTypes";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      //check to see if item with productId and variant value already exists in array.
      const existItem = state.cartItems.find(
        (x) => x.cartItemId === item.cartItemId && x.variant === item.variant
      );

      if (existItem) {
        console.log("if");
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.cartItemId === existItem.cartItemId ? item : x
          ),
        };
      } else {
        console.log("else");
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    // if (!existItem) {
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, item],
    //   };
    // }
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
