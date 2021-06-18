import axios from "axios";
const API = axios.create({ baseURL: "https://iinstagramclone.herokuapp.com/" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const createposts = (newpost) => API.post("/posts", newpost);
export const fetchposts = () => API.get("/posts");
export const myprofile = () => API.get(`/posts/myprofile`);
export const likeposts = (id) => API.patch(`/posts/${id}/likeposts`);
export const unlikeposts = (id) => API.patch(`/posts/${id}/unlikeposts`);
export const deleteposts = (id) => API.delete(`/posts/${id}`);
export const comments = (id, data) => API.patch(`/posts/${id}/comments`, data);
export const signin = (formdata) => API.post(`/users/signin`, formdata);
export const userprofile = (id) => API.get(`/posts/${id}/userprofile`);
export const signup = (formdata) => API.post(`/users/signup`, formdata);
export const follow = (follow) => API.patch(`/users/follow`, follow);
export const unfollow = (unfollow) => API.patch(`/users/unfollow`, unfollow);
export const updateprofile = (id, updateprofile) =>
  API.patch(`/users/updateprofile/${id}`, updateprofile);
