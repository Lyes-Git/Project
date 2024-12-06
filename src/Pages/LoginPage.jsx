import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '', });
    const [errorMessage, setErrorMessage] = useState('');
    // const apiUrl = "https://shoppers-group-project.onrender.com/api/login";
    // apiurl needs to be changed once I deploy to server again
    const apiUrl = "http://localhost:3000/api/login"
    // console.log(apiUrl)

    //updating the states
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, });
    };
    //Function to handle form submission for login
    const loginUser = async (event) => {
        event.preventDefault();

        //post to database
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });

        const data = await response.json();

        //if password matches or not
        if (response.ok) {
            onLogin(data.fullName); // Pass the full name to App.jsx
            console.log(data.fullName);
        } else {
            alert(data.error);
        }
    };


    return (
        <div className="LoginSignUp">
            <form onSubmit={loginUser}>
                <h1>Login </h1>
                <br />
                <br />

                <div>
                    <h2 id="loginMessage"></h2>
                </div>
                <br />
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
            <div>
            </div>
        </div>
    );
};

export default LoginPage;
