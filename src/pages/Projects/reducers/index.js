import { combineReducers } from "redux";
import projectsReducer from "./projects";

/** Combine Ordering Reducers */
export default combineReducers({
  projects: projectsReducer
});
