import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PropTypes from "prop-types";
import reducers from "./reduxConnections/reducers";

/**
 * Creates Redux store.
 */

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  /** Any node that will render. Usually <App /> */
  children: PropTypes.node,

  /** Initial State object. Useful for testing. */
  initialState: PropTypes.object
};

Root.defaultProps = {
  initialState: {},
  children: <section />
};

export default Root;
