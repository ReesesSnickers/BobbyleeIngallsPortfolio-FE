import { combineReducers } from "redux";
import resumeReducer from "./resume";

/** Combine Ordering Reducers */
export default combineReducers({
  resume: resumeReducer
});
