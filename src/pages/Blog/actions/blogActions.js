import { SET_TEST_BLOG } from "./types";

// Adds the choice of computer to the order object
export const setTest = test => dispatch => {
  dispatch({ type: SET_TEST_BLOG, payload: test });
};
