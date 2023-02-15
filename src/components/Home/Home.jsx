import React from 'react'
import videoBg from './vid/videoplayback_Trim.mp4';
import useStyles from './styles'
import { Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';



const Home = () => {
  const classes = useStyles();

  return (
    <body className={classes.root}>
    <div className={classes.main}>
      <div className={classes.overlay}></div>
      <video className={classes.video} src={videoBg} autoPlay loop muted />
      <div className={classes.content}>
      <Typography variant="h2" gutterBottom>
      EastBlueSaga
      </Typography>

      <Button component={Link} to="/products" variant="contained" size="large" color="primary">
      Visit Our Products
      </Button>
      </div>
    </div>
    </body>
  )
}


export default Home