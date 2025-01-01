import React, { useEffect } from "react";
import "./BillingDetails.css"
import { useSelector } from "react-redux";
import { useState } from "react";


function BillingDetails(){
    const cartSlice = useSelector(state => state.CartSlice);
    const quantity = useSelector(state => state.CartQuantitySlice);
    const [totalAmount,setTotalAmount] = useState(0);
    
     const sendDataToBackend = async (data,quantity) =>{
            let finalData = [data,quantity];
            try{
                const response = await fetch(`/api/submit`,{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify(finalData)
                })
                const result = await response.json();
                console.log(result);
                if(response.ok){
                    window.location = result.url
                }
            }
            catch(error){
                console.error("Error sending data", error)
            }
        }
    useEffect(()=>{ 
        let totalAmountTwo = 0
        cartSlice.forEach(element => {
            let amount = element.price * quantity[element.indexOf];
            totalAmountTwo += amount
        });
        setTotalAmount(totalAmountTwo)
    },[cartSlice,quantity])
    return(
        <div>
            <div className="headingCheckOutAndSpan">
                <h2 className="headingCheckout">CHECKOUT</h2>
                <span className="checkoutSpan"></span>
            </div>
            <div className="billingDetailsOuter">
                
                <form className="billingDetailsForm" onSubmit={(e)=>{
                    e.preventDefault()
                    sendDataToBackend(cartSlice, quantity);
                }}>
                    <div className="firstNameAndSurname">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                        <input type="text" id="surname" name="surname" placeholder="Surname"/>
                    </div>
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                    <input type="text" id="address" name="address" placeholder="Physical Address" required/>
                    <input type="number" id="number" name="number" placeholder="Tel Number" required/>
                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message" required/>
                    <div className="total">
                        <h2 className="totalHeading">Total:{`$${totalAmount}`}</h2>
                    </div>
                    <button type="submit" id="checkout" onClick={(e)=>{
                        
                    }}>CHECKOUT</button>
                </form>
                
            </div>
        </div>
    )
}
export default BillingDetails