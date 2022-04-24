import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/" });
const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/admin/signin", formData);
export const createUser = (formData) => API.post("/users/signup", formData);
