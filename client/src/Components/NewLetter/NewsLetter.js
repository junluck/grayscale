import React from "react";
import "./NewsLetter.css"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GroupOfEmail } from "../../features/emailNewsLetterSlice";
import { useSelector } from "react-redux";
import NewsLetterMessage from "../NewsLetterMessage/NewsLetterMessage";
function NewsLetter(){
    const [isAddedToNewsLetter,setIsAddedToNewsLetter] = useState(false)
    const dispatch = useDispatch()
    const groupOfEmails = useSelector(state => state.EmailNewsLetterSlice)
    useEffect(()=>{
            sessionStorage.setItem("groupOfEmails",JSON.stringify(groupOfEmails))
        },[groupOfEmails]);
        useEffect(()=>{
            dispatch(GroupOfEmail(JSON.parse(sessionStorage.getItem("groupOfEmails"))))
        },[])
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
                return response
            }
            else{
                alert("You not added to the newsletter please try again")
                return response
            }
        }
        catch(error){
            console.error("Error sending data", error)
            alert("You not added to the newsletter please try again")
        }
    }
    return(
        <div className="joinUsVoucherEmailTwo">
                       {isAddedToNewsLetter && <NewsLetterMessage setIsAddedToNewsLetter={setIsAddedToNewsLetter} isAddedToNewsLetter={isAddedToNewsLetter} />}
                        <div className="joinUsTenTwo">
                            <h5>Join us and recieve a voucher code</h5>
                            <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                        </div>
                        <div className="subscribeNewsLetterTwo">
                            <form className="formVoucherTwo" onSubmit={async (e)=>{
                                    e.preventDefault()
                                    let bool = false
                                    dispatch(GroupOfEmail(e.target[0].value));
                                    groupOfEmails.forEach(element => {
                                        if(element === e.target[0].value){
                                            bool = true
                                        }
                                    });
                                    if(bool){
                                        alert("Email has already been added.")
                                    }
                                    try{
                                        const response = await sendDataToBackend({email:e.target[0].value});
                                           setIsAddedToNewsLetter(response); 
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