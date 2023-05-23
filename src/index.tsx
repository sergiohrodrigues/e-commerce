import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes';
import { ListaDeDesejosProvider } from './context/ListaDeDesejos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ListaDeDesejosProvider>
      <App />
    </ListaDeDesejosProvider>
  </React.StrictMode>
);