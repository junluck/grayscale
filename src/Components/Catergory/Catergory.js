import React from "react";
import "./Catergory.css"

function Catergory(){
    return(
        <div className="categoryOuter">
        <div className="categoryInner">
            <div className="catergoryHeading"> 
                <h2>CATEGORY</h2>
                <span></span>
            </div> 
            <div className="whiteBackground"></div>
            <div className="manAndWomen">
                <div className="man">
                    <img src="assests/images/CategoryPics/Man.png" className="manPicture"/>
                    <h4>MEN</h4>
                    <button>SHOP NOW</button>
                </div>
                <div className="tShirt">
                    <img src="assests/images/CategoryPics/tshirt.png" className="tShirtPicture"/>
                    <h4>T-SHIRT</h4>
                    <button>SHOP NOW</button>
                </div>
                <div className="women">
                    <img src="assests/images/CategoryPics/women.png" className="womenPicture"/>
                    <h4>WOMEN</h4>
                    <button>SHOP NOW</button>
                </div>
                <div className="skirt">
                    <img src="assests/images/CategoryPics/skirt.png" className="skirtPicture"/>
                    <h4>SKIRT</h4>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="joinUsVoucherEmail">
                <div className="joinUsTen">
                    <h5>join us and recieve a voucher code</h5>
                    <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                </div>
                <div className="subscribeNewsLetter">
                    <form className="formVoucher">
                        <label for="emailInput"id="emailLabel">Email</label>
                        <div className="buttonInput">
                            <input name="emailInput" id="emailInput"/>
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Catergory