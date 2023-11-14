import React, { useEffect, useState } from 'react';
import CouponUI from './couponsUI';
import './couponsCategories.css'
import mat from '../../assets/mat.png'
import baking from '../../assets/baking.png'
import cleaning from '../../assets/cleaning.png'
import kitchen from '../../assets/kitchen.png'
import shirts from '../../assets/shirts.png'
import menacc from '../../assets/menacc.png'
import toys from '../../assets/toys.png'
import water from '../../assets/waterbottle.png'

export default function CouponCategories(){
    return (
        <div>
            
            <div className='mainCouponCate'>
         
         <div className="categoriesHeaderCoupon">
                <div className="leftPadd">

                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/3405/3405802.png" alt="" srcset="" />
                <h1>
                   Coupon Categories
                </h1>
            </div>
        <div style={{height:'20px'}}></div>
         <div className="divv1">
         <CouponUI url={mat} percent={"10"} brand={"brand"} validTill={"validTill"} />
         </div>
         <div className="divv1">
         <CouponUI url={baking} percent={"10"} brand={"brand"} validTill={"validTill"} />
         </div>
         <div className="divv1">
         <CouponUI url={cleaning} percent={"10"} brand={"brand"} validTill={"validTill"} />
         </div>
         <div className="divv1">
         <CouponUI url={kitchen} percent={"10"} brand={"brand"} validTill={"validTill"} />
         </div>
         <div className="divv1">
         <CouponUI url={shirts} percent={"10"} brand={"brand"} validTill={"validTill"} />
         </div>

        </div>
        </div>
      
        )
    }