import React from "react";
import "./NewsLetterMessage.css"
import { useEffect } from "react";
function NewsLetterMessage(){
    
    return(
        <div className="NewsLetterHeadingAndParagraph">
            <div className="NewsLetterHeading">
                <h3>Thank you for subscribing! 🎉</h3>
                <span className="NewLetterSpan"></span>
            </div>
            <p className="newsLettterParagraph">You're officially part of our community. Stay tuned for the latest updates, tips, 
                and exclusive content delivered straight to your inbox. We’re excited to have you on board!</p>
        </div>
    )
}

export default NewsLetterMessage