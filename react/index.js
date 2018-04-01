import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import App from './src/components/App';
import reducer from './src/reducers/reducer';

const store = createStore(reducer);
  
ReactDOM.render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
