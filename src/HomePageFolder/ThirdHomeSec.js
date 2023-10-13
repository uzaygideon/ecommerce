import React from 'react'
import { Box,Divider} from '@mui/material'
import './ThirdHomeSec.css'
import InputIcon from '@mui/icons-material/Input';
import { Link } from 'react-router-dom';
function ThirdHomeSec() {
  return (
    <>
    <Box sx={{backgroundColor:'rgb(249,248,248)',pt:'2%' }}>
    <Divider sx={{fontWeight:'bold',width:'40%',margin:'auto'}}>OUR SERVICES</Divider>
<div className="avatar-whole-con">
    <div className="sub-whole-con-1">
      <div className="img-container">
        <div className="overlay">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <Link to="" style={{ textDecoration: 'none' }}><p className='custom' >CUSTOM ACCESSORIES</p></Link>
        <p className='custom-2'>We have a wide range of bow ties which fit everyday
           fashion as well as special occasions</p>
          <div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Discover 
           <div className="sub-discover"><p>Discover</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
           
    </div>{/* end of div tag for sub-whole-con-1 */}
   
    <div className="sub-whole-con-2">
    <div className="img-container">
        <div className="overlay">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <Link to="" style={{ textDecoration: 'none' }}><p className='custom' >CUSTOM ACCESSORIES</p></Link>
        <p className='custom-2'>We have a wide range of bow ties which fit everyday
           fashion as well as special occasions</p>
          <div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Discover 
           <div className="sub-discover"><p>Discover</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
           
    </div>{/* end of div tag for sub-whole-con-2 */}
    <div className="sub-whole-con-3">
    <div className="img-container">
        <div className="overlay">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <Link to="" style={{ textDecoration: 'none' }}><p className='custom' >CUSTOM ACCESSORIES</p></Link>
        <p className='custom-2'>We have a wide range of bow ties which fit everyday
           fashion as well as special occasions</p>
           <div className="discover" > <Link to="" style={{ textDecoration: 'none' }}>  Discover 
           <div className="sub-discover"><p>Discover</p></div>
          
           </Link> </div>{/* end of div tag for discover */}
           
    </div>{/* end of div tag for sub-whole-con-3 */}
    <div className="sub-whole-con-4">
    <div className="img-container">
        <div className="overlay">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <Link to="" style={{ textDecoration: 'none' }}><p className='custom' >CUSTOM ACCESSORIES</p></Link>
        <p className='custom-2'>We have a wide range of bow ties which fit everyday
           fashion as well as special occasions</p>
          <div className="discover" >  <Link to="" style={{ textDecoration: 'none' }}>  Discover 
           <div className="sub-discover"><p>Discover</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
           
    </div>{/* end of div tag for sub-whole-con-4 */}
</div>
<div className="last-bg-img">
  <div className="another-overlay">
    <div className="overlay-flex-one">
      <p className="text-one">Your design, we deliver</p>
      <p className="text-two">  Providing you with maximum level of comfort & confidence in every suit !</p>
    </div>
    <div className="overlay-flex-two">
    <Link to=""><button class="button-3" > 
    <span> Learn about us</span></button></Link>
    </div>
  </div>
  </div>{/* end of div tag for last-bg-img */}
    </Box>
    
    
    </>
  )
}

export default ThirdHomeSec