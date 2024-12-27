import React from "react";
import inventory from "../../features/inventory";
import "./ProductSlider.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addNumberToCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { cartDisplayTrueFalse } from "../../features/cartSlice";
import { addToQuantity } from "../../features/cartSlice";
import { isClickedBoolThreeFalse } from "../../features/isClicked";
import { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function ProductSlider(){
    const dispatch = useDispatch();
    const currency =  useSelector((state)=> state.CurrencySlice);
    const CartNumberSlice = useSelector(state => state.CartNumberSlice);
    const CartQuantitySlice = useSelector(state => state.CartQuantitySlice)
    const cartSlice = useSelector(state => state.CartSlice);
    const [loading, setLoading] = useState(true);
     useEffect(()=>{
             dispatch(addNumberToCart(cartSlice));
             if(cartSlice.length <= 0){
                 dispatch(isClickedBoolThreeFalse()) 
             }
         },[cartSlice])
         
         useEffect(()=>{
             dispatch(cartDisplayTrueFalse(CartNumberSlice))  
         },[CartNumberSlice])
    useEffect(()=>{
           dispatch(cartDisplayTrueFalse(CartNumberSlice))  
       },[CartNumberSlice])
    return(
        <div className="groupOfItemsOuter">
            <div className="groupOfItemsInner">
                <div className="bestSellers">
                    <h2>BEST SELLERS</h2>
                    <span></span>
                </div>
                <div className="backgroundWhite"></div>
                <div  className="groupOfItems">
                {inventory.men.tops.jackets.map((element)=>{
                    return(
                        <div className="item">
                            <div className="bestSeller">
                                <h3>BEST SELLER</h3>
                            </div>
                                {loading && (
                            <div className="itemPicture">
                                <LoadingAnimation/>
                            </div>
                            )}
                            <img src={element.picture} style={loading?{visibility:"hidden"}:{}} className="itemPicture" onLoad={(e)=>{
                                setLoading(false)
                            }}/>
                            <div className="arrowButtonAndPrice">
                                <img src="assests/images/addcart.svg" className="addCart" onClick={(e)=>{
                                 dispatch(addToCart({picture:element.picture,title:element.title,quantity:CartQuantitySlice[element.indexOf],price:element.price,catergory:element.catergory,indexOf:element.indexOf}))
                                                         cartSlice.forEach(elemen => {
                                                             if(element.title === elemen.title ){
                                                                 dispatch(addToQuantity(element.indexOf))
                                                             }
                                                             
                                                         });
                                 
                                 
                                }}/>
                                <div className="titleAndPrice">
                                    <h4 className="elementTitle">{element.title}</h4>
                                    <h4 className="elementPrice">{currency}{element.price}</h4>
                                </div>
                                <div className="arrowButtoBackground">
                                    <img src="assests/images/arrowRight.svg" className="arrowPic"/>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
          
        </div>
    )
}

export default ProductSlider