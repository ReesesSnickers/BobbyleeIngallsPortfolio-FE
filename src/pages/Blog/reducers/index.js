import { combineReducers } from "redux";
import blogReducer from "./blog";

/** Combine Ordering Reducers */
export default combineReducers({
  blog: blogReducer
});
