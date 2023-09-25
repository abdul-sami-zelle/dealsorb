import React, { useEffect, useState } from 'react';
import '../../App.css'
import ResponsiveAppBar from '../../components/bar2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryDesign2 from '../../components/Product';
import { productData,responsive } from '../../components/data';
import { productData2,responsive2 } from '../../components/trendyProductData';
import { discountProdcts,discountProdctsResponsive } from '../../components/productData2';
import CatName from '../../components/catName';
import BasicGrid from '../../components/grid1';
import ProductCard1 from '../../components/widgets/productCard';
import Box from '@mui/material/Box';
import CouponProviders from '../../components/couponProviders';
import Banner1 from '../../components/banner1';
import Grid from '@mui/material/Grid';
import ClearanceList from '../../components/clearanceScen';
import Button from '@mui/material/Button';
import DiscountCard1 from '../../components/discountCard';
import Benefits from '../../components/benefits';
import Footer from '../../components/footer';
import MainPageSlider11 from '../mainPageSlider/mainPageSlider';
import { useSelector } from 'react-redux';
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CartItems from '../../components/cartUi/cartMain';
import { propTypes } from 'react-bootstrap/esm/Image';
import CategoryBanner from '../../3dSliderLandingPage/3dSilderLandingPage';
import FloatingButton from '../../components/cartUi/floatingButton';
import WhatsAppFloatingButton from '../../components/whatsappFloatingbutton';
import MobileViewCategories from '../../components/mobileViewCategories/mobileViewCategories';
import MobileViewProductsDesign from '../../components/mobileViewProductCard/MobileViewProductCard';



function MainLandingPage() {
    const [count, setCount] = useState(0)
  


    const [categoriesAll, setCategories] = useState([]);

    useEffect(() => {
      // Fetch data from your API endpoint
      fetch('http://localhost:8080/api/v1/product-category/get-all-category')
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          setCategories(data.category);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);



    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
      // Fetch data from your API endpoint
      fetch('http://localhost:8080/api/v1/simple-product/get-all-products')
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          setBestSelling(data.product);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);






    const product = categoriesAll.map((item) => (
      <CategoryDesign2
        name={item.name}
        url={item.url}
        price=""
        description={item.description}
      />
    ));
    const isVisible = useSelector((state) => state.visibility);



    const product22 = bestSelling.map((item) => (
      <ProductCard1
        id={item._id}
        name={item.name}
        url={item.photo}
        price={item.simpleProductData.salePrice}
        description={item.description}
        rating="2.6"
        brandLogo=""
        arrayImages={item.photos}
        colors=""
        sizes=""
      />
    ));
    const product23 = discountProdcts.map((item) => (
      <DiscountCard1
        name={item.name}
        url={item.imageurl}
        // price={item.price}
        // description={item.description}
        rating={item.rating}
        discount={item.discount}
      />
    ));
     
    return (
      <Box >
        
       <ResponsiveAppBar activePage="Home" />
      <CartItems/>
   {/* <ControlledCarousel/> */}
   
   <CategoryBanner/>

   {/* <div className="mobiViewCategories"> */}
   <MobileViewCategories/>
   {/* </div> */}

   <MobileViewProductsDesign dataList={bestSelling} />
 
   {/* <CarouselSlider22/> */}
         {/* <MainCouponLandingPage/>  */}
        {/* <MainStorePage/> */}
       
        <Box sx={{marginX:'30px'}}>
        <div className="webViewCategories">
          <div style={{height:'30px'}}></div>
          <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
          <div style={{height:'30px'}}></div>
          <Carousel  responsive={responsive}>
            {product}
          </Carousel>
        </div>
       
        <div style={{height:'60px'}}></div>
        <CatName categoryHeading="Featured" productHeading="New Arrivals"/>
        <div style={{height:'10px'}}></div>
        <BasicGrid/>
        <div style={{height:'60px'}}></div>
        <CatName categoryHeading="Categories" productHeading="Best Selling Products"/>
        <div style={{height:'30px'}}></div>
        <Carousel  responsive={responsive2}>
          {product22}
        </Carousel>
        <div style={{height:'60px'}}></div>
        <CatName categoryHeading="Our Products" productHeading="Deals & Coupons"/>
        <div style={{height:'30px'}}></div>
        {/* <CouponProviders/> */}
        <div style={{height:'40px'}}></div>
        <Banner1/>
        <div style={{height:'60px'}}></div>
        <Box sx={{display:'flex',alignItems:'',justifyContent:'space-between'}}>
         <CatName categoryHeading="This Month" productHeading="Clearance Sale"/>
         <Button sx={{height:'40px',backgroundColor:'#DB4444',paddingX:{lg:'50px',md:'40px',sm:'30px',xs:'20px'}}}>
          <Box sx={{color:'white',fontWeight:'bold'}}>
           See All
          </Box>
          </Button>
        </Box>
        <div style={{height:'30px'}}></div>
        <ClearanceList/>
        <div style={{height:'60px'}}></div>
        <CatName categoryHeading="Today's" productHeading="Summer Discount"/>
        <div style={{height:'30px'}}></div>
        <Carousel  responsive={discountProdctsResponsive}>
          {product23}
        </Carousel>
        <div style={{height:'120px'}}></div>
        <Grid container >
          <Grid item lg={1}>
            
          </Grid>
          <Grid item lg={10}>
            <Benefits/>
          </Grid>
          <Grid item lg={1}>
            
          </Grid>
        </Grid> 
       
  
  
     
  {/* <ShowableProductDetails/> */}
       
      
        </Box>
        <div style={{height:'30px'}}></div>
        <Footer/>
        <FloatingButton/>
        <WhatsAppFloatingButton/>
      </Box>
    )
  }
  export default MainLandingPage
  
  
  