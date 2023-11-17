import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowableProductDetails from "../pages/productDetailPage/showableProductDetails";
import MainCouponLandingPage from "../pages/couponsPage/mainCouponsLandingPage";
import MainLandingPage from "../pages/landingPage/landingPage";
import MainStorePage from "../pages/storesCouponsPage/mainStorePage";
import MainCategories from "../pages/categoriesPage/mainCategoriesPage";
import AllStores from "../pages/AllStores/allStores";
import MainCheckOutPage1 from "../pages/checkoutPage/mainCheckoutPage";
import OcassionalFeaturedProducts from "../pages/ocassionalFeaturedProducts/ocassionalFeaturedProducts";
import SpecificCategories from "../pages/categoriesPage/specificCategory";
import CouponCategoryWise from "../pages/couponCategoryWise/couponCategoryWise";

function Routing(categoryValue){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLandingPage/>} />
                <Route path="/product-details/:productName" element={<ShowableProductDetails />} />
                <Route path="/coupon-deals" element={<MainCouponLandingPage/>}/>
                <Route path="/coupon-store/:storeName" element={<MainStorePage category={categoryValue}  />}/>
                <Route path="/all-stores" element={<AllStores/>}/>
                {/* <Route path="/categories" element={<OcassionalFeaturedProducts/>}/> */}
                <Route path="/categories/:category" element={<SpecificCategories category={categoryValue}  /> }/>
                <Route path="/check-out" element={<MainCheckOutPage1/>}/>
                <Route path="/coupon-category-wise/:category" element={<CouponCategoryWise category={categoryValue} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;