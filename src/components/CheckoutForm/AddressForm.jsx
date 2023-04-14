import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider, useFormState} from 'react-hook-form';

import {Link} from 'react-router-dom';
import {commerce} from '../../lib/Commerce';
import FormInput from './CustomTextField';

const AddressForm = ({checkoutToken, next}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  // Fetch shipping countries using the checkout token ID

  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

    // Fetch subdivisions using the checkout token ID and selected country code

  const fetchSubdivisions = async (tokenId, countryCode) => {
    const {subdivisions} = await commerce.services.localeListShippingSubdivisions(tokenId, countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);


  }

    // Fetch shipping options using the checkout token ID, selected country, and selected subdivision

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region: stateProvince});
    

    setShippingOptions(options);
    setShippingOption(options[0].id);
  }

    // Fetch shipping countries when the component mounts
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, []);

    // Fetch subdivisions when the selected country changes
  useEffect(() =>{
    if(shippingCountry) fetchSubdivisions(checkoutToken.id, shippingCountry);
  }, [shippingCountry]);

    // Fetch shipping options when the selected subdivision changes
  useEffect(() =>{
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  return (
    <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption }))}>
            <Grid container spacing={3}>
              <FormInput required name='firstName' label='First name' />
              <FormInput required name='lastName' label='Last name' />
              <FormInput required name='address1' label='Address' />
              <FormInput required name='email' label='Email' />
              <FormInput required name='city' label='City' />
              <FormInput required name='zip' label='ZIP / Postal code' />
              
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                  {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item)  => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                  {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
                
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                  {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <br />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
              <Button type='submit' variant="contained" color="primary">Next</Button>
            </div>
          </form>
        </FormProvider>
    </>
  );
  };

export default AddressForm;
