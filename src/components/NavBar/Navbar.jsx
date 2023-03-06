import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, InputBase} from '@material-ui/core';
import { ShoppingCart, Search } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/Eastbluesagalogo2.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <>
    <AppBar position="static" className={classes.appBar} color="inherit">
    <Toolbar>
        <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height="50px" className={classes.image}/>
            EastBlueSaga
        </Typography>
        
        <div className={classes.centerButtons}>
          <IconButton component={Link} to="/about" aria-label="Show products" color="inherit">
              <Badge>
                  <Typography variant="body2">About</Typography>
              </Badge>
          </IconButton>

          <IconButton component={Link} to="/" aria-label="Homepage" color="inherit">
              <Badge>
                  <Typography variant="body2">Home</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/products" aria-label="Products" color="inherit">
              <Badge>
                  <Typography variant="body2">Products</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/contact" aria-label="Contact" color="inherit">
              <Badge>
                  <Typography variant="body2">Contact</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/login" aria-label="Login" color="inherit">
              <Badge>
                  <Typography variant="body2">Login</Typography>
              </Badge>
          </IconButton>
        </div>


        
        <div className={classes.grow}/>
        {location.pathname === '/products' && (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Search />
            </div>
            <InputBase
                placeholder="Search products…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        )}
        {location.pathname === '/products' && (
        <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary' overlap="rectangular">
                    <ShoppingCart />
                </Badge>
            </IconButton> 

            <IconButton>
                <Badge>
                    
                </Badge>
            </IconButton>
        </div> )}
    </Toolbar>
    </AppBar>
    </>
  )
}


export default Navbar;