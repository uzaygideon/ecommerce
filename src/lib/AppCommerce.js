import React , { useState,useEffect } from 'react';
import commerce from './commerce';
import ShopPage from '../AppcommerceNestedPages/ShopPage';



function AppCommerce({totalItems}) {
    const [products, setProducts] = useState([]);
    const [productsTwo,setProductsTwo]=useState([])
  const [productsThree,setProductsThree]=useState([])
  const [productsFour,setProductsFour]=useState([])
  const [productsFive,setProductsFive]=useState([])


  const fetchProducts = () => {
    commerce.products.list({
      query:'Products-One',
    }).then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  useEffect(() => {
    fetchProducts();

  }, []);
  console.log(products);



  const fetchProductsAgain = () => {
     commerce.products.list({
    query:'editor',
  }).then((productsTwo) => {
    setProductsTwo(productsTwo.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });


  commerce.products.list({
    query:'third',
  }).then((productsThree) => {
    setProductsThree(productsThree.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });

  commerce.products.list({
    query:'four',
  }).then((productsFour) => {
    setProductsFour(productsFour.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });

  commerce.products.list({
    query:'five',
  }).then((productsFive) => {
    setProductsFive(productsFive.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });
}

useEffect(() => {
  fetchProductsAgain();

}, []);
console.log(productsTwo)

   
 
      return (
      <>
      <ShopPage products={products}   
      productsTwo={productsTwo} productsThree={productsThree}
      productsFour={productsFour} productsFive={productsFive}
      totalItems={totalItems}
      />


  {/* section for the fetch commerce js listing,which would be later */}
      </>
      )
  
}

export default AppCommerce