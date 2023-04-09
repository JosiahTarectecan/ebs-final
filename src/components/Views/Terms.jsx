import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, List, ListItem } from '@material-ui/core';

export default function Terms() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Welcome to EastBlueSaga. By using this website, you agree to be bound by the following terms and conditions:
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          These terms and conditions govern your use of our website; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          2. Intellectual Property Rights
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          3. License to Use Website
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          4. Acceptable Use
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          5. Limitations of Liability
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:
        </Typography>
        <List>
          <ListItem><Typography>- For any indirect, special or consequential loss; or </Typography></ListItem>
          <ListItem><Typography>- For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data. </Typography></ListItem>
        </List>
        <Typography variant="h6" component="h2" gutterBottom>
          6. Variation
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We may revise these terms and conditions from time-to-time. The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on our website. Please check this page regularly to ensure you are familiar with the current version.
</Typography>
<Typography variant="h6" component="h2" gutterBottom>
7. Entire Agreement
</Typography>
<Typography variant="body1" component="p" gutterBottom>
These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website and supersede all previous agreements in respect of your use of this website.
</Typography>
<Typography variant="h6" component="h2" gutterBottom>
8. Governing Law and Jurisdiction
</Typography>
<Typography variant="body1" component="p" gutterBottom>
These terms and conditions will be governed by and construed in accordance with the laws of Canada, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Canada.
</Typography>
</Container>
</Box>
);
}




