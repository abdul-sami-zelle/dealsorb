import React from 'react';
import { Grid } from '@mui/material';
import ProductCard1 from './widgets/productCard'; // Import your ProductCard1 component

const products = [
    {
        id: 1,
        imageurl:
          "https://www.idealancy.pk/images/product_gallery/md_1695211691_wollar_storage_bag_7.jpg",
        name: "Furhaven Orthopedic",
        price: "19.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
      },
      {
        id: 2,
        imageurl:
          "https://www.idealancy.pk/images/product_gallery/md_1695119619_egg_pen_holder_1.jpg",
        name: "WATER BOTTLES",
        price: "21.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 3,
        imageurl:
          "https://www.idealancy.pk/images/product_gallery/md_1695037198_sink_faucet_1.jpg",
        name: "KITCHEN ACCESSORIES",
        price: "99.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268"
      },
      {
        id: 4,
        imageurl:
          "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
];

const ClearanceList = () => {
  return (
    <Grid container spacing={2}  sx={{ marginX: '10px' }}>
      {products.map((item, index) => (
        <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
          <ProductCard1
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            rating={item.rating}
            brandLogo={item.brandLogo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClearanceList;
