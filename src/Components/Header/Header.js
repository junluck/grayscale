import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="headerOuter">
            <div className="headerInner">
                <img src="assests/images/GRAYSCALE.svg" className="grayScaleLogo"/>
                
                <div className="newColllection">
                    <h3 className="newCollectionHeading">NEW COLLECTION AVAILABLE</h3>
                    <Link to={"manOrWomenChoice"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"100%",display:"flex",justifyContent:"center" , width:"100%"}}><button className="shopNowButton">SHOP NOW</button></Link>
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