import React from "react";
import "./Header.css"
function Header(){
    return(
        <div className="headerOuter">
            <div className="headerInner">
                <img src="assests/images/GRAYSCALE.svg" className="grayScaleLogo"/>
                <img src="assests/images/headerPicture.png" className="backgroundPicture"/>
                <div className="newColllection">
                    <h3 className="newCollectionHeading">NEW COLLECTION AVAILABLE</h3>
                    <button className="shopNowButton">SHOP NOW</button>
                </div>
            </div>
            <div className="premiumBlendBox">
                <div className="headingAndSpan">
                    <h3>Premium Blended Clothing</h3>
                    <span></span>
               </div> 
               <p className="paragraphBlended">Easy way to start your day, Easy way to end it off.<br/>
                We take pride in the quality of our brand, <br/>
                So that you get the <b>BEST.</b></p>
            </div>
        </div>
    )
}

export default Header