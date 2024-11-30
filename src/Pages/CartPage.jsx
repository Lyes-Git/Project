import React from 'react';

const CartPage = ({ cartItems, removeFromCart, decreaseQuantity, increaseQuantity, clearCart }) => {
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
                  <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
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
          <div className="cart-actions">
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
