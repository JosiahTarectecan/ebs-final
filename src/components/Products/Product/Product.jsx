import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Select, MenuItem } from '@material-ui/core';
import { AddShoppingCart } from '@mui/icons-material';

import useStyles from './styles.js';

const Product = ({ product, onAddToCart, handleUpdateProduct }) => {
  const classes = useStyles();

  const [selectedVariant, setSelectedVariant] = useState('');

  const handleVariantSelect = async (e) => {
    setSelectedVariant(e.target.value);

    if (typeof handleUpdateProduct === 'function') {
      await handleUpdateProduct(product.id, e.target.value);
    }
  };
  

  console.log('selectedVariant', selectedVariant, product.id);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography className={classes.productName} variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography className={classes.productPrice} variant="h5">{product.price.formatted_with_code}</Typography>
        </div>
        <Typography className={classes.productDescription} dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        <Typography className={classes.selectLabel} variant="h6">Select a Size & Color</Typography>
        {product.variants?.length ? (
          <Select className={classes.variantSelect} value={selectedVariant} fullWidth onChange={handleVariantSelect}>
            {product.variants.map((variant) => (
              <MenuItem key={variant.id} value={variant.id}>
                {variant.description || variant.name}
              </MenuItem>
            ))}
          </Select>
        ) : null}
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1, selectedVariant)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

  
export default Product;
