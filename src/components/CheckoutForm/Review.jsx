import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({ checkoutToken }) => {
  // Calculate the total price by adding the subtotal and the shipping price
  const totalPrice = checkoutToken.subtotal.raw + checkoutToken.shipping_methods[1].price.raw;

  return (
    <>
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
          <ListItem style={{padding: '10px 0'}} key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
            <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">
            {checkoutToken.shipping_methods[1].price.formatted_with_symbol}
          </Typography>
        </ListItem>
        <ListItem style={{padding: '10px 0'}}>
          <ListItemText primary="Total"/>
          <Typography variant='subtitle1' style={{fontWeight: 700}}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}

export default Review
