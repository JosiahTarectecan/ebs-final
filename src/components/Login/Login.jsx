import React, { useState } from 'react';
import axios from 'axios';
import emailjs from "@emailjs/browser";

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [token, setToken] = useState('');
  
  const sendTokenEmail = () => {
    emailjs.send('service_h4mqnse', 'template_3vbidxe', {
      to_email: email,
      login_token: token,
    }, 'uSmdTlqLKqsYOfzEP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.chec.io/v1/customers/login_tokens', {
        email,
      }, {
        headers: {
          'X-Authorization': 'pk_test_4990074a0f53d5cf83cd1a57ee397bbf8289e32033d57',
        },
      });
      console.log(response);
      setIsEmailSent(true);
      setToken(response.data.login_token);
      sendTokenEmail();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {!isEmailSent ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Send Login Token</button>
        </form>
      ) : (
        <div>
          <p>A login token has been sent to your email. Please check your inbox and enter the token below:</p>
          {/* Redirect the customer to the token page component */}
          <label htmlFor="token">Token:</label>
          <input type="text" id="token" value={token} onChange={(e) => setToken(e.target.value)} required />
          <button type="submit">Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
