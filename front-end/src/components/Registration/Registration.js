import React from 'react';
import './Registration.css'; // Ensure path to CSS is correct

const Registration = () => {
  return (
    <div className="registration-container">
      <h2>Registration Component</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
