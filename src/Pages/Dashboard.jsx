import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard = ({ userName }) => {
  return (
    <div className="LoginSignUp">
      <h2>Dashboard for {userName}</h2>
      <p>Welcome back!</p>

      {/* Button to navigate to Order History */}
      <Link to="/orderhistory">
        <button>View Order History</button>
      </Link>

      {/* Logout button */}
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default Dashboard;
