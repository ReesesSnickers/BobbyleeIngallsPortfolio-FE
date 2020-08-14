import { SET_PROJECT, FETCH_PROJECTS } from "./types";
import axios from "axios";

// sets the viewed project
export const setProject = project => dispatch => {
  dispatch({ type: SET_PROJECT, payload: project });
};

export const fetchProjects = () => async dispatch => {
  const query = {
    query: `{
      projects {
        _id
        title
        url
        description
        created
        codeLocation
        sitePreview
        fullScreenPhoto
      }
    }`
  };

  const headers = {
    "Content-Type": "application/json"
  };
  // Query the endpoint
  const response = await axios.post(
    process.env.REACT_APP_PORTFOLIO_API,
    query,
    {
      headers: headers
    }
  );

  dispatch({
    type: FETCH_PROJECTS,
    payload: response.data.data.projects
  });
};
