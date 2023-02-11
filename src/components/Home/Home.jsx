import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
const Home = () => {
    const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        HI
      </Typography>
      <Typography variant="body1" gutterBottom>
        HI
      </Typography>
    </Container>
  )
}

export default Home