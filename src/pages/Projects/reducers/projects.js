import { SET_PROJECT } from "../actions/types";

export const initialState = { project: {} };

/** Reducer to handle the ordering object for Ordering module. */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      // Set the project being viewed
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
}
