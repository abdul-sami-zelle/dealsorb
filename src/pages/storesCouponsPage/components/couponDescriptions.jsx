import React, { useEffect, useState, useRef } from 'react';
import '../../storesCouponsPage/stores.css'
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



export default function CouponDescriptionStores({offer,title, description,code,descriptionHeading,promoCode,discountValue,applicableFor,couponValidity}) {
   const [isDivVisible, setIsDivVisible] = useState(false);
   const [isRedirect, setIsRedirect] = useState(false);
   const [newTab, setNewTab] = useState(null);


   function Redirect() {
    setIsRedirect(true);
   }
   const handleCopyButtonClick = () => {
    setIsDivVisible(!isDivVisible);

    // If newTab is not set, open a new tab with a specific URL
    if (!newTab) {
      const tab = window.open('https://example.com', '_blank');
      if (tab) {
        setNewTab(tab);
      } else {
        // Handle if the browser blocked the popup
        console.error('Popup blocked. Please allow popups for this site.');
      }
    }
  };

//   const handleCopyButtonInsidePopupClick = () => {
//     // Update the URL of the new tab when the button is clicked inside the Popup
//     if (newTab) {
//       newTab.location.href = 'https://newurl.com';
//     }
//   };

  


    return(
        <div className='couponCardStorePageMain'>
           <div className="couponCardStorePage">
                <div className="section1">
                    <div className="couponsCardOffer">
                        {offer}
                    </div>
                    <div className="couponTag">
                        Coupon
                    </div>
                </div>
                <div className="section2">
                   <div className="couponMainHeading">
                        {title}
                   </div>
                   <div style={{height:'20px'}}></div>
                   <div className="section2B">
                        <div className='section2BCouponeDescriptionCode' style={{display:'flex',alignItems:'center',justifyContent:'space-between', }}>
                           <div style={{display:'flex',}}>
                           <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/hotsale.png?alt=media&token=43dbc1ae-4083-44c8-b666-a8d29a8c25fd" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                    <h6>
                                        Hot Deal
                                    </h6> 
                            </div>
                            <div style={{width:'10px'}}></div>
                            <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/like.png?alt=media&token=c9f5c5f1-e427-4018-8f5c-b75443a64953" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                <h6>
                                    Verified Coupon
                                </h6> 
                            </div>
                           </div>
                            <div className="couponCodeStorePageA">
                                <div className="couponCodeStorePage">
                                    <div className="codeSec2B">
                                        {code}
                                    </div>
                                    
                                    
                                    <Popup trigger=
				{   <Button
                    onClick={() => {
                        handleCopyButtonClick()
                       }}
                    sx={{
                        height:'37px',
                        width:'46px',
                        border: '1px solid #AD0000',
                    background:' #FFF', color: '#AD0000',
                    fontsize: '11px',
                    fontweight: '700',
                    borderRadius:'0.5px'
                    }}>Copy</Button>
                    }
				modal nested>
				{
					close => (
						<div className='popupContent1'>
							<div className="upperContentPopup">
                               <div className="upperContentPopup1">
                                    <img src="https://1000logos.net/wp-content/uploads/2021/04/AliExpress-logo.png" height="40px" width="60px" alt="" />
                                    <p> Ali Express is offering you this coupon. Get and Enjoy...</p>
                               </div>
                               <IconButton onClick={() => {
                                // handleCopyButtonClick()
                               }} color="primary" sx={{ height: '30px', width: '30px' }}>
                                  <Close />
                                </IconButton>
                            </div>
                            <div className="lowerContentPopup">
                                <p>
                                    COPY THIS CODE AND USE AT CHECKOUT
                                </p>
                                <div className="codeCopyUiPopup">
                                    <div className="codeToCopy">
                                        ADFYSJ09
                                    </div>
                               
                                    <Button
                                        onClick={() => setIsDivVisible(!isDivVisible)}
                                        sx={{
                                            width:'25%',
                                            border: '1px solid #AD0000',
                                            
                                        background:' #FFF', color: '#AD0000',
                                        fontsize: '11px',
                                        fontweight: '700',
                                        borderRadius:'5px'
                                        }}>Copy</Button>
                                </div>
                                <div style={{height:'20px'}}></div>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                    <div style={{display:'flex'}}>
                                       <div>
                                        <p>Did it Work?</p>
                                       <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/158/158420.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/4989/4989793.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/2956/2956792.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                        </ButtonGroup>
                                       </div>
                                     
                                    </div>
                                 
                                </div>
                            </div>
						</div>
					)
				}
			</Popup>



                                 
                                </div>
                                <div style={{height:'5px'}}></div>
                                <p>
                                Copy the code above and paste at checkout.
                                </p>
                             
                            </div>
                        </div>
                      
                   </div>
                   <div style={{height:'20px'}}></div>
                   <div on className="lastSectionCouponPage">
                        <div  style={{display:'flex'}}>
                                <img style={{backgroundColor:'red'}} src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/link.png?alt=media&token=947cc9b5-d8f7-4206-82dd-45a5b2c36efc" alt="" srcset="" />
                            <div style={{width:'5px'}}></div>
                            <div className="tab1">
                                    <h1>
                                        340
                                    </h1>  
                                    <h2>
                                            uses daily
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        2 hours 
                                    </h1>  
                                    <h2>
                                            ago Last Used
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        38.3 Dirmham
                                    </h1>  
                                    <h2>
                                            Last Saved
                                    </h2> 
                                </div>  
                        </div>
                        <div onClick={() => setIsDivVisible(!isDivVisible)} className="tab1">
                        {isDivVisible? <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/add.png?alt=media&token=c6a651b1-5c13-4012-8c6c-ab21cbb3bf75" alt="" />: <div><img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/minus.png?alt=media&token=13124ee7-6a2f-49bb-b574-8b4180b56fd3" alt="" srcset="" /></div>}
                        </div>           
                   </div>



                   <div on className="lastSectionCouponPageMobile">
                        <div className='' >
                                <div style={{display:'flex' ,marginTop:"5px"}}>
                                <img style={{ height:'15px',width:'15px'}} src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/link.png?alt=media&token=947cc9b5-d8f7-4206-82dd-45a5b2c36efc" alt="" srcset="" />
                            <div style={{width:'5px'}}></div>
                            <div className="tab1">
                                    <h1>
                                        340
                                    </h1>  
                                    <h2>
                                            uses daily
                                    </h2> 
                                </div>
                                </div> 
                               <div style={{display:'flex',marginTop:"5px"}}>
                               
                                <div className="tab1">
                                    <h1>
                                        2 hours 
                                    </h1>  
                                    <h2>
                                            ago Last Used
                                    </h2> 
                                </div> 
                                
                               </div>
                                <div style={{display:'flex',marginTop:"5px"}}>
                                <div className="tab1">
                                    <h1>
                                        38.3 Dirmham
                                    </h1>  
                                    <h2>
                                            Last Saved
                                    </h2> 
                                </div>  
                                </div>
                        </div>
                        <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',marginTop:"5px"}}>
                        <div>

                        </div>
                        <div onClick={() => setIsDivVisible(!isDivVisible)} className="tab1">
                        {isDivVisible? <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/add.png?alt=media&token=c6a651b1-5c13-4012-8c6c-ab21cbb3bf75" alt="" />: <div><img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/minus.png?alt=media&token=13124ee7-6a2f-49bb-b574-8b4180b56fd3" alt="" srcset="" /></div>}
                        </div> 
                        </div>          
                   </div>








                </div>
           </div>
           {!isDivVisible &&
           <div className="couponDescription">
                <div className="couponMainHeading">
                {/* Activate the latest Noon coupon code 2023 and get Up to 50 Dirham Cashback On All Orders at Noon.com */}
                {descriptionHeading}
                </div>
                <div style={{height:'10px'}}></div>
                <div className="descriptionSectionCoupon">
                {description}
                </div>
                <div style={{height:'10px'}}></div>
                <div className="couponAttributes">
                    <div className="attrbutes">
                        <h1>
                            Promo Code
                        </h1>
                        <h1>
                        Discount Value
                        </h1>
                        <h1>
                        Applicable For
                        </h1>
                         <h1>
                         Coupon Validity	
                         </h1>
                        
                    </div>
                    <div style={{width:'20px'}}></div>
                    <div className="values">
                    <h1>
                            {promoCode}
                        </h1>
                        <h1>
                        {discountValue}
                        </h1>
                        <h1>
                        {applicableFor}
                        </h1>
                         <h1>
                         {couponValidity}	
                         </h1>
                    </div>
                </div>
           </div>
           }
        </div>
    )
} 