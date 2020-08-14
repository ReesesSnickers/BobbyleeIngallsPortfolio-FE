import { SET_TEST_BLOG, FETCH_BLOGS } from "../actions/types";

export const initialState = { test: "blogTest", blogs: [] };

/** Reducer to handle the ordering object for Ordering module. */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TEST_BLOG:
      // Set the computer and reset the accessories and services
      return {
        ...state,
        test: action.payload
      };
    case FETCH_BLOGS:
      // Set the computer and reset the accessories and services
      return {
        ...state,
        blogs: action.payload
      };
    default:
      return state;
  }
}
