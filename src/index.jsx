import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use React 18's API
import { CartProvider } from './Context/CartContext'; // Fixed the path case sensitivity
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
