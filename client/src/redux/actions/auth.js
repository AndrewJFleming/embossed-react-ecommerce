import * as actionTypes from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history.push("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history.push("/");
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, formData);
    console.log(data);
    dispatch({ type: actionTypes.LOGOUT });
    dispatch({ type: actionTypes.RESET_CART });
  } catch (error) {
    const authError = error.response.data.message;
    dispatch({ type: actionTypes.AUTH_ERROR, authError });
  }
};
