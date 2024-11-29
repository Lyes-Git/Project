import React from 'react';
import Navbar from '../Components/Navbar/Navbar.jsx'; // Ensure correct import path
import Hero from '../Components/Hero/Hero.jsx';  // Assuming Hero is your home page content
import './HomePage.css';  // Your HomePage styling (optional)

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar /> {/* Render Navbar here */}
      <Hero />  {/* Your Hero section */}
    </div>
  );
};

export default HomePage;
