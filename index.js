import React from 'react';
import { render } from 'react-dom'
// import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import App from './src/components/App'
// import reducer from './src/reducers/reducer';
import './main.css';

// const store = createStore(reducer);

ReactDOM.render(
  <Provaider>
    <App />
  </ Provaider>
);

document.getElementById('root')

