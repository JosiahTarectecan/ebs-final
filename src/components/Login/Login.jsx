import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { commerce } from '../../lib/Commerce';

const Login = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const history = useLocation();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const trimmedEmail = email.trim(); // remove any whitespace characters
      // Check if the customer exists
      const customer = await commerce.customer.retrieve(trimmedEmail);
      if (!customer) {
        setError('Email address not found');
        return;
      }
      
      // Generate a login token
      const generatedToken = await commerce.customer.generateToken(trimmedEmail, 'customer');
      await commerce.customer.sendToken(trimmedEmail, generatedToken);
    } catch (error) {
      setError('Invalid email address');
    }
  };
  
  
  const handleTokenSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedToken = await commerce.customer.getToken(email, token);
      if (validatedToken) {
        // Log the user in with your own authentication code
        history.push('/contact');
      } else {
        setError('Invalid token');
      }
    } catch (error) {
      setError('Invalid token');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Send token</button>
      </form>
      <form onSubmit={handleTokenSubmit}>
        <label>
          Token:
          <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
