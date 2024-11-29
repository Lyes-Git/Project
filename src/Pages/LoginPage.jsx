import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  
  return (
    <div className="LoginSignUp">
      <h1>Login </h1>
        {/* EMAIL================================ */}
        <label htmlFor="email">Email address: </label><br />
        <input
          type="email"
          name="email"
          placeholder="John@gmail.com"
        //   value={formData.email}
        //   onChange={handleChange}
          required />
        <br />

        {/* PASSWORD ================================ */}
        <label htmlFor="password">Password: </label><br />
        <input
          type="password"
          name="password"
        //   value={formData.password}
        //   onChange={handleChange}
          required />
        <br />
    </div>
  );
};

export default LoginPage;
