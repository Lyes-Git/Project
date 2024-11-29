import React from 'react';
import { useCart } from '../Context/CartContext'; 

const CartPage = () => {
    const { cartItems } = useCart();

    if (!cartItems || cartItems.length === 0) {
        return (
            <div>
                <p>Your Shopping Bag is Empty</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}</strong> - Quantity: {item.quantity || 1} - Price: ${item.price}
                    </li>
                ))}
            </ul>
            <p>
                Total Items: {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
            </p>
        </div>
    );
};

export default CartPage;
