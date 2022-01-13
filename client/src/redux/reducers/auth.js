import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: {} }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data, error: false };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: {}, error: false };
    case actionType.AUTH_ERROR:
      return { ...state, error: true };
    case actionType.CLEAR_AUTH_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default authReducer;
