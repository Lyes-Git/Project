import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './LoginSignDash.css';
import '../App.css';

const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '', });
    const [errorMessage, setErrorMessage] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL;
    // apiurl needs to be changed once I deploy to server again
    //const apiUrl = "http://localhost:3000/api/login"
    // const apiUrl = "http://localhost:3000/"
    console.log(apiUrl)
    const navigate = useNavigate();

    //updating the states
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, });
    };
    //Function to handle form submission for login
    const loginUser = async (event) => {
        event.preventDefault();
    
        // Post to database
        const response = await fetch(apiUrl + "api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });
    
        const data = await response.json();
    
        // Check if login was successful
        if (response.ok) {
            onLogin(data.fullName, formData.email); // Pass both full name and email to App.jsx
            console.log(`Logged in as: ${data.fullName}, Email: ${formData.email}`);
            navigate('/dashboard');
        } else {
            alert(data.error);
        }
    };
    


    return (
        <div className="LoginSignUp">
            <form onSubmit={loginUser}>
                <h1>Login </h1>

                {/* <div>
                    <h2 id="loginMessage"></h2>
                </div> */}
                {/* <br /> */}
                <br />

                {/* EMAIL================================ */}
                <label htmlFor="email">Email address: </label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="John@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required />
                <br /><br />

                {/* PASSWORD ================================ */}
                <label htmlFor="password">Password: </label><br />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required />
                <br /><br />

                <button className="loginPageButton" type="submit">Login</button>

            </form>

            <h2> Don't have an account? </h2>
            <br />

            <Link to='/signup'>
                <button className="loginPageButton" type="submit">Register</button>
            </Link>

            <div>
            </div>
        </div>
    );
};

export default LoginPage;
