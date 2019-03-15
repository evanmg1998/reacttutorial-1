import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import Base from './base';
import index from "./js/index"


  // ========================================
  ReactDOM.render(
    <Provider store={store}>
      <Base />
    </Provider>,
    document.getElementById('root')
  );
  