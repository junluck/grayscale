import React from "react";
import "./MailSuccess.css"
import MailAnimation from "../MailAnimation/MailAnimation";
function MailSuccess(){
    
    return(
        <div className="mailSuccessMessage">
            <MailAnimation />
            <h3 className="mailSent">Your mail has been sent.We will get back to you as soon as possible.</h3>
        </div>
    )
}

export default MailSuccess