import { AUTH, LOGOUT, AUTH_ERROR } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    // console.log(error);
    const authError = error.response.data.message;
    dispatch({ type: AUTH_ERROR, authError });
  }
};

export const createUser = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createUser(formData);
  } catch (error) {
    // console.log(error.response);
    console.log(JSON.stringify(error.response.data.message));
    const authError = error.response.data.message;
    dispatch({ type: AUTH_ERROR, authError });
  }
};
