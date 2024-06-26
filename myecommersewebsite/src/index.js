import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';


const root = createRoot(document.getElementById('root'));

root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
    
  
          
  //using this we provide the shopcontext data to all pages.
  //here we wrap app(root) to shopcontext so using that it is available to all component.  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

