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
import CouponUI2 from './couponsUi2';
import {useNavigate } from 'react-router-dom';
import { CategoryCouponData } from '../../context/categoryCouponData';

export default function CouponCategories(){
    const [couponCat, setCouponCat] = useState([]);
    const navigate = useNavigate();
    // const { setCatCouponData } = CategoryCouponData();
    useEffect(() => {
      // Fetch data from your API endpoint
      fetch('https://coupon-backend-tau.vercel.app/api/v1/category/get-all')
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          setCouponCat(data.categories);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);


    const handleNavigate = (categoryValue) => {
      // Navigate to the desired route with the category parameter
      navigate(`/coupon-category-wise/${categoryValue}`);
    };
    return (
      
            
            <div className='mainCouponCate'>
       
         <div className="categoriesHeaderCoupon">
                <div className="leftPadd">

                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/3405/3405802.png" alt="" srcset="" />
                <h1>
                   Coupon Categories
                </h1>
            </div>
        <div style={{height:'10px'}}></div>
        <div className="divv1">
      
        {couponCat.map((item) => (
            <div 
            onClick={() => handleNavigate(item.category)}
            ><CouponUI2 url={item.image} brand={item.category} off={"30"} /></div>
            
        
        
      ))}
        </div>
        <div style={{height:'10px'}}></div>


       

        </div>
     
      
        )
    }