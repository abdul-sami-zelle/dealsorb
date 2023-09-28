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
import ProductCardResponsive2 from '../../components/ProductCardResponsive2/productCardResponsive';
import MobileViewProductsDesign1 from '../../components/mobileViewProductCard/mobileViewProductCard1';
import MobileViewCategoriesAnBestSale from '../../components/mobileViewCategoriesAndBestSale/mobileViewCategoriesAndBestSale';
import ExploreOurProducts from '../../components/exploreOurProducts/exploreOurProducts';
import CouponCard from '../../components/coupon1';
import App222 from '../../components/coupon22';
import MobileCoupon from '../../components/couponUi/mobileCoupon';
import MobileCouponSlider from '../../components/mobileCouponSlider/mobileCouponSlider';



const products = [
  {
      id: 1,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695211691_wollar_storage_bag_7.jpg",
      name: "Furhaven Orthopedic",
      price: "19.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
    },
    {
      id: 2,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695119619_egg_pen_holder_1.jpg",
      name: "WATER BOTTLES",
      price: "21.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 3,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695037198_sink_faucet_1.jpg",
      name: "KITCHEN ACCESSORIES",
      price: "99.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268"
    },
    {
      id: 4,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
      name: "HOME IMPROVEMENT",
      price: "14.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
];


const couponsMobileData = [
  {
      id: 1,
      url:
        "https://static.wixstatic.com/media/183fc9_108f894092ad4114ae0826d90d17e7eb~mv2.png/v1/crop/x_0,y_98,w_500,h_348/fill/w_172,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/zm-bata-logo.png",
      percent: "20",
      brand: "Bata Footwear",
      validTill: "October 2023",
    },
    {
      id: 2,
      url:
        "https://www.servis.pk/cdn/shop/files/shoebox-removebg-preview.png?height=628&pad_color=fff&v=1647339496&width=1200",
      percent: "30",
      brand: "Servis Footwear",
      validTill: "November 2023",
    },
    {
      id: 3,
      url:
        "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
      percent: "40",
      brand: "McDonald's",
      validTill: "December 2023",
    },
    {
      id: 4,
      url:
        "https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png",
      percent: "40",
      brand: "KFC",
      validTill: "December 2023",
    },
    {
      id: 5,
      url:
        "https://assets.indolj.io/images/1682661619-logo.webp",
      percent: "40",
      brand: "Zameer Ansari",
      validTill: "December 2023",
    },
    {
      id: 6,
      url:
        "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
      percent: "40",
      brand: "McDonald's",
      validTill: "December 2023",
    },
    {
      id: 7,
      url:
        "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
      percent: "40",
      brand: "McDonald's",
      validTill: "December 2023",
    },
    {
      id: 8,
      url:
        "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
      percent: "40",
      brand: "McDonald's",
      validTill: "December 2023",
    },
  ]




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
 
  
   {/* <CouponCard
            brandImg={"https://www.bata.co.za/file/BATA_logo_since1925.png"}
            name={"kjgjgk"}
            percent={"10"}
            validity={"coupon.validity"}
          />
   */}

   {/* <div className="mobiViewCategories"> */}
   <MobileViewCategories/>
   {/* </div> */}

   <Box >
   <MobileViewProductsDesign1 dataList={products} />
   </Box>
   <Box>
   <MobileCouponSlider couponDataMobile={couponsMobileData}/>
   </Box>
   <Box >
   <MobileViewCategoriesAnBestSale dataList={products} />
   </Box>
   <Box >
   <ExploreOurProducts dataList={products} />
   </Box>
   
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
       
        <div className="webViewCategories">
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
        
        </div>
        <div style={{height:'40px'}}></div>
        <Banner1/>
        <div className="webViewCategories">
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
        </div>
       
  
  
     
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
  
  
  