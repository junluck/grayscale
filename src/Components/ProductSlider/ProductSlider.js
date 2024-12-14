import React from "react";
import inventory from "../../features/inventory";
import "./ProductSlider.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addNumberToCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { cartDisplayTrueFalse } from "../../features/cartSlice";
function ProductSlider(){
    const dispatch = useDispatch()
    const currency =  useSelector((state)=> state.CurrencySlice)
    const CartNumberSlice = useSelector(state => state.CartNumberSlice)
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
                            <img src={element.picture} className="itemPicture"/>
                            <div className="arrowButtonAndPrice">
                                <img src="assests/images/addcart.svg" className="addCart" onClick={(e)=>{
                                 dispatch(addToCart({item:element.title,qauntity:1,price:element.price}));
                                 dispatch(addNumberToCart());
                                 
                                 
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