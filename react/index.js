import React from 'react';
import { createStore, combineReducers } from 'redux';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/components/App';
import reducer from './src/reducers/reducer';

const store = createStore(reducer);
  
render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
