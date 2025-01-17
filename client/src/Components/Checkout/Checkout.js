import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css"
import { addToQuantity, substractToQuantity, setQuantity, removeFromCart} from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isClickedBoolThreeFalse } from "../../features/isClicked";

function Checkout(){
    const dispatch = useDispatch()
    const cart = useSelector(state=> state.CartSlice);
    const currency =  useSelector((state)=> state.CurrencySlice);
    const quantityGroup = useSelector(state => state.CartQuantitySlice);
    const isClickedThree = useSelector(state => state.IsClickedThreeSlice);
    useEffect(()=>{
        sessionStorage.setItem("qauntityGroup",JSON.stringify(quantityGroup))
    },[quantityGroup])
    return(
        <div className={isClickedThree?"checkout":"checkoutDeactive"}>
            <div className="groupOfCheckouts">
                {cart.map((element,index)=>{
                    return(
                        <div className="checkoutItem">
                            <img src={element.picture} className="checkoutImage"/>
                            <div className="catergoryAndTitleCheckout">
                                <h3 className="catergoryCheckout">{element.catergory}</h3>
                                <h4 className="titleCheckout">{element.title}</h4>
                            </div>
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
                            <div className="priceOfItem">
                                <h4 className="price">{currency}{element.price * quantityGroup[element.indexOf]}</h4>
                            </div>
                            <img src="assests/images/exit.svg" className="exitVector" onClick={(e)=>{
                                dispatch(removeFromCart(index))
                                dispatch(setQuantity({indexOf:element.indexOf,setValue:1}))
                                
                                
                                }}/>

                        </div>
                    )
                })}

            </div>
        <Link to={"cart"} className="checkoutButtonAnchor"><button className="checkoutButton" onClick={(e)=>{
            dispatch(isClickedBoolThreeFalse())
        }}>CHECKOUT</button></Link>
        </div>
    )
}

export default Checkout