import React from 'react';
import { Grid } from '@mui/material';
import ProductCard1 from './widgets/productCard'; // Import your ProductCard1 component

const products = [
  {
    id: 1,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695211691_wollar_storage_bag_7.jpg",
    name: "Furhaven Orthopedic",
    price: "19.99",
    description: "Some text about the product..",
    rating:"5.0",
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    arrayImages:[
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors:"",
    sizes:""
  },
  {
    id: 2,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695119619_egg_pen_holder_1.jpg",
    name: "WATER BOTTLES",
    price: "21.99",
    description: "Some text about the product..",
    rating:"5.0",
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    arrayImages:[
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors:"",
    sizes:""
  },
  {
    id: 3,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695037198_sink_faucet_1.jpg",
    name: "KITCHEN ACCESSORIES",
    price: "99.99",
    description: "Some text about the product..",
    rating:"5.0",
    brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268",
    arrayImages:[
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors:"",
    sizes:""
  },
  {
    id: 4,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
    name: "HOME IMPROVEMENT",
    price: "14.99",
    description: "Some text about the product..",
    rating:"5.0",
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    arrayImages:[
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors:"",
    sizes:""
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
            arrayImages={item.arrayImages}
            colors=""
            sizes=""
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClearanceList;
