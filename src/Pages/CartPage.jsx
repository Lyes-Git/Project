import React from 'react';
import { useCart } from '../Context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart ,updateQuantity,clearCart} = useCart();

  const totalPrice=cartItems.reduce(
    (total,item)=>total +item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>
                  Total:${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="quantity-control">
                  <button
                  onClick={()=>updateQuantity(item.id,item.quantity -1 )

                  }
                  disabled={item.quantity<=1}
                  >
                  -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                  onClick={()=>updateQuantity(item.id,item.quantity +1)}
                  >
                  +
                  </button>
        
                </div>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
               
              </div>
            </div>
          
          ))}
          <div className="cart-total">
                  <h2>
                    Total Price:${totalPrice.toFixed(2)}
                  </h2>
                </div>
                <div className="clear-cart-btn">
                  <button onClick={()=> clearCart()}>
                    Clear
                  </button>
                </div>

        </div>
       
       
      )}
    </div>
  );
};

export default CartPage;
