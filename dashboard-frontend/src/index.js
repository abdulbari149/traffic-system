import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

