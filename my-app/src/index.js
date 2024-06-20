import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Asegúrate de que esto coincida con el nombre del archivo
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
