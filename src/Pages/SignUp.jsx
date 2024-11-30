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

    //Compare password and confirm pasword
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({
            fullName: formData.fullName,
            password: formData.password,
          }),
        });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const toLoginPage = async (event) => {
    console.log("to login page")
  }
  return (
    <div className="LoginSignUp">
      <h1>Registration</h1>

      {/* NAME================================ */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Name: </label><br />
        <input
          type="text"
          name="fullName"
          placeholder="John Wick"
          value={formData.fullName}
          onChange={handleChange}
          required />
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
        <br />

        {/* PASSWORD ================================ */}
        <label htmlFor="password">Password: </label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required />
        <br />

        <label htmlFor="confirmPassword">Confirm Password: </label><br />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required />
        <br /><br />

        <button className="loginPageButton" type="submit" value="Submit">Register </button>

      </form>



      <br /><br />
      <h2> Have an account already? </h2>

      <br /><br />
      <Link to='/login'>
        <button className="loginPageButton" type="login" value="Login">Login </button>
      </Link>





    </div>
  );
};

export default SignUp;
