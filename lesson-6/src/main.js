import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(
    <App cat={5} txt="This is the prop text"/>,
    document.getElementById('app')
);
