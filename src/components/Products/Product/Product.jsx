import React, {useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Select, MenuItem} from '@material-ui/core';
import {AddShoppingCart} from '@mui/icons-material';

import useStyles from './styles.js';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleVariantChange = (event) => {
    const variantId = event.target.value;
    const variant = product.variants.find((v) => v.id === variantId);
    setSelectedVariant(variant);
    console.log("selected variant ID:", variantId);
console.log("selected variant:", variant);

  };
        
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5">
                {product.price.formatted_with_code}
            </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color='textSecondary'/>

            <Select className={classes.select} value={selectedVariant.id} onChange={handleVariantChange}>
          {product.variants.map((variant) => (
            <MenuItem key={variant.id} value={variant.id}>
              {variant.name}
            </MenuItem>
          ))}
          </Select>

        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={ () => onAddToCart(selectedVariant.id, 1)}>
            <AddShoppingCart />
        </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;

