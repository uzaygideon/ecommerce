import React from 'react';
import './SixHomeSec.css';
import {Box,Divider} from '@mui/material';
import { Link } from 'react-router-dom';


function SixHomeSec({commerceLists}) {
  return (
    <>
     <Box sx={{backgroundColor:'rgb(249,248,248)',pt:'3%' }}>
        <p className="ready-to-wear">ready to wear</p>

    <Divider sx={{width:'40%',margin:'auto',color:'rgb(228, 91, 17)',marginTop:'2%'}}>ONLINE STORE</Divider>

    <div className="online-whole">
    <div className="commerce-whole-1">
        <Link to=''>
      <img src={commerceLists.imgFour} className="commerce-img-whole" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first'>
        Slim Fit 2pc Black Mini Checkered Suit</p></Link>
      <p className='customer-second'>
#15,000 - # 20,000
</p>
<div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
   <div className="commerce-whole-1">
        <Link to=''>
      <img src={commerceLists.imgFour} className="commerce-img-whole" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first'>
        Slim Fit 2pc Black Mini Checkered Suit</p></Link>
      <p className='customer-second'>
#20,000 - # 22,000
</p>
<div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
   <div className="commerce-whole-1">
        <Link to=''>
      <img src={commerceLists.imgFour} className="commerce-img-whole" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first'>
        Slim Fit 2pc Black Mini Checkered Suit</p></Link>
      <p className='customer-second'>
#15,000 - # 20,000
</p>
<div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
   <div className="commerce-whole-1">
        <Link to=''>
      <img src={commerceLists.imgFour} className="commerce-img-whole" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first'>
        Slim Fit 2pc Black Mini Checkered Suit</p></Link>
      <p className='customer-second'>
#15,000 - # 20,000
</p>
<div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
   </div>{/* end of div tag for avatar-whole */}

   <div className="last-bg-img">
  <div className="another-overlay">
    <div className="overlay-flex-one">
      <p className="text-one">the latest styles & trends</p>
      <p className="text-two">  Providing you with maximum level of comfort & confidence in every suit !</p>
    </div>
    <div className="overlay-flex-two">
    <Link to=""><button class="button-3" > 
    <span> view our custom collections</span></button></Link>
    </div>
  </div>
  </div>{/* end of div tag for last-bg-img */}

    </Box> 

 </>
  )
}

export default SixHomeSec