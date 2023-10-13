import React from 'react'
import './FouthHomeSec.css';
import styled from '@emotion/styled'
 import {PlayCircle } from '@mui/icons-material';
 import Backdrop from '@mui/material/Backdrop';
 import { Box,Divider, Container } from '@mui/material';
import { Link } from 'react-router-dom';
function FouthHomeSec({apartMovie}) {

    const SubFlexTwo=styled('div')({
        // backgroundColor:"blue",
          // some styles written in external css "sub-flex.css"
        padding:"1% 0% 10%",
        color:"rgb(124,124,125)"
    })
    const BackgroundImg= styled('div')({
        background: `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.6)), url('https://firebasestorage.googleapis.com/v0/b/imagedata-7e7cd.appspot.com/o/NotReal%2Fpexels-pixabay-532220%20(1)-alt.jpg?alt=media&token=f656c948-45d3-42ae-a772-1ac3eba6210b')`,
        height:"50vh",
        backgroundSize:"cover",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        transform:"scale(0.98,0.98)",
        transition:"all 0.5s",
        "&:hover":{
            transform:"scale(1,1)"
            
        }
    })

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
  


    return (
      <>
      <div className="video-container">
   
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
 <video controls  style={{boxShadow:"2px 2px 5px RGB(44 46 47)"}} className='vd-class'>
      <source src={apartMovie.videoOne} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
      </Backdrop>
    {/* end of backdrop tag */}
        < SubFlexTwo className='width-me'>
       <BackgroundImg onClick={handleToggle} >
        <PlayCircle sx={{fontSize:'5rem',color:"white"}}/>
       </BackgroundImg>

        </ SubFlexTwo>

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
         <Link to=""><button class="button-3" > <span> Watch Later</span></button></Link>
    </div>

      </div>{/*End of div for video-container */}
     
    </>
  )
}

export default FouthHomeSec