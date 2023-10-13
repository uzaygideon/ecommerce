import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomeStoreFiles } from './HomePageFolder/HomeStoreFiles';
import ContactPage from "./ContactPage";
import AppCommerce from "./lib/AppCommerce";
import ItemOne from './AppcommerceNestedPages/ReviewImage/One'
import { useState,useEffect } from "react";
import commerce from './lib/commerce'
import ModalCart from "./AppcommerceNestedPages/ModalCart";
import Checkout from "./AppcommerceNestedPages/ReviewImage/CheckOutFolder/Checkout";

function App() {
 

  const [cart, setCart] = useState({})
  const [order,setOrder] =useState({});
   const [errorMessage,setErrorMessage]= useState('')
 
  useEffect(() => {
    commerce.cart.retrieve()
        .then((cart)=> {
            setCart(cart)
        })

},[])
console.log(cart)



const handleAddToCart = async (productId,quantity) => {
const response = await commerce.cart.add(productId,quantity)
setCart(response.cart);
}

const refreshCart = async ()=>{
  const newCart =await commerce.cart.refresh();
  setCart(newCart);
}

const handleCaptureCheckout= async (checkoutTokenId,newOrder)=>{
  try {
    const incomingOrder= await commerce.checkout.capture(checkoutTokenId,newOrder)

    setOrder(incomingOrder);
    refreshCart()
  } catch (error) {
    setErrorMessage(error.data.error.message)
  }
} 

  return (
    <>
      <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
      <Route index element={<HomeStoreFiles/>} />
      <Route path="contact" element={<ContactPage totalItems={cart.total_items} />} />
      <Route path='commerceapp' element={<AppCommerce  totalItems={cart.total_items}/>}/>
      <Route path="one" element={<ItemOne  onAddToCart={handleAddToCart} totalItems={cart.total_items} />}/>
      <Route path='cartLink' element={<ModalCart/>} />
      <Route path='checkout' element={<Checkout  cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>} />
    </Routes>
 </BrowserRouter>
    </>
  );
}

export default App;
