import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ContainerExampleAlignment from './src/App.js';
import './index.css';

const app = document.getElementById('app');
ReactDom.render(<ContainerExampleAlignment />, app);