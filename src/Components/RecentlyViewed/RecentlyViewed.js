import React from "react";
import { useSelector } from "react-redux";
import "./RecentlyViewed.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToQuantity } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import { choosenProduct } from "../../features/singleProductSlice";
import { recentlyViewedArray } from "../../features/RecentlyViewedSlice";

function RecentlyViewed(){
    const recentlyViewedArrayOfProducts = useSelector(state=>state.recentlyViewedArraySlice);
    const currency = useSelector(state => state.CurrencySlice);
    const clothingSizeSlice = useSelector(state => state.clothingSize);
    const cartSlice = useSelector(state => state.CartSlice);
    const dispatch = useDispatch();
    const singleProductSlice  = useSelector(state=> state.singleProductSlice);
    const CartQuantitySlice = useSelector(state => state.CartQuantitySlice)
    return(
        <div className="recentlyViewed">
            <h2 className="recentlyViewedHeading">RECENTLY VIEWED</h2>
            <div className="recentlyViewedItems">
                {recentlyViewedArrayOfProducts.map((element,index)=>{
                    if(element.title != singleProductSlice.title){
                        return(
                            <div className="recenltyViewedProduct">
                                <img src={element.picture} className="recentlyViewedPicture"/>
                                <div className="arrowButtonAndPriceTwo">
                                    <img src="assests/images/addcart.svg" className="addCart" onClick={(e)=>{
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
                                    <Link to={"/Product"} className="arrowButtoBackgroundTwo" ><div className="arrowButtoBackgroundTwo" onClick={(e)=>{
                                        dispatch(choosenProduct(element))
                                        dispatch(recentlyViewedArray(element))
                                        }}>
                                        <img src="assests/images/arrowRight.svg" className="arrowPicTwo"/>
                                    </div></Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>

    )
}

export default RecentlyViewed