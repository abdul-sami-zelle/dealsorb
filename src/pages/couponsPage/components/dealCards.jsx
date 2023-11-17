import React, { useRef, useEffect,useState } from 'react';
import '../../couponsPage/index.css'
import Grid from '@mui/material/Grid';
import CouponCardAllDesign from './couponCardAllDesign';

const couponsData = [
  {
    id: 1,
    code: "QW1234",
    off: "10 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 2,
    code: "HY6543",
    off: "20 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 3,
    code: "H7647U",
    off: "30 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 2,
    code: "HY6543",
    off: "20 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 3,
    code: "H7647U",
    off: "30 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
];

export default function CouponCardDeal() {
  const [allPopularCoupons, setAllPopularCoupons] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/coupon/get-all')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setAllPopularCoupons(data.coupons);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (

    <Grid container>

      <Grid item lg={1}>

      </Grid>
      <Grid item lg={10}>
        <Grid container spacing={4} sx={{ marginX: '' }}>
          {allPopularCoupons.map((item, index) => (
            <Grid item key={index} xs={6} sm={3} md={2} lg={1.5}>
              <CouponCardAllDesign brandLogo={item.imgUrl} off={item.discountValue} code={item.couponCode} type={item.discountType} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={1}>

      </Grid>
    </Grid>

  )
}