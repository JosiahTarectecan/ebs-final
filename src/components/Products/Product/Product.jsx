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
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_code}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        <Typography variant="h5">Select a Size & Color</Typography>
        {product.variants?.length ? (
          <Select value={selectedVariant} fullWidth onChange={handleVariantSelect}>
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