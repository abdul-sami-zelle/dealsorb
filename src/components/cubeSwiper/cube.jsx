import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cube.css';

// import required modules
import {Autoplay, EffectCube, Pagination } from 'swiper/modules';

export default function Cube() {
  return (
    <>
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
