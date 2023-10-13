import React from 'react';
import {Box,Divider} from '@mui/material'
import InputIcon from '@mui/icons-material/Input';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { Link } from 'react-router-dom';
import './FifthHomeSec.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const FifthHomeSec = () => {
  return (
    <>
         <Box sx={{backgroundColor:'rgb(249,248,248)',pt:'3%' }}>
    <Divider sx={{fontWeight:'bold',width:'40%',margin:'auto'}}>OUR TAILORS</Divider>
    <div className="avatar-whole">
    <div className="sub-whole-1">
      <div className="img-whole">
        <div className="overlay-whole">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <p className='customer'>tailor</p>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-2' >adesina mary</p></Link>
          <div className="discover-new" >  
          <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <TwitterIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <InstagramIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <WhatsAppIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           </div>{/* end of div tag for discover */}
           
    </div>{/* end of div tag for sub-whole-con-1 */}
   
    <div className="sub-whole-2">
    <div className="img-whole">
        <div className="overlay-whole">
    <Link to=''><InputIcon className="input-icon"/></Link>
        </div>
      </div>
      <p className='customer'>tailor</p>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-2' >jude bankole</p></Link>
          <div className="discover-new" >  
          <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <TwitterIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <InstagramIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style'> 
           <WhatsAppIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>

           </div>{/* end of div tag for discover-new */}
           
    </div>{/* end of div tag for sub-whole-con-2 */}
    </div>{/* end of div tag for avatar-whole */}

  <div className='testimonial-image'>
<div className='testimonial-overlay'>
    <p>TESTIMONIALS</p>
    <div className="testimonial-text-con">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-navigation-size": "1.3rem",
        }}
    >

    <SwiperSlide className='swiperslide'>
      <FormatQuoteRoundedIcon style={{color:'rgb(228, 91, 17)'}}/>
    <p className="comment">
        I have received the suit today
        Thank you!
      </p>
      <p className="author">WURAOLA ADEOYE</p>
      </SwiperSlide>

      <SwiperSlide>
      <FormatQuoteRoundedIcon style={{color:'rgb(228, 91, 17)'}}/>
    <p className="comment">
        I have received the suit today
        Thank you! I have received the suit today
      
      </p>
      <p className="author">omidiji ifeoluwa</p>
      </SwiperSlide>
      </Swiper>
    </div>{/* end of div tag for testimonial-text-con */}
</div>{/* end of div tag for testimonial-overlay */}
  </div>{/* end of div tag for testimonial-image */}
    </Box>

    </>
  )
}
