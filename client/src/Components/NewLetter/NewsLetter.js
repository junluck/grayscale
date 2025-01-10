import React from "react";
import "./NewsLetter.css"
import { useState } from "react";
function NewsLetter(){
    const sendDataToBackend = async (dataObject) =>{
        try{
            const response = await fetch(`https://grayscale-server.vercel.app/api/newsLetter`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(dataObject)
            })
            const result = await response.json();
            if(response.ok){
                if(result === false){
                    alert("You not added to the newsletter please try again")
                }
                return response
            }
        }
        catch(error){
            console.error("Error sending data", error)
        }
    }
    return(
        <div className="joinUsVoucherEmailTwo">
                        <div className="joinUsTenTwo">
                            <h5>Join us and recieve a voucher code</h5>
                            <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                        </div>
                        <div className="subscribeNewsLetterTwo">
                            <form className="formVoucherTwo" onSubmit={async (e)=>{
                                    try{
                                        const response = await sendDataToBackend({email:e.target.value[0]});
                                            if(response.ok){

                                            }
                                        }
                                    catch(error)
                                        {
                                            console.log(error)
                                        }
                                }}>
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