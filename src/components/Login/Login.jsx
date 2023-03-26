import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography} from '@material-ui/core';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_4990074a0f53d5cf83cd1a57ee397bbf8289e32033d57');

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [token, setToken] = useState('');
  const [loginToken, setLoginToken] = useState('');

  const sendTokenEmail = () => {
    console.log("login_token:", token);

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
      const result = await commerce.customer.login(email, 'http://localhost:3000/login');
      console.log('result:', result);
      setIsEmailSent(true);
      setToken(result.token);
      console.log('token:', result.token);
      sendTokenEmail();
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log('loginToken:', loginToken);
    try {
      const result = await commerce.customer.loginWithToken(loginToken);
      console.log('login result:', result);
      // handle successful login
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!isEmailSent ? (
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="h5" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" />
            <Button variant="contained" color="primary" type="submit" fullWidth>Send Login Token</Button>
          </form>
        </Box>
      ) : (
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="h5" gutterBottom>Enter Login Token</Typography>
          <Typography variant="body1" gutterBottom>A login token has been sent to your email. Please check your inbox and enter the token below:</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField id="token" label="Token" type="text" value={loginToken} onChange={(e) => setLoginToken(e.target.value)} fullWidth required margin="normal" />
            <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
          </form>
        </Box>
      )}
    </div>
  );
};


export default Login;
