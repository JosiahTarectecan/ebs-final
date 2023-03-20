import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles.js';


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
    <Typography className={classes.message}>Please contact to create a custom order</Typography>
            <div className={classes.toolbar}/>
        <Grid container justifyContent="center" alignItems='center' spacing={4}>
        {products.map((product) => (
           <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
        ))}
        </Grid>
    </main>   
    );
}

export default Products;