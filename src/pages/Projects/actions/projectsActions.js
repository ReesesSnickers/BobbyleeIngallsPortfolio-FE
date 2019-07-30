import { SET_PROJECT } from "./types";

// sets the viewed project
export const setProject = project => dispatch => {
  dispatch({ type: SET_PROJECT, payload: project });
};
