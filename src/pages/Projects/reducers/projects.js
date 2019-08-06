import { SET_PROJECT, FETCH_PROJECTS } from "../actions/types";

export const initialState = { project: {}, projects: [] };

/** Reducer to handle the ordering object for Ordering module. */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      // Set the project being viewed
      return {
        ...state,
        project: action.payload
      };
    case FETCH_PROJECTS:
      // Set the computer and reset the accessories and services
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
