import React, {useState, useEffect} from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {commerce} from '../../../lib/Commerce'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';


const steps = ['Shipping address', 'Payment details'];



const Checkout = ({cart, onCaptureCheckout, order, error}) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();

    const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);

    };
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
    const generateToken = async () => {
      if (!cart || !cart.id) {
        return;
      }
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
        console.log(token);
        setCheckoutToken(token);
      } catch(error) {
        console.error(error);
      }
    }
    generateToken();
  }, [cart]);


    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    let Confirmation = () => order.customer ? (
        <>
        <div>
            <Typography variant='h5'>Thank you for shopping with EastBlueSaga, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider}/>
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div> 
        <br />
        <Button component={Link} to="/" variant='outlines' type='button'>Back to Home</Button>
        </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress/>
      </div>
    );

    if(error){
      <>
      <Typography variant="h5">Error: {error}</Typography>
      <br/>
      <Button component={Link} to="/" variant='outlines' type='button'>Back to Home</Button>
      </>
    }

    const Form = () => (activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken} next={next} /> 
        : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

        
    return (
        <>
        <CssBaseline/>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Typography variant="h4" align='center'>Checkout</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
                <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
        </main>
        </>
    )
}

export default Checkout