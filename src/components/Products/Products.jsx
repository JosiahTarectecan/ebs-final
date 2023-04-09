import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles.js';
import AppFooter from '../Views/AppFooter'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.pageContainer}>
      <main className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Our Products
        </Typography>
        <Typography className={classes.message}>
          Please contact us to create a custom order.
        </Typography>
        <div className={classes.searchContainer}>
          <TextField
            id="search"
            label="Search Products"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
            margin="normal"
            className={classes.searchField}
          />
        </div>
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      <AppFooter />
    </div>
  );
};

export default Products;
