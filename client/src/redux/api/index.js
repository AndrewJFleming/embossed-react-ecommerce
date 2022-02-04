import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/api/" });
const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const updateUser = (id, formData) => API.put(`/users/${id}`, formData);

export const addToCart = (id) => API.get(`/products/find/${id}`);
export const createCart = (newCartData) => API.post("/carts/", newCartData);
