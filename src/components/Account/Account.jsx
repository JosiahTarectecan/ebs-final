import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@mui/icons-material";
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_4990074a0f53d5cf83cd1a57ee397bbf8289e32033d57');


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  loader: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  infoBox: {
    marginBottom: theme.spacing(4),
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  infoItem: {
    marginBottom: theme.spacing(1),
  },
  addressBox: {
    marginBottom: theme.spacing(4),
  },
  addressTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  addressItem: {
    marginBottom: theme.spacing(1),
  },
  orderItem: {
    marginBottom: theme.spacing(2),
  },
  orderHeader: {
    marginBottom: theme.spacing(1),
  },
}));





function Account() {
  const classes = useStyles();
  const { login } = useParams();
  const [customerData, setCustomerData] = useState(null);
  const [orders, setOrders] = useState([]);
  

  console.log('loginToken:', login);

  const fetchCustomer = async () => {
    try {
      const customer = await commerce.customer.getToken(login);
      console.log('customer:', customer);
  
      const customerData = await commerce.customer.about(customer.customer_id, {
        type: 'email',
        email: customer.email,
        

      });
  
      setCustomerData(customerData);
      setOrders(customerData.orders);
      console.log('customerData:', customerData);

    } catch (error) {
      console.log('error fetching customer:', error);
    }
  };
  
  

  const fetchOrders = async (customer_id) => {
    const { data } = await commerce.customer.getOrders(customer_id);
    setOrders(data);
    console.log('orders:', data);
    const customer_references = data.map((order) => order.customer_reference);
    console.log(customer_references);
    data.forEach((order) => {
      const customer_reference = order.customer_reference;
      console.log(customer_reference);
    });
  };
  

  const clearOrderHistory = () => {
    setOrders([]);
  };


  useEffect(() => {
    if (customerData) {
      fetchOrders(customerData.id);
    } else {
      fetchCustomer();
    }
  }, [customerData]);


  return (
  <Container maxWidth="md" className={classes.container}>
    {customerData ? (
      <>
        {/* Avatar and basic customer info */}
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatar}>
            <AccountCircle fontSize="large" />
          </Avatar>
          <Box ml={2}>
            <Typography className={classes.heading} variant="h4">{`${customerData.firstname} ${customerData.lastname}`}</Typography>
            <Typography variant="subtitle1">{customerData.email}</Typography>
          </Box>
        </Box>
        <Divider className={classes.divider} />

        {/* Account information and addresses */}
        <Box className={classes.infoBox}>
            <Typography className={classes.infoTitle} variant="h6">Account Information</Typography>
            <Box mt={2}>
              <Typography className={classes.infoItem} variant="subtitle1">
                <strong>Name:</strong> {`${customerData.firstname} ${customerData.lastname}`}
              </Typography>
              <Typography className={classes.infoItem} variant="subtitle1">
                <strong>Email:</strong> {customerData.email}
              </Typography>
              </Box>
            </Box>

    <Box className={classes.addressBox}>
    <Typography className={classes.addressTitle} variant="h6">Default Shipping Address</Typography>

      {customerData.default_shipping && (
        <>
          <Typography className={classes.addressItem} variant="subtitle1">
            <strong>Name:</strong> {customerData.default_shipping.name}
          </Typography>
          <Typography className={classes.addressItem} variant="subtitle1">
            <strong>Street:</strong> {customerData.default_shipping.street}
          </Typography>
          <Typography className={classes.addressItem} variant="subtitle1">
            <strong>City:</strong> {customerData.default_shipping.town_city}
          </Typography>
          <Typography className={classes.addressItem} variant="subtitle1">
            <strong>Zip:</strong> {customerData.default_shipping.postal_zip_code}
          </Typography>
          <Typography className={classes.addressItem} variant="subtitle1">
            <strong>Country:</strong> {customerData.default_shipping.country}
          </Typography>
        </>
      )}
    </Box>
          <Grid item xs={12} md={6} lg={8}>
            <Typography className={classes.heading} variant="h4">Order History</Typography>
            <Box display="flex" flexDirection="column" mt={2}>
              {orders && orders.length > 0 ? (
                orders.map((order) => (
                  <Box key={order.id} className={classes.orderItem}>
                    <div className={classes.orderHeader}>
                    <Typography variant="h6" gutterBottom>
                      Order Number: {order.customer_reference}  Total:{" "}
                      {order.order_value.formatted_with_symbol}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Status: {order.status}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Date: {new Date(order.created * 1000).toLocaleDateString()}
                    </Typography>
                    <Divider className={classes.divider} />
                    </div>
                  

                  </Box>
                  
                ))
              ) : (
                <Typography variant="subtitle1">No order history.</Typography>
              )}
            </Box>
            <Button variant="contained" onClick={clearOrderHistory}>
    Clear Order History
  </Button>
          </Grid>
      </>
    ) : (
      <Typography variant="h4" className={classes.loader}>Loading...</Typography>
    )}
  </Container>
);

  
}

export default Account;