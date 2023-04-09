import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.image?.url}
        alt={item.name}
        className={classes.media}
        component="img"
      />
      <CardContent className={classes.cardContent}>
        <div>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">{item.variant?.description || item.variant?.name}</Typography>
        </div>
        <div>
          <Typography variant="subtitle2" color="textSecondary">Price</Typography>
          <Typography variant="h6" color="primary">{item.line_total.formatted_with_symbol}</Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
          >
            -
          </Button>
          <Typography className={classes.quantity} variant="subtitle1">{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="outlined"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
          className={classes.removeButton}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
