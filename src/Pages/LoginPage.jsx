import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '', });

    //updating the states
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    //Function to handle form submission for login
    const loginUser = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            loginMessage.textContent = data.message;
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = data.error;
            loginMessage.style.color = 'red';
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
