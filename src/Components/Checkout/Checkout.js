import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css"

function Checkout(){
    const cart = useSelector(state=> state.CartSlice);
    const currency =  useSelector((state)=> state.CurrencySlice);
    return(
        <div className="checkOut">
            <div className="groupOfCheckouts">
                {cart.map((element)=>{
                    return(
                        <div className="checkoutItem">
                            <img src={element.picture} className="checkoutImage"/>
                            <div className="catergoryAndTitleCheckout">
                                <h3 className="catergoryCheckout">{element.catergory}</h3>
                                <h4 className="titleCheckout">{element.title}</h4>
                            </div>
                            <div className="plusQuantityMinus">
                                <div className="minusVect">
                                    <img src="assests/images/minusVector.svg" className="minusVector"/>
                                </div>
                                <input type="textarea" className="quantity"/>
                                <div className="plusVect">
                                    <img src="assests/images/plusVector.svg" className="plusVector"/>
                                </div>
                            </div>
                            <div className="priceOfItem">
                                <h4 className="price">{currency}{element.price * element.quantity}</h4>
                            </div>
                            <img src="assests/images/exit.svg" className="exitVector"/>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Checkout