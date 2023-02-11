import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac dui auctor, sit amet aliquam libero blandit. 
        Aliquam consectetur est eget neque eleifend, vitae gravida enim tincidunt. Quisque id nulla at metus tempor condimentum.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sed tempor, est eget commodo faucibus, velit magna commodo velit, vel malesuada mauris nisl non tellus. 
        Nam non commodo ligula. Curabitur fringilla, odio at suscipit gravida, odio orci bibendum odio, id euismod nisi nisi non est.
      </Typography>
    </Container>
  );
};

export default About;
