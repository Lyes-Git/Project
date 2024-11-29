import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shop Page */}
          <Route path="/" element={<Shop addToCart={addToCart} />} />

          {/* Category Pages */}
          <Route path="/rings" element={<ShopCategory category="rings" addToCart={addToCart} />} />
          <Route path="/necklaces" element={<ShopCategory category="necklaces" addToCart={addToCart} />} />
          <Route path="/earrings" element={<ShopCategory category="earrings" addToCart={addToCart} />} />
          <Route path="/bracelets" element={<ShopCategory category="bracelets" addToCart={addToCart} />} />

          {/* Product Details Page */}
          <Route path="/product/:category/:productId" element={<Product addToCart={addToCart} />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

          {/* Login/register Page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
