import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '', });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const loginUser = async (event) => {
        event.preventDefault();
        console.log("Attempting Logging in")
        let loginMessage = document.getElementById("loginMessage")


        //code for success and failure, change later
        if (formData.password === "123") {
            loginMessage.textContent = "SUCCESS";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "TRY AGAIN";
            loginMessage.style.color = "red";
        }
    }

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
