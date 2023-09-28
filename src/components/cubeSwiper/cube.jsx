import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cube.css';
import CatName from '../catName';
import Button from '@mui/material/Button';
// import required modules
import {Autoplay, EffectCube, Pagination } from 'swiper/modules';

export default function Cube() {
  return (
    <>
    <div style={{height:'30px'}}></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'15px',marginRight:'15px'}}>
        <CatName categoryHeading="Ocassions" productHeading="Best Ocassion Deals"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
        </div>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay,EffectCube, Pagination]}
        className="mySwipercube"
      >
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
