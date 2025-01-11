import React from "react";
import "./ContactUs.css"
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import MailFailed from "../../Components/MailFailed/MailFailed";
import MailSuccess from "../../Components/MailSuccess/MailSuccess";

function ContactUs(){
    
    const [mailSuccessFailed,setMailSuccessFailed] = useState(false)
    useEffect(()=>{
            
        const timer = setTimeout(()=>
        {
            setMailSuccessFailed(false)
        },4000)
        
        return () => clearTimeout(timer)
    },[mailSuccessFailed])
    const sendDataToBackend = async (dataObject) =>{
        try{
            const response = await fetch(`https://grayscale-server.vercel.app/api/sendEmail`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(dataObject)
            })
            const result = await response.json();
            if(response.ok){
                return response
            }
        }
        catch(error){
            console.error("Error sending data", error)
            alert("Please try again email was not sent.")
        }
    }
    return(
        <div>
            <div className="headingContactAndSpan">
                <h2 className="headingContact">CONTACT US</h2>
                <span className="contactSpan"></span>
            </div>
            {mailSuccessFailed && <MailSuccess />}
            {!mailSuccessFailed && <div className="contactOuter">
                
                <form className="contactForm" onSubmit={async (e)=>{
                    e.preventDefault()
                    try{
                        const response = await sendDataToBackend({name:e.target[0].value, surname:e.target[1].value,email:e.target[2].value , subject:e.target[3].value, message:e.target[4].value});
                        setMailSuccessFailed(response)
                        
                    }catch(e){
                        console.log(e)
                    }
                }}>
                    <div className="firstNameAndSurnameTwo">
                        <input type="text" id="firstNameTwo" name="firstName" placeholder="First Name" required/>
                        <input type="text" id="surnameTwo" name="surname" placeholder="Surname"/>
                    </div>
                    <input type="email" id="emailTwo" name="email" placeholder="Email" required/>
                    <input type="text" id="numberTwo" name="number" placeholder="Subject" required/>
                    <textarea id="messageTwo" name="message" rows="4" cols="50" placeholder="Type your message" required/>
                    <button type="submit" id="sendMessage" onClick={(e)=>{
                        
                    }}>SEND MESSAGE</button>
                </form>
                
            </div>}
            <Footer />
        </div>
    )
}

export default ContactUs;