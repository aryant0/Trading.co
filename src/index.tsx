import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure Tailwind is configured for dark mode
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);