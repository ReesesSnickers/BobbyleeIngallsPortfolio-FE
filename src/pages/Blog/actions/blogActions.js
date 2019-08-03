import { SET_TEST_BLOG, FETCH_BLOGS } from "./types";
import axios from "axios";

// Adds the choice of computer to the order object
export const setTest = test => dispatch => {
  dispatch({ type: SET_TEST_BLOG, payload: test });
};

export const fetchBlogs = () => async dispatch => {
  const query = {
    query: `{
      blogs {
        _id
        photo
        title
        description
        created
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
    type: FETCH_BLOGS,
    payload: response.data.data.blogs
  });
};
