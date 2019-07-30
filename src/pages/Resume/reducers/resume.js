import { SET_TEST_RESUME } from "../actions/types";

export const initialState = { test: "resumeTest" };

/** Reducer to handle the ordering object for Ordering module. */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TEST_RESUME:
      // Set the computer and reset the accessories and services
      return {
        ...state,
        test: action.payload
      };
    default:
      return state;
  }
}
