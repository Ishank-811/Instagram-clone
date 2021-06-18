import { combineReducers } from "redux";
import auth from "./auth";
import posts from "./post";
import profile from "./profile";
export default combineReducers({
  auth,
  posts,
  profile,
});
