import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import animeImage from '../../assets/ebs1.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${animeImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%',
    padding: 0,
  },

  content: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: theme.spacing(8, 2),
    borderRadius: theme.spacing(2),
  },
  aboutTitle:{
    padding: '10px',
    fontWeight: 'bold',
    color: '#ff3864'
  },
  missionTitle:{
    padding: '10px',
    fontWeight: 'bold',
    color: '#0080ff'
  },
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
        <Typography className={classes.missionTitle} variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography  variant="body1" gutterBottom>
          Our mission is to fuel a shared passion for anime through modest fashion. We believe that fashion can be a powerful form of self-expression, and we want to help you express your love for anime in a unique and stylish way. Join us on our journey to create a community of anime fans who are proud to wear their passion on their sleeves.
        </Typography>
      </div>
    </Container>
  );
};

export default About;
