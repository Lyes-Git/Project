import { useState, useEffect, useContext  } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import shopping_bag from '../assets/shopping_bag.png'
import cart_icon from '../assets/cart_icon.png'
import { useCart } from '../../Context/CartContext';


const Navbar = ({ userName, onLogout }) => {
  const{cartItems} = useCart();
  const totalItems=cartItems.reduce((sum, item) => sum + item.quantity, 0);

  let loginButton; // Define the button variable
  if (userName) {
    loginButton = (
      <div>
        <Link to="/dashboard">
          {/* <button className="dashboard">Welcome {userName}</button> */}
          <button className="dashboard">Dashboard</button>
        </Link>
        <button className="logoutButton" onClick={onLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    loginButton = (
      <Link to="/signup">
        <button className="signupButton">Signup / Login</button>
      </Link>
    );
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={shopping_bag} alt="" />
        <p>SHOPPERS</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link> </li>
        <li onClick={() => { setMenu("rings") }}><Link to='/rings'>Rings</Link></li>
        <li onClick={() => { setMenu("necklaces") }}><Link to='/necklaces'>Necklaces</Link></li>
        <li onClick={() => { setMenu("earrings") }}><Link to='/earrings'>Earrings</Link></li>
        <li onClick={() => { setMenu("bracelets") }}><Link to='/bracelets'>Bracelets</Link></li>
        <hr />
      </ul>
      <div className="nav-login-cart">
        {loginButton} {/* Render the login button based on the condition */}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">
          {totalItems}
          </div>
      </div>
    </div>
  );
};

//test github

export default Navbar;