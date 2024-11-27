// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for username, email, password, and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for errors

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});

    // Basic validation
    let formErrors = {};

    if (!username) {
      formErrors.username = 'Username is required.';
    }
    if (!email) {
      formErrors.email = 'Email is required.';
    }
    if (!password) {
      formErrors.password = 'Password is required.';
    }

    // If there are errors, set them and return
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Handle the registration logic (e.g., API call)
    console.log('Registered with:', { username, email, password });

    // Optionally reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;