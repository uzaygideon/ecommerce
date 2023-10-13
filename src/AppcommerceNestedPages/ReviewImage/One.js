import React , { useState,useEffect } from 'react';
import commerce from 'C:/Users/HP/Documents/RealTime-Ecommerce/frontend/src/lib/commerce.js';
import ImageGallery from 'react-image-gallery'
import {images} from './ImageGallery'
import { imagesTwo } from './ImageGallery';
import './One.css'
import ShopForAll from '../first-sec-shop-all';
function One({onAddToCart,totalItems}) {

  const [producta, setProducta] = useState([]);
  const [productb, setProductb] = useState([])
   

  const fetchProducts = () => {
      commerce.products.list({
        query:'Products-One',
      }).then((producta) => {
        setProducta(producta.data);
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }
    useEffect(() => {
      fetchProducts();
    }, []);
    console.log(producta);

    const fetchProductsAgain = () => {
      commerce.products.list({
        query:'editor',
      }).then((productb) => {
        setProductb(productb.data);
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }
    useEffect(() => {
      fetchProductsAgain();
    }, []);
    console.log(productb);

  
  return (
    <>
    <ShopForAll totalItems={totalItems}/>
    <div className="whole-container">
    <div className="gallery-container">
     <ImageGallery 
     items={images}
     thumbnailPosition={'left'}
     showNav={false} />
    </div>
    <div className="text-container">
     
     {producta.map((item)=>(
      <>
       <h3>{item.price.formatted_with_symbol}</h3>
      </>
     ))}
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Minima maxime consectetur quia eum quisquam quibusdam veniam in laudantium 
        dignissimos, amet aliquid repellendus vel similique corrupti! Odit tempore officiis omnis quae?</p>
        <button onClick={()=>onAddToCart(producta[0].id,1)} className='btn-style'>Add To Cart</button>
    </div>{/* the closing tag for text-container */}
    </div>{/* the closing tag for whole-container */}


    <div className="whole-container-2">
    <div className="gallery-container">
     <ImageGallery 
     items={imagesTwo}
     thumbnailPosition={'left'}
     showNav={false} />
    </div>
    <div className="text-container">
     
     {productb.map((item)=>(
      <>
       <h3>{item.price.formatted_with_symbol}</h3>
      </>
     ))}
     
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Minima maxime consectetur quia eum quisquam quibusdam veniam in laudantium 
        dignissimos, amet aliquid repellendus vel similique corrupti! Odit tempore officiis omnis quae?</p>
        <button onClick={()=>onAddToCart(productb[0].id,1)} className='btn-style'>Add To Cart</button>
    </div>{/* the closing tag for text-container */}
    </div>{/* the closing tag for whole-container */}


    </>
  )
}

export default One