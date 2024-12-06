import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import shopping_bag from '../assets/shopping_bag.png'
import cart_icon from '../assets/cart_icon.png'
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
  const {cartItems} =useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={shopping_bag} alt="" />
            <p>SHOPPERS</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> </li>
            <li onClick={()=>{setMenu("rings")}}><Link to='/rings'>Rings</Link></li>
            <li onClick={()=>{setMenu("neclaces")}}><Link to='/neclaces'>Necklaces</Link></li>
            <li onClick={()=>{setMenu("earings")}}><Link to='/earings'>Earrings</Link></li>
            <li onClick={()=>{setMenu("bracelets")}}><Link to='/bracelets'>Bracelets</Link></li>
            <hr />
        </ul>
        <div className="nav-login-cart">
            <Link to='/signup'><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="Cart Icon" />
           <div className="nav-cart-count">{totalItems}</div>
           </Link>
        </div>
      </div>
    //</div>
  );
};

export default Navbar;
