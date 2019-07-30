import { SET_TEST_BLOG } from "../actions/types";

export const initialState = { test: "blogTest" };

/** Reducer to handle the ordering object for Ordering module. */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TEST_BLOG:
      // Set the computer and reset the accessories and services
      return {
        ...state,
        test: action.payload
      };
    default:
      return state;
  }
}
