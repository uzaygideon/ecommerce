import React from 'react'
import './SevenHomeSec.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { Link } from 'react-router-dom';
import MapHomeSec from './MapHomeSec'
function SevenHomeSec() {
  return (
    <>
    <div className="small-contact">
        <div className="map-contact-container">
    <div className="map-space">
    <MapHomeSec/>
    </div>
    <div className="location-space">
        <div className="ready-to-contact">Contact info</div>
        <p >Have a question? Our team always ready to help. Feel free and come to us anytime, we are glad to see you at our studio.</p>
        <p>
  <AddLocationAltRoundedIcon style={{color:'rgb(164,102,68)'}}/>  Beechwood Estate ,ibeju-Lekki ,Lagos State <br/>
    <AccessTimeFilledRoundedIcon style={{color:'rgb(164,102,68)'}}/> Monday - Friday: 10 am - 10pm
   Sunday: 11 am - 9pm<br/>
  <PhoneAndroidRoundedIcon style={{color:'rgb(164,102,68)'}}/> <a href="tel:+2348160071644">+2348160071644</a> 
        </p>
    </div>{/* end of location-space div */}
        </div>{/* end of small-contact div */}
       
        <div className="discover-new-2" >  
          <Link to="" style={{ textDecoration: 'none'}} className='link-style-2'> 
           <TwitterIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style-2'> 
           <InstagramIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>
           <Link to="" style={{ textDecoration: 'none'}} className='link-style-2'> 
           <WhatsAppIcon className="icon-name"style={{ fontSize:'1.1rem'}}/>
           </Link>

           </div>{/* end of div tag for discover-new */}
      
    </div>{/* end of map-contact div */}
    </>
  )
}

export default SevenHomeSec