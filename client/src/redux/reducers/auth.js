import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: {} }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: {} };
    default:
      return state;
  }
};

export default authReducer;
