import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography} from '@material-ui/core';
import Commerce from '@chec/commerce.js';
import styled from 'styled-components';

const commerce = new Commerce('pk_test_4990074a0f53d5cf83cd1a57ee397bbf8289e32033d57');

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [token, setToken] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await commerce.customer.login(email, 'http://localhost:3000/account');
      console.log('result:', result);
      setToken(result.token);
      console.log('token:', result.token);
      setIsEmailSent(true); // move setIsEmailSent after sendTokenEmail to ensure token is set before sending email
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <LoginContainer>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!isEmailSent ? (
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="h5" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" />
            <Button style={{ 
  width: '100%',
  marginTop: '1.5rem',
  padding: '1rem',
  backgroundColor: '#254ccc',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  fontSize: '1.2rem',
  cursor: 'pointer' }} variant="contained" color="primary" type="submit" fullWidth>Send Login Token</Button>
          </form>
        </Box>
      ) : (
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', textAlign: 'center' }}>
  <Typography variant="h5" sx={{ color: '#254ccc', fontWeight: 'bold' }} gutterBottom>Login Token</Typography>
  <Typography variant="body1" sx={{ color: '#333', fontSize: 18 }} gutterBottom>If you exist in our system as a customer</Typography>
<Typography variant="body1" sx={{ color: '#333', fontSize: 18 }} gutterBottom>A login token will be sent to your email</Typography>
</Box>

      )}
    </div>
    </LoginContainer>

  );

};


export default Login;
