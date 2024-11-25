import React, { useState } from 'react';
import './Navbar.css'
import shopping_bag from '../assets/shopping_bag.png'
import cart_icon from '../assets/cart_icon.png'

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={shopping_bag} alt="" />
            <p>SHOPPERS</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("rings")}}>Rings{menu==="rings"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("neclaces")}}>Neclaces{menu==="neclaces"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("earings")}}>Earings{menu==="earings"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bracelets")}}>Bracelets{menu==="bracelets"?<hr/>:<></>}</li>
            <hr />
        </ul>
        <div className="nav-login-cart">
            <button>login</button>
            <img src={cart_icon} alt="" />
        </div>
     
    </div>
  );
};

export default Navbar;