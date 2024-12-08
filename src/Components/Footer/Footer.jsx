import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Jewellery Store. All rights reserved.</p>
        <p>
          Follow us on: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"> Tiktok</a>  
        </p>
      </div>
    </footer>
  );
};

export default Footer;
