import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { substractToQuantity } from "../../features/cartSlice";
import { setQuantity } from "../../features/cartSlice";
import { addToQuantity } from "../../features/cartSlice";
import { removeFromCart } from "../../features/cartSlice";
import { cartDisplayTrueFalse } from "../../features/cartSlice";
import { useEffect } from "react";
import { addNumberToCart } from "../../features/cartSlice";
import { isClickedBoolThreeFalse , isClickedBoolFourTrue, isClickedBoolFourFalse} from "../../features/isClicked";
import { addSizeClothing } from "../../features/clothingSizeSlice";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./CheckoutTwo.css"
 

function CheckoutTwo(){
    const CartNumberSlice = useSelector(state => state.CartNumberSlice)
    const cartSlice = useSelector(state => state.CartSlice);
    const dispatch = useDispatch();
    const currency =  useSelector((state)=> state.CurrencySlice);
    const quantityGroup = useSelector(state => state.CartQuantitySlice);
    const isClickedThree = useSelector(state => state.IsClickedThreeSlice);
    const isClickedFour = useSelector(state => state.IsClickedFourSlice)
    const clothingSizeSlice = useSelector(state => state.clothingSize)
    const sendDataToBackend = async (data,quantity) =>{
        let finalData = [data,quantity];
        try{
            const response = await fetch('http://localhost:5000/api/submit',{
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
            console.error("Eroor sending data", error)
        }
    }
      useEffect(()=>{
                 dispatch(addNumberToCart(cartSlice));
                 if(cartSlice.length <= 0){
                     dispatch(isClickedBoolThreeFalse())
                    dispatch(isClickedBoolFourFalse())
                 }
                 else{
                    dispatch(isClickedBoolFourTrue())
                 }

             },[cartSlice])
             
     useEffect(()=>{
                 dispatch(cartDisplayTrueFalse(CartNumberSlice))  
             },[CartNumberSlice])
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[]) 
     
    useEffect(()=>{
               dispatch(cartDisplayTrueFalse(CartNumberSlice))  
           },[CartNumberSlice])
    
    return(
        <div className={isClickedFour?"mainCheckoutTwo":"mainCheckoutTwoActive"}>
            <div className="checkoutUnderline">
                <h2>CART</h2>
                <span></span>
            </div>
            <div className={isClickedFour?"emptyCartAndTitleDeactive":"emptyCartAndTitle"}>
                <img src="assests/images/empty cart.svg" className="emptyCartLogo"/>
                <h3>Your cart is emtpy</h3>
                <Link to={"/manOrWomenChoice"}><button className="continueShopping">CONTINUE SHOPPING</button></Link>
            </div>
            <div className="groupCheckoutsTwo">
               {cartSlice.map((element,index)=>{
                                  return(
                                      <div className="checkoutItemTwo">
                                          <img src={element.picture} className="checkoutImageTwo"/>
                                          <div className="catergoryAndTitleCheckoutTwo">
                                              <h3 className="catergoryCheckout">{element.catergory}</h3>
                                              <h4 className="titleCheckout">{element.title}</h4>
                                          </div>
                                          <form className="sizesForm" value={clothingSizeSlice[element.indexOf]} onChange={(e)=>{
                                               e.target.value = e.target.value;
                                               dispatch(addSizeClothing({index:element.indexOf,size:clothingSizeSlice[element.indexOf]}))
                                            }}>
                                            <select id="options" name="options">
                                                <option value={"XS"} selected={clothingSizeSlice[element.indexOf]==="XS"}>XS</option>
                                                <option value={"S"} selected={clothingSizeSlice[element.indexOf]==="S"}>S</option>
                                                <option value={"M"} selected={clothingSizeSlice[element.indexOf]==="M"}>M</option>
                                                <option value={"L"} selected={clothingSizeSlice[element.indexOf]==="L"}>L</option>
                                                <option value={"XL"} selected={clothingSizeSlice[element.indexOf]==="XL"}>XL</option>
                                                <option value={"XXL"} selected={clothingSizeSlice[element.indexOf]==="XXL"}>XXL</option>
                                            </select>
                                          </form>
                                          <form className="plusQuantityMinus">
                                              <div className="minusVect" onClick={()=>{
                                                      dispatch(substractToQuantity(element.indexOf))
                                                  }}>
                                                  <img src="assests/images/minusVector.svg" className="minusVector" />
                                              </div>
                                              <input type="number" className="quantity" value={quantityGroup[element.indexOf]} onClick={(e)=>{
                                                  e.target.value = ""
                                                  
                                              }} onBlur={(e)=>{
                                                  if (e.target.value <= 0 ){
                                                      e.target.value = 1;
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:1}))
                                                  }
                                              }} onChange={(e)=>{
                                                  
                                                  if(e.target.value.length > 0){
                                                      
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:Number(e.target.value)}))
                                                  }
                                                  else{
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:""}))
                                                  }
                                                 
                                              }}/>
                                              <div className="plusVect" onClick={(e)=>{
                                                      dispatch(addToQuantity(element.indexOf))
                                                  
                                                      
                                                  }}>
                                                  <img src="assests/images/plusVector.svg" className="plusVector"/>
                                              </div>
                                          </form>
                                          <div className="priceOfItemTwo">
                                              <h4 className="price">{currency}{element.price * quantityGroup[element.indexOf]}</h4>
                                          </div>
                                          <img src="assests/images/exit.svg" className="exitVectorTwo" onClick={(e)=>{
                                              dispatch(removeFromCart(index))
                                              dispatch(setQuantity({indexOf:element.indexOf,setValue:1}))
                                              
                                              
                                              }}/>
              
                                      </div>
                                  )
                              })}
            </div>
            <button className={isClickedFour?"checkoutButtonTwo":"checkoutButtonTwoDeactive"} onClick={(e)=>{
                sendDataToBackend(cartSlice, quantityGroup);
            }}>CHECKOUT</button>
            <div className={isClickedFour?"":"footerTwo"}>
                <Footer/>
            </div>
        </div>
    )
}

export default CheckoutTwo;