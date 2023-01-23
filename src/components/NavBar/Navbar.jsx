import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@mui/material';
import { ClassNames } from '@emotion/react';

const Navbar = () => {
  return (
    <>
    <AppBar position="fixed" className={ClassNames.appBar} color="inherit">
    <Toolbar>
        <Typography variant='h6' className={classes.title} color='inherit'>
            <img src='' alt='Commerce.js' height="25px" className={classes.image}/>
            EastBlueSaga
        </Typography>
    </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar