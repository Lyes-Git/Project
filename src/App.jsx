import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import { CartProvider } from './Context/CartContext';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import CartPage from './Pages/CartPage';
import Dashboard from './Pages/Dashboard';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  const [userName, setUserName] = useState(null);

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('userName');
    if (savedUser) {
      setUserName(savedUser);
    }
  }, []);

  // Function to update username after login
  const handleLogin = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name); // Save user to localStorage
  };

  // Function to handle logout
  const handleLogout = () => {
    setUserName(null);
    localStorage.removeItem('userName'); // Clear user from localStorage
    window.location.href = '/';
  };

  const clearCart = () => {
    setCartItems([]); // Reset cart items
    console.log(cartItems); // Should show an empty array after clearing
  };

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar userName={userName} onLogout={handleLogout} /> {/* Pass onLogout to Navbar */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/rings" element={<ShopCategory category="rings" />} />
            <Route path="/necklaces" element={<ShopCategory category="necklaces" />} />
            <Route path="/earrings" element={<ShopCategory category="earrings" />} />
            <Route path="/bracelets" element={<ShopCategory category="bracelets" />} />
            <Route path="/product" element={<Product />} />
            <Route path=":productId" element={<Product />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard userName={userName} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
