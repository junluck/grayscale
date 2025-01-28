import React from "react";
import { useState } from "react";
import "./FooterPopUp.css"

function FooterPopUp({containerSwitch, setTerms, terms, setContainerSwitch}){
    
    const [faqArray, setFaqArray] = useState([false,false,false,false,false])
 
    return(
        containerSwitch && <div className="termsConOuterainer">
            <div className="termsNavbar">
                <h2 className="termsAndConditions" onClick={()=>{
                    setTerms(0)
                }}>Terms & Conditions</h2>  
                <span className="navbarLine"></span>
                <h2 className="aboutUs" onClick={()=>{
                    setTerms(1)
                }}>About Us</h2>
                <span className="navbarLineTwo"></span> 
                <h2 className="faqs" onClick={()=>{
                    setTerms(2)
                }}>FAQs</h2> 
                
            </div>
            <img src="assests/images/exitTwo.svg" className="exit" onClick={()=>{
                setContainerSwitch(false)
            }}/>
            {terms === 0 && <div className="TermsAndCondition">
                <div className="faqHeadingAndDropdownMain">
                    <h2>Terms & Conditions</h2>
                    <span className="headingSpan"></span>
                </div>
                <div className="bodyTerms">
                    <div className="generalInformation">
                        <h3>General Information</h3>
                        <ol>
                            <li>These Terms and Conditions apply to all users of the website, including but not limited to browsers, customers, and merchants.</li>
                            <li>By accessing or using any part of the website, you agree to be bound by these Terms and Conditions.</li>
                            <li>If you do not agree to these terms, you may not access the website or use any services.</li>
                        </ol>
                    </div>
                    <div className="Products">
                        <h3>Products and Services</h3>
                        <ol>
                            <li>All products are subject to availability. We reserve the right to discontinue or limit the quantities of any product at any time without notice.</li>
                            <li>Colors and images of products are displayed as accurately as possible, but we cannot guarantee exact color representation due to screen variations.</li>
                            <li>Prices for our products are subject to change without notice.</li>
                        </ol>
                    </div>
                    <div  className="orders">
                        <h3>Orders and Payments</h3>
                        <ol>
                            <li>By placing an order, you agree to provide current, accurate, and complete information.</li>
                            <li>Payment must be made at the time of purchase.</li>
                            <li>We reserve the right to cancel or refuse any order at our discretion, including for suspected fraud or unauthorized transactions.</li>
                        </ol>
                    </div>
                    <div className="shipping">
                        <h3>Shipping and Delivery</h3>
                        <ol>
                            <li>Shipping times and costs are estimated at checkout and may vary based on your location.</li>
                            <li>We are not responsible for delays caused by shipping carriers or customs clearance.</li>
                            <li>International orders may be subject to customs fees, which are the customer’s responsibility.</li>
                        </ol>
                    </div>
                    <div className="returns">
                        <h3>Returns and Refunds</h3>
                        <ol>
                            <li> We accept returns or exchanges within 7 days of delivery, provided the item is unworn, unwashed, and in its original condition with tags.</li>
                            <li>Sale items and personalized/custom orders are non-refundable unless damaged or defective.</li>
                            <li>To initiate a return, please contact us at appemailer786@gmail.com.</li>
                            <li> Refunds are processed within 3 business days of receiving the returned item.</li>
                        </ol>
                    </div>
                </div>
            </div>}{terms === 1 && <div className="aboutUsTab">
                <div className="faqHeadingAndDropdownMain">
                    <h2>About Us</h2>
                    <span className="headingSpan"></span>
                </div>
                <img src="assests/images/GRAYSCALE.svg" className="grayscaleLogo"/>
                <p>
                    Welcome to Grayscale – your ultimate destination for stylish, high-quality, and affordable fashion.<br/>
                    We believe that everyone deserves to feel confident and express themselves through clothing,<br/>
                    which is why we’ve curated a collection that caters to all styles, sizes, and occasions.<br/>
                    <br/>
                    At Grayscale , we’re more than just a clothing store. We’re a community that celebrates <br/>
                    individuality, inclusivity, and creativity. Whether you’re looking for everyday essentials, bold <br/>
                    statement pieces, or timeless classics, we’ve got you covered.<br/>
                    <br/>
                    Our mission is to make fashion accessible, offering a range of pieces that blend versatility, comfort, <br/>
                    and trend-forward designs. We’re committed to providing you with the latest looks, while also making sure <br/>
                    every item is crafted with care and attention to detail. From chic casual wear to eye-catching outfits for <br/>
                    special events, Grayscale is here to help you elevate your wardrobe, express your unique style, and feel your <br/>
                    best every day.<br/>
                    <br/>
                    Our curated collections feature a wide range of styles—from sleek and minimalist to bold, edgy, and everything in between.<br/>
                    We strive to stay ahead of trends while maintaining a timeless appeal, ensuring that each item in our store is not only<br/>
                    on-point but also versatile enough to be worn season after season.<br/>
                    <br/>
                    Inclusivity is at the core of Grayscale. We want everyone to find something that speaks to their personal style,<br/>
                    no matter their shape, size, or background. Our commitment to sustainability also means that we’re constantly working <br/>
                    toward more eco-friendly choices in both our products and packaging, because looking good and feeling good should go <br/>
                    hand in hand with caring for our planet.<br/>
                    <br/>
                    Grayscale is more than just a clothing store—we’re a community of like-minded individuals who celebrate individuality <br/>
                    and creativity. We’re here to inspire, connect, and support you in expressing who you truly are, every single day.<br/>
                    <br/>
                    Join us on this journey of self-expression, inclusivity, and style. Let’s make fashion a little more personal and a lot more fun.
                </p>
                
                </div>}
                {terms === 2 && <div className="faqsSection">
                    <div className="faqHeadingAndDropdownMain">
                        <h2>FAQs</h2>
                        <span className="headingSpan"></span>
                    </div>
                    <div className="faqContainerOne">
                        <div className="faqHeadingAndDropdown" onClick={(e)=>{
                                setFaqArray(prev => {
                                    let temp = [...prev];
                                    temp[0] = !temp[0];
                                    return temp;
                                    
                                }
                                )
                            }}>
                            <h3 className="faqHeading">What sizes do you offer?</h3>
                            <img src="assests/images/dropdownMatrial.svg" className={faqArray[0]?"dropdownMaterial":"dropdownMaterialDeactive"} />
                        </div>
                        
                        <p className={faqArray[0] ? "faqText" : "faqTextDeactive"}>
                            We offer a wide range of sizes to ensure everyone can find something that fits comfortably.<br/> 
                            Please check our size chart on each product page for detailed measurements.  
                        </p>
                        <span className="underlineFaq"></span>
                    </div>
                    <div className="faqContainerTwo">
                        <div className="faqHeadingAndDropdown" onClick={(e)=>{
                                setFaqArray(prev => {
                                    let temp = [...prev];
                                    temp[1] = !temp[1];
                                    return temp;
                                    
                                }
                                )
                            }}>
                            <h3 className="faqHeading">How do I know which size to choose?</h3>
                            <img src="assests/images/dropdownMatrial.svg" className={faqArray[1]?"dropdownMaterial":"dropdownMaterialDeactive"} />
                        </div>
                        
                        <p className={faqArray[1] ? "faqText" : "faqTextDeactive"}>
                            To find your best fit, please refer to our size guide located on each product page.<br/>
                            If you’re still unsure, feel free to reach out to our customer support team for personalized assistance.
                        </p>
                        <span className="underlineFaq"></span>
                    </div>
                    <div className="faqContainerThree">
                        <div className="faqHeadingAndDropdown" onClick={(e)=>{
                                setFaqArray(prev => {
                                    let temp = [...prev];
                                    temp[2] = !temp[2];
                                    return temp;
                                    
                                }
                                )
                            }}>
                            <h3 className="faqHeading">How can I track my order?</h3>
                            <img src="assests/images/dropdownMatrial.svg" className={faqArray[2]?"dropdownMaterial":"dropdownMaterialDeactive"} />
                        </div>
                        
                        <p className={faqArray[2] ? "faqText" : "faqTextDeactive"}>
                            Once your order has shipped, you will receive a tracking number via email. You can use this tracking<br/> 
                            number to monitor the status of your delivery on the courier's website.
                        </p>
                        <span className="underlineFaq"></span>
                    </div>
                    <div className="faqContainerFour">
                        <div className="faqHeadingAndDropdown" onClick={(e)=>{
                                setFaqArray(prev => {
                                    let temp = [...prev];
                                    temp[3] = !temp[3];
                                    return temp;
                                    
                                }
                                )
                            }}>
                            <h3 className="faqHeading">What payment methods do you accept?</h3>
                            <img src="assests/images/dropdownMatrial.svg" className={faqArray[3]?"dropdownMaterial":"dropdownMaterialDeactive"} />
                        </div>
                        
                        <p className={faqArray[3] ? "faqText" : "faqTextDeactive"}>
                            We accept various payment methods, including major credit/debit cards.<br/> 
                            For more information, please check our payment page.
                        </p>
                        <span className="underlineFaq"></span>
                    </div>
                    <div className="faqContainerFive">
                        <div className="faqHeadingAndDropdown"  onClick={(e)=>{
                                setFaqArray(prev => {
                                    let temp = [...prev];
                                    temp[4] = !temp[4];
                                    return temp;
                                    
                                }
                                )
                            }}>
                            <h3 className="faqHeading">How can I contact customer support?</h3>
                            <img src="assests/images/dropdownMatrial.svg" className={faqArray[4]?"dropdownMaterial":"dropdownMaterialDeactive"}/>
                        </div>
                        
                        <p className={faqArray[4] ? "faqText" : "faqTextDeactive"}>
                            If you have any questions or need assistance, please feel free to contact our customer support team through our<br/>
                            contact page. We’re here to help!
                        </p>
                        <span className="underlineFaq"></span>
                    </div>
                    
                    </div>}
        </div>
    )
}

export default FooterPopUp