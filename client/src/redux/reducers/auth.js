import * as actionTypes from "../constants/actionTypes";

const authReducer = (state = { authData: {}, error: false }, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data, error: false };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: {}, error: false };
    case actionTypes.AUTH_ERROR:
      // return { ...state, error: true };
      return { ...state, error: action.authError };
    case actionTypes.CLEAR_AUTH_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default authReducer;
