import React, { useEffect, useState, useRef } from 'react';
import './mobileViewProduct.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CatName from '../catName';


export default function MobileViewProductsDesign1({dataList}) {
    return(
        <>
        <div style={{height:'60px'}}></div>
        <CatName categoryHeading="Categories" productHeading="Best Selling Products"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
         <Grid container spacing={2}>
      {dataList.map((data, index) => (
        <Grid item key={index} xs={6} sm={4} md={2} lg={1.7}>
              <div className="mainMobileProduct">
            <div className="imageSectionMobile" style={{
                backgroundImage:`url('${data.photo}')`,
            }}>

            </div>
            <div className="contentSectionMobile">
                <h1>
                    {data.name}
                </h1>
                <p>
                    this is the description of product...
                </p>
                <Button>
                    Add To Cart

                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/viewCart.png?alt=media&token=b196a479-e558-470b-8bba-6688bd5c4492" style={{
                        marginLeft:'2px'
                    }} height='15px' width='15px' alt="" srcset="" />
                </Button>
            </div>
        </div>
         
        </Grid>
      ))}
    </Grid>
      
        </>
    )
} 

// "https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/viewCart.png?alt=media&token=b196a479-e558-470b-8bba-6688bd5c4492" 