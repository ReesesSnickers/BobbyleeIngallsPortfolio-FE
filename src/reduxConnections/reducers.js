import { combineReducers } from "redux";
import blog from "../pages/Blog/reducers";
import projects from "../pages/Projects/reducers";
import resume from "../pages/Resume/reducers";

/** Combine All Reducers */
export default combineReducers({
  blog,
  projects,
  resume
});
