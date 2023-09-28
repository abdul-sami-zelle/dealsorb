import React, { useEffect, useState } from 'react';
import './mobileCoupon.css';


export default function MobileCoupon(){
    return (
        <>
        <div className="mainCouponMobileDiv">
            <div className="leftCouponPart">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/McDonalds-logo-png.png" alt="" srcset="" />
            </div>
            <div className="rightCouponPart">
                <div className="verified">
                    <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" srcset="" />
                </div>
                <h1>
                    10% Off
                </h1>
                <h2>
                    McDonald's
                </h2>
                <h3>
                    valid unitill 9th October 2023
                </h3>
            </div>
            <div className="topCircleMobile">

            </div>
            <div className="dashedVerticalLine"></div>
            <div className="bottomCircleMobile">

            </div>
        </div>
        </>
    )
}