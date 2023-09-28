import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MobileCoupon from '../couponUi/mobileCoupon';
import './mobileCouponSlider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CatName from '../catName';
import Button from '@mui/material/Button';

export default function MobileCouponSlider({couponDataMobile}) {
  return (
    <>
      <div style={{height:'30px'}}></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'15px',marginRight:'15px'}}>
        <CatName categoryHeading="Coupons" productHeading="Best Deals Coupons"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
        </div>
        <div style={{height:'12px'}}></div>
      <Swiper
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper224"
        customClass={{
            navigationButtonPrev: 'swiper-button-prev',
            navigationButtonNext: 'swiper-button-next',
          }}
          modules={[Autoplay]}
      >
         {couponDataMobile.map((item, index) => (
           <SwiperSlide className="mySwiper222">
            <MobileCoupon url={item.url} percent={item.percent} brand={item.brand} validTill={item.validTill} />
            </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
