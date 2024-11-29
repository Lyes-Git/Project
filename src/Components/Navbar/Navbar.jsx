import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import shopping_bag from '../assets/shopping_bag.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = ({ cartItems = [] }) => {
  const [menu, setMenu] = useState("shop");

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={shopping_bag} alt="Shop logo" />
        <p>SHOPPERS</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("rings")}>
          <Link to="/rings">Rings</Link>
          {menu === "rings" && <hr />}
        </li>
        <li onClick={() => setMenu("necklaces")}>
          <Link to="/necklaces">Necklaces</Link>
          {menu === "necklaces" && <hr />}
        </li>
        <li onClick={() => setMenu("earrings")}>
          <Link to="/earrings">Earrings</Link>
          {menu === "earrings" && <hr />}
        </li>
        <li onClick={() => setMenu("bracelets")}>
          <Link to="/bracelets">Bracelets</Link>
          {menu === "bracelets" && <hr />}
        </li>
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
