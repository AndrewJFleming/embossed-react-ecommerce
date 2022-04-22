import * as actionTypes from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: actionTypes.AUTH, data });
    navigate("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: actionTypes.AUTH, data });
    navigate("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, formData);
    dispatch({ type: actionTypes.LOGOUT });
    dispatch({ type: actionTypes.RESET_CART });
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
