import React from "react";
import "./Catergory.css"
import { useDispatch } from "react-redux";
import { isClickedBool } from "../../features/isClicked";
import { arrayReseter,reset,pageDisplayerFalse,pageDisplayerTrue,pageNumberCircleReset } from "../../features/productSlice";
import inventory from "../../features/inventory";
import { arrayOfSortedItems } from "../../features/productSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewsLetterMessage from "../NewsLetterMessage/NewsLetterMessage";
function Catergory({setIsClickedFive}){
    const dispatch = useDispatch()
    const arrayOfBools = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    const [isAddedToNewsLetter,setIsAddedToNewsLetter] = useState(false)
    function arraySetter(index,arrayNew,setter){
        let array = [...arrayNew];
        array[index] = !array[index];
        setter(array)   
        console.log(array)
    }

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
    function dispatcher(arrayOfClothes){
        dispatch(reset())
        dispatch(arrayReseter())
        dispatch(arrayOfSortedItems(arrayOfClothes))
        dispatch(pageDisplayerFalse())
    }
    return(
        <div className="categoryOuter">
            {!isAddedToNewsLetter && <NewsLetterMessage setIsAddedToNewsLetter={setIsAddedToNewsLetter} isAddedToNewsLetter={isAddedToNewsLetter} />}
        <div className="categoryInner">
            <div className="catergoryHeading"> 
                <h2>CATEGORY</h2>
                <span></span>
            </div> 
            <div className="whiteBackground"></div>
            <div className="manAndWomen">
                <div className="man">
                    <img src="assests/images/CategoryPics/Man.png" className="manPicture"/>
                    <h4>MEN</h4>
                    <Link to={"items"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",display:"flex",justifyContent:"center"}}><button onClick={
                    ()=>{
                    dispatch(isClickedBool(0));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
                    for(const clothing in inventory.men.tops){
                        let array = [...inventory.men.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    for(const clothing in inventory.men.bottoms){
                        let array = [...inventory.men.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                        }
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>SHOP NOW</button></Link>
                </div>
                <div className="tShirt">
                    <img src="assests/images/CategoryPics/tshirt.png" className="tShirtPicture"/>
                    <h4>T-SHIRT</h4>
                    <Link to={"items"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",display:"flex",justifyContent:"center"}}><button  onClick={()=>{
                            arraySetter(0,arrayOfBools,setIsClickedFive);
                            dispatcher(inventory.men.tops.tShirts)
                            dispatch(isClickedBool(0))
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>SHOP NOW</button></Link>
                </div>
                <div className="women">
                    <img src="assests/images/CategoryPics/women.png" className="womenPicture"/>
                    <h4>WOMEN</h4>
                    <Link to={"items"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                    dispatch(isClickedBool(1));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
                    for(const clothing in inventory.women.tops){
                        let array = [...inventory.women.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))
                    }

                    for(const clothing in inventory.women.bottoms){
                        let array = [...inventory.women.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    
                }}>SHOP NOW</button></Link>
                </div>
                <div className="skirt">
                    <img src="assests/images/CategoryPics/skirt.png" className="skirtPicture"/>
                    <h4>SKIRT</h4>
                    <Link to={"items"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",display:"flex",justifyContent:"center"}}>
                        <button onClick={()=>{
                            arraySetter(16,arrayOfBools,setIsClickedFive);
                            dispatcher(inventory.women.bottoms.skirts);
                            dispatch(isClickedBool(1));
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>SHOP NOW</button>
                    </Link>
                </div>
            </div>
            <div className="joinUsVoucherEmail">
                <div className="joinUsTen">
                    <h5>Join us and recieve a voucher code</h5>
                    <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                </div>
                <div className="subscribeNewsLetter">
                    <form className="formVoucher" onSubmit={async (e)=>{
                                    e.preventDefault()
                                    try{
                                        const response = await sendDataToBackend({email:e.target[0].value});
                                           setIsAddedToNewsLetter(response); 
                                        }
                                    catch(error)
                                        {
                                            console.log(error)
                                        }
                                }}>
                        <label for="emailInput"id="emailLabel">Email</label>
                        <div className="buttonInput">
                            <input name="emailInput" id="emailInput" placeholder="Enter email address"/>
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Catergory