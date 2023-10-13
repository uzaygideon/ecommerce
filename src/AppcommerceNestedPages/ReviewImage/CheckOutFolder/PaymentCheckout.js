import React from 'react';
import { Link } from 'react-router-dom';
import {Typography,Button,Divider} from '@mui/material';
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const stripePromise =loadStripe('pk_test_536821940c9a3a56594798c910d03221f2e0005c0016e')

function PaymentCheckout({checkoutToken,shippingData,onCaptureCheckout}) {
   
  const handleSubmit= async (event,elements,stripe)=>{
    event.preventDefault();
 
  if(!stripe || !elements) return;

  const cardElement =elements.getElement(CardElement);

const {error, paymentMethod } = await stripe.createPaymentMethod({type:'card',card:cardElement});

if(error){
  console.log(error);
}
else{
  const orderData={
    line_items:checkoutToken.live.live_items,
    customer:{firstname:shippingData.firstname,lastname:shippingData.lastname,email:shippingData.email},
    shipping:{
      name:'Primary',
      street:shippingData.address,
      town_city:shippingData.city,
      country_state:shippingData.selectedSubdivision,
      postal_zip_code:shippingData.zip,
      country:shippingData.selectedCountry,
    },
    fulfillment:{shipping_method:shippingData.shippingOption},
    payment:{
      gateway:'stripe',
      stripe:{
        payment_method_id: paymentMethod.id
      }
    }
  }
  onCaptureCheckout(checkoutToken.id,orderData)
}

  }
  return (
    <>
    <div>
        {checkoutToken.live.line_items.map((product)=>(
           <>
           <p>{product.name}</p>
            <p>{product.line_total.formatted_with_symbol}</p>
            </>
        ))}
    </div>
           <Elements stripe={stripePromise}>
             <ElementsConsumer>
      {({elements,stripe})=>(
                  <form onSubmit={(e)=> handleSubmit(e,elements,stripe)}>
         <CardElement/>
       <br/> <br/>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <Button component={Link} to='/cartLink' variant="contained" color="secondary" size='small' >
  Back To Cart
</Button>
<Button variant='contained' disabled={!stripe}>
    Pay{checkoutToken.live.subtotal.formatted_with_symbol}
</Button>
       </div>
    </form>
           )}
                </ElementsConsumer>
            </Elements>
    </>
  )
}

export default PaymentCheckout