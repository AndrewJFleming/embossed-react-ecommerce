import { AUTH, LOGOUT, RESET_CART, AUTH_ERROR } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, formData);
    console.log(data);
    dispatch({ type: LOGOUT });
    dispatch({ type: RESET_CART });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR });
  }
};
