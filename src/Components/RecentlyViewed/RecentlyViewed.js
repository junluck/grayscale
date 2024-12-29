import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./RecentlyViewed.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToQuantity } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import { choosenProduct } from "../../features/singleProductSlice";
import { recentlyViewedArray } from "../../features/RecentlyViewedSlice";
import { RecentlyViewedBoolTrue , RecentlyViewedBoolFalse} from "../../features/RecentlyViewedSlice";

function RecentlyViewed(){
    const recentlyViewedArrayOfProducts = useSelector(state=>state.recentlyViewedArraySlice);
    const currency = useSelector(state => state.CurrencySlice);
    const clothingSizeSlice = useSelector(state => state.clothingSize);
    const cartSlice = useSelector(state => state.CartSlice);
    const dispatch = useDispatch();
    const recentlyViewedBool = useSelector (state => state.RecentlyViewedSliceBool)
    const singleProductSlice  = useSelector(state=> state.singleProductSlice);
    const CartQuantitySlice = useSelector(state => state.CartQuantitySlice)
    useEffect(()=>{
        if(recentlyViewedArrayOfProducts.length <= 1){
            dispatch(RecentlyViewedBoolFalse())
        }
        else{
            dispatch(RecentlyViewedBoolTrue())
        }
    },[recentlyViewedArrayOfProducts])
    return(
        <div className="recentlyViewed">
            <h2 className={recentlyViewedBool?"recentlyViewedHeading":"recentlyViewedHeadingDeactive"}>RECENTLY VIEWED</h2>
            <div className="recentlyViewedItems">
                {recentlyViewedArrayOfProducts.map((element,index)=>{
                    if(element.title != singleProductSlice.title){
                        return(
                            <div className="recenltyViewedProduct">
                                <img src={element.picture} className="recentlyViewedPicture"/>
                                <div className="arrowButtonAndPriceThree">
                                    <img src="assests/images/addcart.svg" className="addCartTwo" onClick={(e)=>{
                                        dispatch(addToCart({picture:element.picture,title:element.title,quantity:CartQuantitySlice[element.indexOf],price:element.price,catergory:element.catergory,indexOf:element.indexOf,size:clothingSizeSlice[element.indexOf]}))
                                            cartSlice.forEach(elemen => {
                                                if(element.title === elemen.title ){
                                                    dispatch(addToQuantity(element.indexOf))
                                                                }
                                                                
                                                            });
                                                           
                                    }}/>
                                    <div className="titleAndPrice">
                                        <h5 className="recentlyViewedTitle">{element.title}</h5>
                                        <h5 className="recentlyViewedPrice">{`${currency}${element.price}`}</h5>
                                    </div>
                                    <Link to={"/Product"} className="arrowButtoBackgroundThree" ><div className="arrowButtoBackgroundThree" onClick={(e)=>{
                                        dispatch(choosenProduct(element))
                                        dispatch(recentlyViewedArray(element))
                                        }}>
                                        <img src="assests/images/arrowRight.svg" className="arrowPicThree"/>
                                    </div></Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="joinUsVoucherEmail">
                <div className="joinUsTen">
                    <h5>Join us and recieve a voucher code</h5>
                    <p>10% off on your first purchase and free shipping for all new newsletter subscribers</p>
                </div>
                <div className="subscribeNewsLetter">
                    <form className="formVoucher">
                        <label for="emailInput"id="emailLabel">Email</label>
                        <div className="buttonInput">
                            <input name="emailInput" id="emailInput" placeholder="Enter email address"/>
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
                </div>
        </div>

    )
}

export default RecentlyViewed