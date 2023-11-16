import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import '../couponsPage/index.css'
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';

export default function AllStores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/store/get-all')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setStores(data.stores);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
       <>
        <header>
        <ResponsiveAppBar activePage={'All Stores'} />
        </header>
        <main>
        <Grid container >
            <Grid items lg={1.5}>
            </Grid> 
            <Grid items lg={9}>
                <Grid container>
                    <Grid item lg={12}>
                        <div className="allStoreBanner">

                        </div>
                    </Grid>
                    <Grid item lg={12}>
                    <div className="allCouponDealsHeading">
                            All Coupons and deals for Saudi Arabia stores
                            </div>
                        <Grid container spacing={1.4}  sx={{ marginTop: '10px',marginBottom: '40px'  }}>
                            
                            {stores.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={1.7}>
                                    <div className='mainShopCard'>
                                        <div className='shopCard'>
                                            <div className='brandLogo'>
                                                <img src={item.logoUrl} alt="" srcset="" />
                                             </div>
                                            <div className="offer">
                                                 <p>10% off</p>
                                            </div>
                                            <div className="shopLink">
                                                <p>{item.storeName}</p>
                                            </div>
                                         </div>
                                    </div>
                                  </Grid>
                                 ))}
                          </Grid>
                      </Grid>
                      </Grid>
              </Grid> 
              <Grid items lg={1.5}></Grid> 
          </Grid>
        </main>
          <footer>
          <Footer/>
          </footer>
       </>
    )}