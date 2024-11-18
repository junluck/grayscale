import React from "react";
import "./Header.css"
function Header(){
    return(
        <div className="headerOuter">
            
            <div className="headerInner">
                <img src="assests/images/GRAYSCALE.svg" className="grayScaleLogo"/>
                <img src="assests/images/headerPicture.png" className="backgroundPicture"/>

            </div>
        </div>
    )
}

export default Header