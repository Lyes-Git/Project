import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './LoginSignDash.css';
import '../App.css';

const Dashboard = ({userName}) => {

    return (
        <div className="LoginSignUp">
            <h2>Dashboard for {userName}</h2>
            <p>asdasdas</p>
            <button>View order history</button>
            {/* <Link to='/'>
            <button>Logout</button>
            </Link> */}
            
        </div>
    );
};

export default Dashboard;
