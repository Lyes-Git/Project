import React from 'react';
import Hero from '../Components/Hero/Hero'; // Adjust the path as needed
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-page-content">
        <h1>Welcome to Jeweller!</h1>
        <p>Your one-stop shop for exquisite jewelry and accessories.</p>
        <button onClick={() => window.location.href = '/shop'}>Explore Now</button>
      </div>
    </div>
  );
};

export default HomePage;
