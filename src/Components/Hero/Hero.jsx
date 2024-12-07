import React from 'react';
import './Hero.css';
import frontImage from '../assets/frontImage.png';
import heroImage from '../assets/heroImage.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <p>Collection for everyone</p>
        <div className="hero-right-icon">
          <p>New Models</p>
          <img src={frontImage} alt="New Collection" />
        </div>
      </div>
      <div className="latest-btn">
        <div>Latest Collection</div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero Image" />
      </div>

    </div>
  )
}

export default Hero;
