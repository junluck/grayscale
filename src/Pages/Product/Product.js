import React from "react";
import Footer from "../../Components/Footer/Footer";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import RecentlyViewed from "../../Components/RecentlyViewed/RecentlyViewed";

function Product(){

    return(
        <div>
            <ProductDetails />
            <RecentlyViewed />
            <Footer />
        </div>
    )
   
}

export default Product