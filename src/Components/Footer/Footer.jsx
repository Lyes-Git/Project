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
      <div className="footer-left">
          <img src={bag} alt="Shopping Bag" />
         
          <h4>SHOPPERS</h4>
          <p>© 2020 - 2023</p>
          <p>Privacy - Terms</p>
        </div>

        {/* <div className="footer-middle">
          <div className="footer-resources">
            <h4>Resources</h4>
            <ul>
              <li>Product</li>
              <li>Feature</li>
              <li>Company</li>
            </ul>
            </div>
          </div> */}

        <div className="footer-icons">
          <p>Folllow us:</p>
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

        <div className="footer-right">
          <a href="/login" className="footer-login-button">
            Login
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
