import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom'; 
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = useCart();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total Price: ${calculateTotal().toFixed(2)}</h2>
          </div>
          <div className="cart-actions">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear the cart?')) {
                  clearCart();
                }
              }}
              className="clear-cart-btn"
            >
              Clear Cart
            </button>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
