import React from 'react'
import './SecondHomesec.css'
import { CardMedia,Box,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
function SecondHomesec({apartMovie}) {

    return (
    <> 
  <Box sx={{
    width:'100%',
    pt:'5%',
    pb:'10%',
    // px:'8%',
    backgroundColor:'rgb(255,255,255)',
    display:'flex',
    justifyContent:'space-around',
  }}>
    <div className='flex-box-one'>
     
       <img src={apartMovie.imgOne} className="img-con" alt="ok"/>
        <CardMedia image={apartMovie.imgTwo}   sx={{py:'25%',width:'50%',position:'absolute',bottom: '0',top:'40%',right:'40%'}}/>  
          
    </div>
    <div className='flex-box-two'>
      <p className='para-one'>Discover True Quality</p>
      <Box sx={{display:'flex'}}>
      <p className='para-two'>Handgrafted suit</p>
      <Divider sx={{width:'40%',marginBottom:'1%',marginLeft:'2%'}} />
      </Box>
      <p className='para-three'>We provide you with great suits that 
        befit you and your lifestyle. Our suits are made from the highest quality fabrics and guaranteed to give you functionality,durability and comfort. 
        Our skilled master tailors handle all of our cutting and sewing,
         ensuring precision in all production processes and paying attention to the details. Come to us and choose the best suit for your lifestyle.
         </p>
         <Link to=""><button class="button-3" > <span> Learn about us</span></button></Link>
    </div>
  </Box>
    </>
  )
}

export default SecondHomesec


