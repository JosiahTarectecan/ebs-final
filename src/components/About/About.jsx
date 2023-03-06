import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content: {
    padding: theme.spacing(3, 2),
  },
  aboutTitle:{
    padding: '10px',
    fontWeight: 'bold',
    color: 'red'
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.content}>
        <Typography className={classes.aboutTitle} variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          At EastBlueSaga, we bring your favorite anime to life through our high-quality embroidered clothing. 
          Our passion for the anime world drives us to create unique, one-of-a-kind pieces that capture the essence of your favorite characters. 
          From subtle references to full-blown cosplay-inspired outfits, we've got you covered. 
          Join us on our journey to express our love for anime through fashion, and let us help you make a statement that's truly unique.
        </Typography>
        <Typography className={classes.aboutTitle} variant="h4" gutterBottom>
          Mission
        </Typography>
        <Typography  variant="body1" gutterBottom>
        To fuel a shared passion of anime through modest fashion.
        </Typography>
      </div>
    </Container>
  );
};

export default About;
