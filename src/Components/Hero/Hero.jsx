import React from 'react'
import './Hero.css'
import frontImage from '../assets/frontImage.png'
import rightarrow from '../assets/rightarrow.png'
import heroImage from '../assets/heroImage.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrival Only</h2>
      <div>
    
      <div className="hero-right-icon">
       <p>new</p>
      <img src={frontImage} alt="" />
      </div>
      </div>

      <p>collection</p>
      <p>for everyone</p>
      </div>
      <div className="latest-btn">
        <div>Latest collection</div>
        <img src={rightarrow} alt="" />

      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
     
    </div>
    
  )
}

export default Hero