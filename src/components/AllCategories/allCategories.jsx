import React, { useEffect, useState } from "react";
import './allCategories.css'
import Grid from '@mui/material/Grid';




const categories = [
    {
        id: 1,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 1',
        sub_categories: [
            {
                id: 1,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 2,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
        ]

    },
    {
        id: 2,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 3,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 4,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 5,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 6,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: [
            {
                id: 1,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 2,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
        ]
    },
    {
        id: 7,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: [
            {
                id: 1,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 2,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
            {
                id: 3,
                icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
                name: 'Category 1',
            },
        ]
    },
    {
        id: 8,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 9,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 7,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 8,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    {
        id: 9,
        icon: 'https://cdn-icons-png.flaticon.com/128/819/819873.png',
        name: 'Category 2',
        sub_categories: []
    },
    // Add more categories as needed
];

function AllCategories() {
    const [hoveredValue, changeHoveredValue] = useState(null);
    
    return (
        <div className="mainDivCategories">
            <div className="categoriesHeader">
                <div className="leftPadd">

                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/3405/3405802.png" alt="" srcset="" />
                <h1>
                   Product Categories
                </h1>
            </div>
            {categories.map((category) => (
                <div style={{ display: 'flex' }} onMouseOut={() => {
                    changeHoveredValue(null)
                }} onMouseOver={() => {
                    changeHoveredValue(category.id)
                    console.log(hoveredValue);
                }}>
                    <div key={category.id} className="categoriesTabs" >
                        <div className="categoryIcon">
                            <img src={category.icon} alt={`Icon for ${category.name}`} />
                        </div>
                        <div className="categoryName">
                            <h1>{category.name}</h1>
                        </div>
                    </div>
                    <div className="RightsideBa1" style={{
                        display: hoveredValue === category.id ? 'block' : 'none'
                    }}>
                         <Grid container >
                                            {category.sub_categories.map((category1) => (
                                                <Grid item key={category1.id}  xs={12} sm={6} md={6} lg={6}>
                                                    <div className="div">
                                <div className="sub_category">
                                <div className="bannerSubCategory">
                                    <img src="" alt="" srcset="" />
                                </div>
                            </div>
                            <div key={category1.id} className="categoriesTabs">
                                <div className="categoryIcon">
                                    <img src={category1.icon} alt={`Icon for ${category1.name}`} />
                                </div>
                                <div className="categoryName">
                                    <h1>{category1.name}</h1>
                                </div>
                            </div>
                            </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                       
                    </div>
                </div>
            ))}
            <div className="heightSize">

            </div>

        </div>

    )
}
export default AllCategories;