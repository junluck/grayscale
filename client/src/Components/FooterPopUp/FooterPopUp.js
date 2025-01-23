import React from "react";
import { useState } from "react";

function FooterPopUp(){
    const [terms,setTerms] = useState(-1)
    return(
        <>
            {terms === 0 && <div className="TermsAndCondition">
                <h2>Terms & Conditions</h2>
                <div className="bodyTerms">
                    <div>
                        <h3>General Information</h3>
                        <ol>
                            <li>These Terms and Conditions apply to all users of the website, including but not limited to browsers, customers, and merchants.</li>
                            <li>By accessing or using any part of the website, you agree to be bound by these Terms and Conditions.</li>
                            <li>If you do not agree to these terms, you may not access the website or use any services.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Products and Services</h3>
                        <ol>
                            <li>All products are subject to availability. We reserve the right to discontinue or limit the quantities of any product at any time without notice.</li>
                            <li>Colors and images of products are displayed as accurately as possible, but we cannot guarantee exact color representation due to screen variations.</li>
                            <li>Prices for our products are subject to change without notice.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Orders and Payments</h3>
                        <ol>
                            <li>By placing an order, you agree to provide current, accurate, and complete information.</li>
                            <li>Payment must be made at the time of purchase.</li>
                            <li>We reserve the right to cancel or refuse any order at our discretion, including for suspected fraud or unauthorized transactions.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Shipping and Delivery</h3>
                        <ol>
                            <li>Shipping times and costs are estimated at checkout and may vary based on your location.</li>
                            <li>We are not responsible for delays caused by shipping carriers or customs clearance.</li>
                            <li>International orders may be subject to customs fees, which are the customer’s responsibility.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Returns and Refunds</h3>
                        <ol>
                            <li> We accept returns or exchanges within 7 days of delivery, provided the item is unworn, unwashed, and in its original condition with tags.</li>
                            <li>Sale items and personalized/custom orders are non-refundable unless damaged or defective.</li>
                            <li>To initiate a return, please contact us at appemailer786@gmail.com.</li>
                            <li> Refunds are processed within 3 business days of receiving the returned item.</li>
                        </ol>
                    </div>
                </div>
            </div>}{terms === 1 && <div>
                <h3>About Us</h3>
                <p>
                    Welcome to Grayscale – your ultimate destination for stylish, high-quality, and affordable fashion.<br/>
                    We believe that everyone deserves to feel confident and express themselves through clothing,<br/>
                    which is why we’ve curated a collection that caters to all styles, sizes, and occasions.<br/>
                    <br/>
                    At Grayscale , we’re more than just a clothing store. We’re a community that celebrates <br/>
                    individuality, inclusivity, and creativity. Whether you’re looking for everyday essentials, bold <br/>
                    statement pieces, or timeless classics, we’ve got you covered.
                </p>
                
                </div>}
                {terms === 2 && <div>
                    
                    
                    </div>}
        </>
    )
}