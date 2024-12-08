import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate order submission (replace with backend API call if needed)
    console.log('Order Details:', { userDetails, cartItems });

    // Clear the cart and show success message
    clearCart();
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <div className="checkout-success">
        <h2>Thank you for your order!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={userDetails.address}
          onChange={handleInputChange}
        />
        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
