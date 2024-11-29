import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import shopping_bag from '../assets/shopping_bag.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = ({ cartItems = [] }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" className="home-link">
          <img src={shopping_bag} alt="Shop logo" />
          <span className="shop-name">SHOPPERS</span>
        </Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/rings">Rings</Link></li>
        <li><Link to="/necklaces">Necklaces</Link></li>
        <li><Link to="/earrings">Earrings</Link></li>
        <li><Link to="/bracelets">Bracelets</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/signup"><button id="loginSignUpButton">Login/Signup</button></Link>
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart icon" />
          </Link>
          <div className="nav-cart-count">{totalItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
