import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import CouponCard from './coupon1'; // Make sure the file name matches the correct path
import Box from '@mui/material/Box';
import { couponeData1 } from './couponGrid'; // Import the coupon data array
import MobileCoupon from './couponUi/mobileCoupon';



const App22 = () => {
  const [dotPosition, setDotPosition] = useState(undefined);

  const handlePositionChange = (e) => {
    setDotPosition(e.target.value);
  };

  return (
    <Box sx={{padding:"10px",backgroundColor:"#F5F5F5"}}>
      <Carousel autoplay={true} dotPosition={"left"} dots={false}>
        {couponeData1.map((coupon) => (
          <Box key={coupon.id} sx={{
      
          padding:'10px'
          }}>
            
            <CouponCard
              brandImg={coupon.brandImg}
              name={coupon.name}
              percent={coupon.percent}
              validity={coupon.validity}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default App22;
