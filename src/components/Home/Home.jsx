import React from 'react'
import videoBg from './vid/videoplayback_Trim.mp4';
import './vid/index.css'
import { Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';



const Home = () => {
  return (
    <body>
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
      <Typography variant="h2" gutterBottom>
      Welcome
      </Typography>
      <Typography variant="h2" gutterBottom>
      To
      </Typography>
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