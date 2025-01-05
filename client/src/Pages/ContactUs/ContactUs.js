import React from "react";
import "./ContactUs.css"

function ContactUs(){
  
    return(
        <div>
            <div className="headingContactAndSpan">
                <h2 className="headingContact">CONTACT US</h2>
                <span className="contactSpan"></span>
            </div>
            <div className="contactOuter">
                
                <form className="contactForm" onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className="firstNameAndSurnameTwo">
                        <input type="text" id="firstNameTwo" name="firstName" placeholder="First Name" required/>
                        <input type="text" id="surnameTwo" name="surname" placeholder="Surname"/>
                    </div>
                    <input type="email" id="emailTwo" name="email" placeholder="Email" required/>
                    <input type="number" id="numberTwo" name="number" placeholder="Tel Number" required/>
                    <textarea id="messageTwo" name="message" rows="4" cols="50" placeholder="Type your message" required/>
                    <button type="submit" id="sendMessage" onClick={(e)=>{
                        
                    }}>SEND MESSAGE</button>
                </form>
                
            </div>
        </div>
    )
}

export default ContactUs;