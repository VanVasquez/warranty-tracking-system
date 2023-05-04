import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProvider } from './Context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
