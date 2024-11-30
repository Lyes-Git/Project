import React from 'react';



const LoginSignUp = () => {
  return (
    <div class="LoginSignUp">
      <h1>LOGIN</h1><br></br><br></br><br></br>
      
      <label htmlFor="fname">Name: </label>
      <input type="text" id="fname" name="fname" placeholder="John" /><br/>
    
      <label htmlFor="fname">Email address: </label>
      <input type="text" id="emailAddress" name="email" placeholder="John@gmail.com" />

      <br/>
      <label htmlFor="fname">Password: </label>
      <input type="text" id="fname" name="password" />

      <br/>
      <label htmlFor="fname">Confirm Password: </label>
      <input type="text" id="fname" name="confirmPassword" />

      <br/>
      <input type="submit" value="Submit" />
    </div>
  );
};

export default LoginSignUp;
