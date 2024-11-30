import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/CartPage';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Increase item quantity
  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      {/* Fixed Navbar */}
      <Navbar cartItems={cartItems} />

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route
            path="/rings"
            element={<ShopCategory category="rings" addToCart={addToCart} />}
          />
          <Route
            path="/necklaces"
            element={<ShopCategory category="necklaces" addToCart={addToCart} />}
          />
          <Route
            path="/earrings"
            element={<ShopCategory category="earrings" addToCart={addToCart} />}
          />
          <Route
            path="/bracelets"
            element={<ShopCategory category="bracelets" addToCart={addToCart} />}
          />
          <Route
            path="/product/:category/:productId"
            element={<Product addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
