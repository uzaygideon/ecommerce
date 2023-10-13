import React from 'react'
import { useState, useEffect }  from 'react'
import { AddIcCall } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bgImg from '../Images/undraw_Fashion_blogging_re_fhi5-removebg.png';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Outlet, Link } from "react-router-dom";
import Badge from '@mui/material/Badge';


import { Footer } from '../HomePageFolder/footer';
import VerticalTabs from './SubShopPageTabs';


const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(200);
  
  
    useEffect(() => {
      // A function that updates the scroll position
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      // Add an event listener for scroll events
      window.addEventListener("scroll", handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return scrollPosition;
  };

function ShopPage({products,productsTwo,productsThree,productsFour,productsFive,totalItems}) {


  


// Use the custom hook to get the scroll position
const scrollPosition = useScrollPosition();

// A state variable that determines if the navbar is visible or not
const [navbarVisible, setNavbarVisible] = useState(false);

// A state variable that determines if the navbar is sticky or not
const [navbarSticky, setNavbarSticky] = useState(false);

useEffect(() => {
  // A function that updates the navbar state based on the scroll position
  const updateNavbarState = () => {
    // If the scroll position is zero, hide the navbar and make it non-sticky
    if (scrollPosition > 200 ) {
      setNavbarVisible(true);
      setNavbarSticky(true);
    }
    // If the scroll position is greater than zero, show the navbar and make it sticky
    else {
      setNavbarVisible(false); 
      setNavbarSticky(false);
    }
  };

  // Call the function to update the navbar state
  updateNavbarState();
}, [scrollPosition]);

// emailjs logics
    


  return (
    <>



    <div className="bgImage">
  <div className="top-component">
    <a href='tel:+22349066832406'><AddIcCall style={{color:'rgb(164,102,68)'}}/> 1234567</a>
    <a href='mailto:"ade@gmail"'> <EmailIcon style={{color:'rgb(164,102,68)'}}/> ade@gmail.com</a>
<div className="con-bgImg">
<Divider  />
      <img src={bgImg} alt="" className='bgImg' />
      <p className='con-spec'>SPEC20<span className='spec'>styling</span></p>
      </div>
      <Link to='/cartLink'> <Badge badgeContent={totalItems} color="primary">
      <ShoppingCartIcon style={{color:'rgb(164,102,68)'}}/>
      </Badge>
    Add To Cart
    </Link>
    <button class="button"> <span>Book an Appointment </span></button>
  </div>
     <div
      className={`navbar ${navbarVisible ? "visible" : "hidden"} ${
        navbarSticky ? "sticky" : ""
      }`}
    >
      {/* Navbar content goes here */}
      <div className="nav-link">
      <Link to='/' style={{color:'rgb(164,102,68);'}}>Home</Link>
      <Divider orientation="vertical" variant="middle"  flexItem sx={{border:'1px solid rgba(228, 226, 226,0.5)'}}/>
      <div className="drop-features">Features <KeyboardArrowDownIcon sx={{fontSize:"0.7rem",textAlign:'right'}}/>
      <ul className='sub-drop-features'>
      <li className='li-features'>pages <KeyboardArrowRightIcon sx={{fontSize:"0.7rem",textAlign:'right'}}/> 
      <ul className='sub-li-features'>
        <a href="1">Gallery</a>
        <a href="2">Our Tailors</a>
        <a href="">Services</a>
      </ul>
      </li>
      <li className='li-features'>Tools <KeyboardArrowRightIcon sx={{fontSize:"0.7rem",textAlign:'right'}}/> 
      <ul className='sub-li-features'>
        <a href="1">Privacy Policy</a>
        <a href="2">Service plus</a>
        
      </ul>
      </li>
      <a href='' className="drop-app">Appointments</a>
      </ul>
      </div>
      <Divider orientation="vertical" variant="middle"  flexItem sx={{border:'1px solid rgba(228, 226, 226,0.5)'}}/>
      <Link to="">About</Link>
      <Divider orientation="vertical" variant="middle"  flexItem sx={{border:'1px solid rgba(228, 226, 226,0.5)'}}/>
      <Link to="" style={{color:'rgb(164,102,68)'}}>Shop</Link>
      <Divider orientation="vertical" variant="middle"  flexItem sx={{border:'1px solid rgba(228, 226, 226,0.5)'}}/>
      <Link to="">News</Link>
      <Divider orientation="vertical" variant="middle"  flexItem sx={{border:'1px solid rgba(228, 226, 226,0.5)'}}/>
      <Link to="/contact" >Contact</Link>
    
    <Outlet/>
      </div>{/* End of div for nav-link*/ }
     
    </div>{/* End of div for navbar tag*/ }
    <div className='cent-text'><span className='spec-2'>shops</span> </div>
 </div>{/* End of div for bg-image*/ }
 <VerticalTabs products={products} 
   productsTwo={productsTwo} productsThree={productsThree}
   productsFour={productsFour} productsFive={productsFive} />{/* the component is inside SubShopPageTabs file */}
<Footer/>
    </>
  )
}

export default ShopPage