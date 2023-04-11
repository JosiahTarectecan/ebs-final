import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, InputBase, ThemeProvider} from '@material-ui/core';
import { ShoppingCart, Search } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';

import logo from '../../assets/Eastbluesagalogo2.png';
import useStyles from './styles';
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 960, // Medium devices (tablets)
        lg: 1280, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
    // ... other theme options
  });
  
  
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <>
        <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}

    <AppBar position="static" className={classes.appBar} color="inherit">
    <Toolbar>
        <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height="50px" className={classes.image}/>
            EastBlueSaga
        </Typography>
        
        <div className={classes.centerButtons}>
        <IconButton component={Link} to="/" aria-label="Homepage" color="inherit">
              <Badge>
                  <Typography variant="body2">Home</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/about" aria-label="Show products" color="inherit">
              <Badge>
                  <Typography variant="body2">About</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/products" aria-label="Products" color="inherit">
              <Badge>
                  <Typography variant="body2">Products</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/login" aria-label="Login" color="inherit">
              <Badge>
                  <Typography variant="body2">Login</Typography>
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/contact" aria-label="Contact" color="inherit">
              <Badge>
                  <Typography variant="body2">Contact</Typography>
              </Badge>
          </IconButton>
        
          
        </div>


        {location.pathname === '/products' && (
        <div className={classes.staticButtons}>
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
        </ThemeProvider>

    </>
  )
}


export default Navbar;