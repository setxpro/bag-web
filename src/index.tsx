import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Contexts/Auth/AuthContext';
import { GetThemeProvider } from './Contexts/Theme/GetThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GetThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GetThemeProvider>
  </React.StrictMode>
);
