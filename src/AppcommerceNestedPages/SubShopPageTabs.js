import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import './SubShopPageTabs.css';




const theme = createTheme({
  palette: {
    primary:lime,
    secondary:deepOrange
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({products,productsTwo,productsThree,productsFour,productsFive} ) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // fectching the rest of the tabs product lists.Pls note that the first
  // fetching took place at the AppCommerce file
 
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{ display: 'flex', height: 'auto',pb:"5%",/*backgroundColor:'yellow'*/ }} >          
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width:'20%'}}
      >
         <Typography sx={{textAlign:'center',mt:'2%',textTransform:'uppercase',letterSpacing:2 }}>Categories</Typography>
       
        <Tab label="Item One" {...a11yProps(1)}/>
        <Tab label="Item Two" {...a11yProps(2)} />
        <Tab label="Item Three" {...a11yProps(3)} />
        <Tab label="Item Four" {...a11yProps(4)} />
        <Tab label="Item Five" {...a11yProps(5)} />
        <Tab label="Item Six" {...a11yProps(6)} />
      </Tabs>
    
     <Box sx={{width:"80%"}}>
       <TabPanel value={value} index={1} sx={{width:'50%'}}>
       <div className="box" >
     {products.map((product)=>{
      return(
        <>
        <div className="commerce-whole-1-alt"  >
        <Link to='/one'>
      <img src={product.image.url} className="commerce-img-whole-alt" alt='commerce=img'/>
      </Link>
      <Link to="/one" style={{ textDecoration: 'none' }}><p className='customer-first-alt'>
    {product.name}</p></Link>
      <p className='customer-second-alt'>
#{product.price.raw}
</p>
<div className="discover-alt" >  <Link to="/one" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover-alt"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
           </div>{/* end of div tag for commerce-whole-1-alt */}
        </>
      )
     })}
 
       
          </div>{/* end of div for className "box" */}
        

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="box" >
     {productsTwo.map((product)=>{
      return(
        <>
        <div className="commerce-whole-1-alt">
        <Link to=''>
      <img src={product.image.url} className="commerce-img-whole-alt" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first-alt'>
    {product.name}</p></Link>
      <p className='customer-second-alt'>
#{product.price.raw}
</p>
<div className="discover-alt" >  <Link to="/one" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover-alt"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
        </>
      )
     })}
          </div>{/* end of div for className "box" */}

      </TabPanel>
      <TabPanel value={value} index={3}>

      <div className="box" >
     {productsThree.map((product)=>{
      return(
        <>
        <div className="commerce-whole-1-alt">
        <Link to=''>
      <img src={product.image.url} className="commerce-img-whole-alt" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first-alt'>
    {product.name}</p></Link>
      <p className='customer-second-alt'>
#{product.price.raw}
</p>
<div className="discover-alt" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover-alt"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
        </>
      )
     })}
          </div>{/* end of div for className "box" */}

      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="box" >
     {productsFour.map((product)=>{
      return(
        <>
        <div className="commerce-whole-1-alt">
        <Link to=''>
      <img src={product.image.url} className="commerce-img-whole-alt" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first-alt'>
    {product.name}</p></Link>
      <p className='customer-second-alt'>
#{product.price.raw}
</p>
<div className="discover-alt" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover-alt"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
        </>
      )
     })}
          </div>{/* end of div for className "box" */}

      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="box" >
     {productsFive.map((product)=>{
      return(
        <>
        <div className="commerce-whole-1-alt">
        <Link to=''>
      <img src={product.image.url} className="commerce-img-whole-alt" alt='commerce=img'/>
      </Link>
      <Link to="" style={{ textDecoration: 'none' }}><p className='customer-first-alt'>
    {product.name}</p></Link>
      <p className='customer-second-alt'>
#{product.price.raw}
</p>
<div className="discover-alt" >  <Link to="" style={{ textDecoration: 'none' }}>  Buy Now
           <div className="sub-discover-alt"><p>Buy Now</p></div>
           </Link>
           </div>{/* end of div tag for discover */}
   </div>{/* end of div tag for commerce-whole-1 */}
        </>
      )
     })}
          </div>{/* end of div for className "box" */}

      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Six
      </TabPanel>
      
      </Box>
    </Box>
    </ThemeProvider>
  );
}