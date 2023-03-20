import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
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
import {commerce}  from "../../lib/Commerce";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function Account() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    commerce.customer
      .about()
      .then((result) => setUser(result))
      .catch((error) => console.log(error));
    commerce.customer
      .orders()
      .then((result) => setOrders(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Box display="flex" alignItems="center">
        <Avatar className={classes.avatar}>
          <AccountCircle fontSize="large" />
        </Avatar>
        <Box ml={2}>
          <Typography variant="h4">{user ? user.firstname : "Loading..."}</Typography>
          <Typography variant="subtitle1">{user ? user.email : "Loading..."}</Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Account Information</Typography>
          <Box mt={2}>
            <Typography variant="subtitle1">
              <strong>Name:</strong> {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Email:</strong> {user ? user.email : "Loading..."}
            </Typography>
          </Box>
          <Box mt={2}>
            <Link component={RouterLink} to="/edit-account">
              <Button variant="contained" color="primary">
                Edit Account
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Order History</Typography>
          <Box mt={2}>
            {orders.length > 0 ? (
              orders.map((order) => (
                <Box key={order.id}>
                  <Typography variant="subtitle1">
                    Order Number: {order.id} - Total: {order.total.formatted_with_symbol}
                  </Typography>
                  <Typography variant="subtitle2">Status: {order.status}</Typography>
                  <Typography variant="subtitle2">Date: {order.created}</Typography>
                  <Link component={RouterLink} to={`/order/${order.id}`}>
                    View Order Details
                  </Link>
                  <Divider className={classes.divider} />
               
                  </Box>
          ))
        ) : (
          <Typography variant="subtitle1">No order history.</Typography>
        )}
      </Box>
    </Grid>
  </Grid>
</Container>
);
}

export default Account;