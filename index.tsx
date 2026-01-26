import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './src/App'; // 既存の会員LP
import SalesApp from './src/SalesApp'; // 営業LPに切り替え

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SalesApp />
  </React.StrictMode>
);