import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import _JSXStyle from 'styled-jsx/style';

if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle });
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
