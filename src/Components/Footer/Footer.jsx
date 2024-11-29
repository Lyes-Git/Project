import React from "react";
//import bag from "../../assets/shopping_bag.png"; 
import "./Footer.css"; 
import bag from '../assets/shopping_bag.png'
import facebook from '../assets/fb.png'
import insta from '../assets/insta.png'
import twt from '../assets/twt.png'
import yt from '../assets/yt.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-bag">
          <img src={bag} alt="Shopping Bag" />
          <p>SHOPPERS</p>
        </div>

        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={insta} alt="Instagram" />
            <p>INSTAGRAM</p>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
            <p>FACEBOOK</p>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={twt} alt="Twitter" />
            <p>TWITTER</p>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={yt} alt="YouTube" />
            <p>YOUTUBE</p>
          </a>
        </div>

        <div className="footer-login">
          <a href="/login" className="footer-login-button">
            Login
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
