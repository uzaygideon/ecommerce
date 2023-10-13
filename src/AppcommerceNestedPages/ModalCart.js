import React from 'react'
import { useState,useEffect } from 'react';
import {Typography,Button} from '@mui/material';
import './ModalCart.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import commerce from '../lib/commerce';
import AddIcon from '@mui/icons-material/Add';import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CloseIcon from '@mui/icons-material/Close';
import { blueGrey,deepOrange  } from '@mui/material/colors';
import ShopForAll from './first-sec-shop-all';
import { Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary:blueGrey,
    secondary:deepOrange,
  },
});

function ModalCart() {
 
    const [cart, setCart] = useState({});

    useEffect(() => {
      commerce.cart.retrieve()
          .then((cart)=> {
              setCart(cart)
          });

  },[]);

  


  const handleUpdateCartQty = async (productId,quantity) => {
    const response= await commerce.cart.update(productId,{quantity})
    setCart(response.cart);
    }
    const handleRemoveFromCart = async (productId)=>{
      const response = await commerce.cart.remove(productId)
      setCart(response.cart)
    }
    
    const handleEmptyCart = async () =>{
      const response = await commerce.cart.empty()
      setCart(response.cart)
    }




const EmptyCart = () =>(
  <>
<Typography sx={{width:'60%'}}>
    You have not item in your shopping cart,start adding some
</Typography>
<Button component={Link} to='/commerceapp' variant="contained" color="warning" size='small' >
  Back to Shopping
</Button>
</>
)


const FilledCart = () =>(
<>
{/* cart.line_items map */}
{cart.line_items.map((item)=>(
    <>
    <div className="itemlist-container">
      <p>Products</p>
      <p>Price</p>
      <p>Quantity</p>
    </div>
      <div className="cart-container">
        
        <div className="cart-sub-container">
        <span className="icon-removal" onClick={() => handleRemoveFromCart(item.id)}>
          <CloseIcon/>
        </span>
      <img src={item.image.url} alt={item.name} className='cart-image' />
       <p>{item.name}</p>
       </div> 
       <p className="raw-price">{item.line_total.formatted}</p>
       <div className="increment">
       <Button variant='outlined' color="error" size='small' onClick={() => handleUpdateCartQty(item.id,item.quantity - 1)} >
        <HorizontalRuleIcon/></Button>
       <Typography>{item.quantity}</Typography>
       <Button variant='outlined' color="error" size='small' onClick={() => handleUpdateCartQty(item.id,item.quantity + 1)}><AddIcon/></Button>
       </div>{/*end of div for increment */}
       </div>{/*end of div for cart-container */}
    </>
))}

{/* cart.sub-total */}
<h2 className='h2-float'>Subtotal:{cart.subtotal.formatted_with_symbol}</h2>
<Button component={Link} to='/commerceapp' variant="contained" color="secondary" size='small' >
  Back To Shop
</Button>
<ThemeProvider theme={theme}>
<div className="mui-btn-con">
<Button component={Link} to='/checkout' variant="contained" color="secondary" size='small' >
  Checkout 
</Button>
<Button variant="contained" color="primary" size='small' onClick={handleEmptyCart}>
  Empty Cart
</Button>
</div>
<div style={{clear:'both'}}></div>
</ThemeProvider>
</>
)


if(!cart.line_items) return 'loading..'
console.log(cart)

  return (
    <>
 <ShopForAll/>
    <Typography sx={{textAlign:'center', fontSize:'1.3rem',marginTop:'2%'}}>Your shopping Cart</Typography>
     {!cart.line_items.length ? <EmptyCart/>:<FilledCart/>} 
    </>
  )

}

export default ModalCart