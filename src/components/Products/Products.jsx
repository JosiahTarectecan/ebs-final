import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles.js';

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
    <main className={classes.content}>
      <Typography className={classes.message}>
        Please contact to create a custom order
      </Typography>
      <div className={classes.toolbar} />
      <TextField
        id="search"
        label="Search Products"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
        style={{ width: '350px', paddingBottom: '30px' }}
        />
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
