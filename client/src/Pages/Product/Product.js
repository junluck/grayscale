import React from "react";
import Footer from "../../Components/Footer/Footer";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import RecentlyViewed from "../../Components/RecentlyViewed/RecentlyViewed";
import NewsLetter from "../../Components/NewLetter/NewsLetter";

function Product(){

    return(
        <div>
            <ProductDetails />
            <RecentlyViewed />
            <NewsLetter />
            <Footer />
        </div>
    )
   
}

export default Product