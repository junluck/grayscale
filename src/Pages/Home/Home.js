import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css"
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import Catergory from "../../Components/Catergory/Catergory";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewLetter/NewsLetter";

function Home({setIsClickedFive}){
    return(
        <div className="header">  
            <Header />
            <ProductSlider />
            <Catergory setIsClickedFive={setIsClickedFive} />
            
            <Footer />
        </div>
    )
}

export default Home