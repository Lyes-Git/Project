import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div className="LoginSignUp">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Name: </label><br />
        <input
          type="text"
          name="fullName"
          placeholder="John Wick"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email address: </label><br />
        <input
          type="email"
          name="email"
          placeholder="John@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="password">Password: </label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="confirmPassword">Confirm Password: </label><br />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button className="loginPageButton" type="submit">Register</button>
      </form>

      <br /><br />
      <h2> Have an account already? </h2>
      <br /><br />
      <Link to='/login'>
        <button className="loginPageButton">Login</button>
      </Link>
    </div>
  );
};

export default SignUp;