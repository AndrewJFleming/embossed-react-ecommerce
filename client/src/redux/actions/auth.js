import { AUTH, LOGOUT, RESET_CART, AUTH_ERROR } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: AUTH_ERROR, authError });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: AUTH_ERROR, authError });
  }
};
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, formData);
    console.log(data);
    dispatch({ type: LOGOUT });
    dispatch({ type: RESET_CART });
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: AUTH_ERROR, authError });
  }
};
