import React, { useEffect } from "react";
import FailedAnimation from "../../Components/FailedAnimation/FailedAnimation";
import "./Failed.css"
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
function Failed(){
    const navigate = useNavigate()
    useEffect(()=>{
        const timer = setTimeout(()=>{ 
            navigate("/checkout");
        },3000);
        return() => clearTimeout(timer);
    },[]);


    return(
        <>
            <div className="failedDiv">
                <FailedAnimation />
                <h3 className="failedTitle">Failed, please try again.</h3>
                        
            </div>
            <Footer />  
        </>
    )
}

export default Failed