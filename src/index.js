import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FoodContext from './FoodContext';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FoodContext>
    <App />
    </FoodContext>
  </React.StrictMode>,
  document.getElementById('root')
);

