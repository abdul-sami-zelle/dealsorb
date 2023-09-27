import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Looks from '@mui/icons-material/Looks';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../context/myData';
import { DataProvider } from '../../context/myData';

export default function ProductCard1(props) {
    const navigate = useNavigate();
    const { setProductData } = useData();

    const images = [
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
        "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
        "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
        "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
      ];

      const handleProductDetailsClick = async () => {
        await setProductData({
            "id":props.id,
            "name":props.name,
            "imageUrl":props.arrayImages[0],
            "price":props.price,
            "arrayImages":props.arrayImages,
            "sizes":props.sizes,
            "colors":props.colors,
        });
        navigate(`/product-details/${props.name}`);
      };


    return (
        <Box
            sx={{
                height:{xl:'250px',lg: '280px',md:'250px',sm:'250px',xs:'220px'},
                width: {xl:'200px',lg: '210px',md:'200px',sm:'200px',xs:'160px'},
                borderRadius: '5px',
                backgroundColor: '#F5F5F5',
                position: 'relative',
                // boxShadow: '0 4px 8px black',
                // marginY:{xl:'15px',lg: '20px',md:'15px',sm:'15px',xs:'12px'},
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                
            }}
        >  
            <Box
                sx={{
                    height:{xl:'180px',lg: '200px',md:'180px',sm:'180px',xs:'165px'},
                width: {xl:'200px',lg: '210px',md:'200px',sm:'200px',xs:'160px'},
                   
                    borderRadius: '5px',
                    
                    backgroundColor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    flexDirection: 'column' // Clip the inner image to the container dimensions
                }}
            >
                <Box
                    sx={{
                        height:{xl:'180px',lg: '200px',md:'180px',sm:'180px',xs:'165px'},
                        width: {xl:'200px',lg: '210px',md:'200px',sm:'200px',xs:'170px'},
                        backgroundColor: 'blue',
                        position: 'relative',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage:
                        `url('${props.url}')`,
                        transition: 'transform 0.3s', // Add transition property for smooth zoom effect
                        '&:hover': {
                            transform: 'scale(1.1)', // Zoom in by 10% on hover
                            transformOrigin: 'center', // Keep the zoom centered within the box
                        },
                    }}
                >
                </Box>

            </Box>
                <IconButton sx={{
                position: 'absolute',
                paddingX:{xl:'5px',lg:'5px',md:'5px',sm:'3px',xs:'2px'},
                paddingY:{xl:'5px',lg:'5px',md:'5px',sm:'3px',xs:'2px'},
                backgroundColor:'white',
                right:{xl:'12px',lg:'20px',md:'12px',sm:'12px',xs:'8px'},
                bottom:{xl:'21%',lg:'22%',md:'21%',sm:'21%',xs:'24%'},
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
      <FavoriteIcon sx={{height:{xl:'15px',lg:'25px',md:'25px',sm:'22px',xs:'20px'}, width:{xl:'15px',lg:'25px',md:'25px',sm:'22px',xs:'20px'},}} />
    </IconButton>
    <IconButton sx={{
                position: 'absolute',
                paddingX: '5px',
                paddingY: '5px',
                backgroundColor:'white',
                right:'10px',
                top:'10px',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
      <Looks sx={{height:{xl:'15px',lg:'25px',md:'25px',sm:'22px',xs:'20px'}, width:{xl:'15px',lg:'25px',md:'25px',sm:'22px',xs:'20px'},}} />
    </IconButton >
    <Box sx={{
                position: 'absolute',
                paddingX: '5px',
                paddingY: '2px',
                backgroundColor:'white',
                left:'10px',
                top:'10px',
                boxShadow: '0 4px 8px black',
                // height:'20px',
                // width:'70px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                borderRadius:'10px',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
           <img height={'15px'}  width={'15px'} src="https://static.vecteezy.com/system/resources/previews/018/842/764/original/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png" alt="" srcset="" />
           <Box component="span">
           < Typography sx={{ fontSize: '12px', fontWeight: 'semi-bold', color: 'black' }}>({props.rating})</Typography>
</Box>
           
    </Box>
  
   <Box sx={{margin:"10px"}}>
   <Typography sx={{ fontSize: {xl:'13px',lg:'15px',md:'13px',sm:'13px',xs:'11px'}, fontWeight: 'bold', color: '#4C9BF7' }}>
   {props.name}
                            </Typography>
                            
                            <Typography sx={{ fontSize:{xl:'8px',lg:'12px',sm:'0px',xs:'0px'}, fontWeight: 'normal', color: 'black'}}>
                            {props.description}
                            </Typography>
                           <Box sx={{display:"flex",
                alignItems: 'center',
                justifyContent:'space-between',}}>
                           <Box sx={{display:"flex",
                alignItems: 'center',
                justifyContent:'center',

                }}>
                          
                            <img height={'20px'}  width={'20px'} src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-symbol-6863354-5628240.png" alt="" srcset="" />
                            <Typography sx={{ fontSize: {xl:'13px',lg:'15px',md:'13px',sm:'13px',xs:'13px'}, fontWeight: {lg:'bold',md:'600',sm:'600',xs:'600'}, color: 'black' }}>
                            {props.price}
                            </Typography>
                           </Box>
                          
                            <Button onClick={handleProductDetailsClick} sx={{
                                paddingX:'20px',
                                paddingY:'0px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'black',
                                borderColor: 'black', // Set the border color here
                                '&:hover': {
                                    backgroundColor: 'black', // Set the hover color here
                                    color: 'white',
                                    borderColor: 'black',
                                },
                            }} variant="outlined">Add</Button>
                           
                           </Box>
   </Box>
            
        </Box>
      
    );
}
