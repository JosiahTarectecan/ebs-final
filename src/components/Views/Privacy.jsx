import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';

export default function Privacy() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          At EastBlueSaga, we take your privacy seriously. This privacy policy explains how we use any personal information we collect about you when you use our website.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          1. Information we collect about you
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We collect personal information about you when you register with us or place an order for products or services. We also collect information when you voluntarily complete customer surveys, provide feedback, and participate in competitions. Website usage information is collected using cookies.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          2. How we use your information
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We use your information to process orders, manage your account, and to email you about other products and services we think may be of interest to you. We use your information collected from the website to personalize your repeat visits to our website.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          3. Marketing
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We would like to send you information about products and services of ours that we think may be of interest to you. If you have consented to receive marketing, you may opt out at a later date. You have a right at any time to stop us from contacting you for marketing purposes.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          4. Access to your information and correction
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You have the right to request a copy of the information that we hold about you. If you would like a copy of some or all of your personal information, please email or write to us. We want to make sure that your personal information is accurate and up to date. You may ask us to correct or remove information you think is inaccurate.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          5. Cookies
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Cookies are text files placed on your computer to collect standard internet log information and visitor behavior information. This information is used to track visitor use of the website and to compile statistical reports on website activity. For further information visit www.aboutcookies.org or www.allaboutcookies.org. You can set your browser not to accept cookies and the above websites tell you how to remove cookies from your browser. However in a few cases some of our website features may not function as a result.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          6. Changes to our privacy policy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
        We keep our privacy policy under regular review and we will place any updates on this web page. This privacy policy was last updated on 1st January 2023.
</Typography>
</Container>
</Box>
);
}