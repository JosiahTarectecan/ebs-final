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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      maxWidth: "800px",
    },
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    marginRight: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0),
    backgroundColor: "#333333",
    height: "1px",
  },
  heading: {
    color: "#333333",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  subheading: {
    color: "#333333",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  content: {
    color: "#333333",
    marginBottom: theme.spacing(4),
    textAlign: "left",
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  loader: {
    textAlign: "center",
  },
  infoBox: {
    width: "50%", // add this
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  infoTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  infoItem: {
    marginBottom: theme.spacing(1),
  },
  addressBox: {
    width: "50%", // add this

    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  addressTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  addressItem: {
    marginBottom: theme.spacing(1),
  },
  orderItem: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.spacing(1),
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  orderProduct: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  orderImage: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  orderProductName: {
    fontWeight: 'bold',
    fontSize: '1rem',
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