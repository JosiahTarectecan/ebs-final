import React from 'react';
import videoBg from './vid/videoplayback_Trim.mp4';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
    marginLeft: '-10px',
    marginBottom: '-50px',
    marginRight: '-20px',
  },
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.overlay}></div>
        <video className={classes.video} src={videoBg} autoPlay loop muted />
        <div className={classes.content}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h2" gutterBottom>
                EastBlueSaga
              </Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Visit Our Products
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
