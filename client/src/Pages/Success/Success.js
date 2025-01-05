import React, { useEffect } from "react";
import SuccessAnimation from "../../Components/SuccessAnimatuion/SuccessAnimatuion";
import "./Success.css"
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { clearCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { SuccessAndFailure } from "../../features/successAndFailure";
function Success(){
    const dispatch = useDispatch()
    const navigate = useNavigate();


    
    useEffect(()=>{
        const timer = setTimeout(()=>{ 
            navigate("/");
        },3000);
        
        return() => clearTimeout(timer);
        
    },[navigate]);


    return(
        <>
        <div className="successDiv">
              <SuccessAnimation />
              <h3 className="successTitle">Success!</h3>
                     
        </div>
        <Footer />  
        </>
    )
}

export default Success