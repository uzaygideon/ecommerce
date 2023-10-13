import React,{useState,useEffect} from 'react';
import {useForm,FormProvider} from 'react-hook-form';
import CustomTextField from './CustomTextField';
import { Link } from 'react-router-dom';
import {Typography,Button} from '@mui/material';
import PaymentCheckout from './PaymentCheckout';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './Checkout.css';
import commerce from '../../../lib/commerce';

const AddressForm = ({checkoutToken,next}) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [subdivisions, setSubdivisions] = useState([]);
    const [selectedSubdivision, setSelectedSubdivision] = useState('');
    const [shippingOptions,setShippingOptions]=useState([]);
    const [shippingOption,setShippingOption]=useState('');



    const resultArray = Object.entries(countries).map(([code,name]) =>({id:code,label:name}));

    console.log(resultArray);
    
    const resultArrayTwo =Object.entries(subdivisions).map(([code,name]) =>({id:code,label:name}));
    console.log(resultArrayTwo)
    
    const options= shippingOptions.map((sO)=>({id:sO.id,label:`${sO.description}-(${sO.price.formatted_with_symbol})`}))
    console.log(shippingOptions)
    
      
    

    useEffect(() => {
        const fetchCountries = async (checkoutTokenId) => {
          try {
            const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
            setCountries(countries);
            console.log(countries)
            setSelectedCountry(Object.keys(countries)[0])
          } catch (error) {
            console.error('Error fetching countries', error);
          }
        };
    
        fetchCountries(checkoutToken.id);
      }, []); 
    
      useEffect(() => {
        if (selectedCountry) {
          fetchSubdivisions(selectedCountry);
        }
      }, [selectedCountry]);
    
      const fetchSubdivisions = async (countryCode) => {
        try {
          const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
          setSubdivisions(subdivisions);
          setSelectedSubdivision(Object.keys(subdivisions)[0])
        } 
        catch (error) {
          console.error('Error fetching subdivisions', error);
        }
      };
    
    useEffect(()=>{
    if (selectedCountry)fetchSubdivisions(selectedCountry)
    },[selectedCountry])
     
    const fetchShippingOptions = async (checkoutTokenId,country,region=null) => {
    const options =await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region})
    setShippingOptions(options);
    setShippingOption(options[0].id)
    }
    
    useEffect(()=>{
    if(selectedSubdivision) fetchShippingOptions(checkoutToken.id,selectedCountry,selectedSubdivision)
    },[selectedSubdivision])
   


    const methods = useForm();
  return (
    <>
    <FormProvider { ...methods}>
    <form onSubmit={methods.handleSubmit((data)=>next({...data,selectedCountry,selectedSubdivision,shippingOption}))}>
      <div className="custom-grid">
      <CustomTextField required name='firstname' label='First Name' />
      <CustomTextField required name='lastname' label='Last Name'/>
      <CustomTextField required name='address' label='Address'/>
      <CustomTextField required name='email' label='Email'/>
      <CustomTextField required name='city' label='City'/>
      <CustomTextField required name='zip' label='Zip/ Postal Code'/>
      </div>
      <Select value={selectedCountry} fullWidth onChange={(e)=>setSelectedCountry(e.target.value)}>
{   resultArray.map((country)=>(
   <MenuItem key={country.id} value={country.id}>
{country.label}
      </MenuItem>
))}
      
      </Select>
     
      <Select value={selectedSubdivision} fullWidth onChange={(e)=>setSelectedSubdivision(e.target.value)}>
{   resultArrayTwo.map((country)=>(
   <MenuItem key={country.id} value={country.id}>
{country.label}
      </MenuItem>
))}
      
      </Select>

      <Select value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
{   options.map((country)=>(
   <MenuItem key={country.id} value={country.id}>
{country.label}
      </MenuItem>
))}
      
      </Select>
     
      




    </form>
  </FormProvider>
    </>
  )
}

export default AddressForm