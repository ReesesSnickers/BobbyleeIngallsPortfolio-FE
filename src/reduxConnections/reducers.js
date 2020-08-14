import { combineReducers } from "redux";
import blog from "../unUsedATM/Blog/reducers";
import projects from "../unUsedATM/Projects/reducers";
import resume from "../unUsedATM/Resume/reducers";

/** Combine All Reducers */
export default combineReducers({
  blog,
  projects,
  resume,
});
