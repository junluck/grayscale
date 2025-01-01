import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="footerOuter">
            <div className="footer">
                <div className="grayscaleDiv">
                    <div className="headingGrayscale">
                        <h3>GRAYSCALE</h3>
                        <span></span>
                    </div>
                    <div className="descriptionGrayscale">
                        <div  className="descriptionOne">
                            <p>About Grayscale</p>
                            <p>Careers</p>
                            <p>Info</p>
                            <p>Shipping</p>
                            <p>FAQ's</p>
                        
                        </div>
                        <div  className="descriptionTwo">
                            <p>Terms & Conditions</p>
                            <p>Privacy Statement</p>
                            <p>Blog</p>
                            <p>Cookie Statement</p>
                            <p>Newsletter</p>
                        </div>
                    </div>
                </div>
                <div className="socialsDiv">
                    <div className="socials">
                        <h3>Socials</h3>
                        <span></span>
                    </div>
                    <div className="socialsIcon">
                        <img src="assests/images/Icon awesome-facebook.svg" className="facebookIcon"/>
                        <img src="assests/images/Icon awesome-instagram.svg" className="instagramIcon"/>
                        <img src="assests/images/Icon awesome-linkedin-in.svg" className="linkedinIcon"/>
                        <img src="assests/images/Icon ionic-logo-twitter.svg" className="twitterIcon"/>
                        <img src="assests/images/Icon simple-tiktok.svg" className="tiktokIcon"/>
                    </div>
                </div>
                <div className="paymentsDiv">
                    <div className="payments">
                        <h3>Paymeny Methods</h3>
                        <span ></span>
                    </div>
                    <div className="paymentIcons">
                        <img src="assests/images/Icon simple-visa.svg" className="visaIcon"/>
                        <img src="assests/images/mastercard-full-svgrepo-com.svg" className="mastercardIcon"/>
                    </div>
                </div>
                <div className="copyRight">
                    <img src="assests/images/Icon material-copyright.svg" className="copyrightImage"/>
                    <h4>GRAYSCALE</h4>
                </div>
            </div>
        </div>
    )
}



export default Footer