import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import App22 from './picker1'
import { TypeAnimation } from 'react-type-animation';
import AnimatedText from './quote2'
import SubCarousel from './subCarousel'
import WebCube from './cubeSwiper/webViewCubeSwiper';
import CatName from './catName';
import Button from '@mui/material/Button';

export default function Ocassions(){
    return (
        <Box sx={{padding:'40px',backgroundColor:"#F5F5F5",borderRadius:'10px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',}}>
           <Grid container spacing={2} justifyContent="center" >
           <Grid lg={4} md={12} sm={12}>
           <Grid lg={12}>
               <CatName categoryHeading="Ocassions" productHeading="Best Ocassion Deals"/>
               </Grid>
             <Box>
              <div style={{height:'30px'}}>

              </div>
             <WebCube/>
             </Box>
            </Grid>
          
            <Grid lg={8} md={12} sm={12}>
               <Grid lg={12}>
               <CatName categoryHeading="Our Products" productHeading="Deals & Coupons"/>
               </Grid>
               <Grid container>
               <Grid lg={6} md={6} sm={12}>
        
        <Grid lg={12}  md={12}>
        <App22/>
        </Grid>
        <Grid lg={12} md={12}>
        <App22/>
        </Grid>
        <Grid lg={12} md={12}>
        <App22/>
        </Grid>

      </Grid>
      <Grid lg={6} md={6} sm={12}>
        <Grid lg={12} md={12}>
        <App22/>
        </Grid>
        <Grid lg={12} md={12}>
        <App22/>
        </Grid>
        <Grid lg={12} md={12}>
        <App22/>
        </Grid>

      </Grid>
               </Grid>
            </Grid>
       
           </Grid>
        </Box>
    )}









