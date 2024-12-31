import React from "react";
import "./NewsLetter.css"
function NewsLetter(){
    return(
        <div className="joinUsVoucherEmailTwo">
                        <div className="joinUsTenTwo">
                            <h5>Join us and recieve a voucher code</h5>
                            <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                        </div>
                        <div className="subscribeNewsLetterTwo">
                            <form className="formVoucherTwo">
                                <label for="emailInput"id="emailLabelTwo">Email</label>
                                <div className="buttonInputTwo">
                                    <input name="emailInputTwo" id="emailInputTwo" placeholder="Enter email address"/>
                                    <button>Subscribe</button>
                                </div>
                            </form>
                        </div>
        </div>
    )
}

export default NewsLetter