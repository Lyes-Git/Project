import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // If product exists, update its quantity
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product does not exist, add it to the cart
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  

  // Function to remove a specific item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  // Function to decrease the quantity of a specific item
  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Function to increase the quantity of a specific item
  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Pass cartItems to Navbar for dynamic cart count */}
        <Navbar cartItems={cartItems} />
        <Routes>
          {/* Home / Shop Page */}
          <Route path="/" element={<Shop addToCart={addToCart} />} />

          {/* Category Pages */}
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

          {/* Product Details Page */}
          <Route
            path="/product/:category/:productId"
            element={<Product addToCart={addToCart} />}
          />

          {/* Cart Page */}
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

          {/* Login/Register Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
