


import commerce from '../../../lib/commerce';
import React,{useState,useEffect} from 'react';

import AddressForm from './AddressForm';
import PaymentCheckout from './PaymentCheckout';
function Checkout({cart,onCaptureCheckout,order,error}) {
 
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData,setShippingData]=useState({});
  
 
  
  useEffect(() => {
    const generateCheckoutToken = async () => {
      try {

        const token= await commerce.checkout.generateToken(cart.id,{type:'cart'})
       console.log(token)
        setCheckoutToken(token);
        
      } catch (error) {
        console.error('Error generating checkout token', error);
      }
    };

    generateCheckoutToken();
  },[]);



   // shipiing data logics
    const next = (data)=>{
      setShippingData(data);
    }
  

  return (
    <>
    <p>loading</p>
  
    {checkoutToken ? <AddressForm checkoutToken={checkoutToken} next={next}/>:null}
    {checkoutToken ? <PaymentCheckout checkoutToken={checkoutToken} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout}/>:null}
    
     </>
  )
}

export default Checkout