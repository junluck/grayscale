import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css"
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
function Home(){
    return(
        <div className="header">  
            <Header />
            <ProductSlider />
        </div>
    )
}

export default Home