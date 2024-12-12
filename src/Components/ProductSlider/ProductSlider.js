import React from "react";
import inventory from "../../features/inventory";
import "./ProductSlider.css"
import { useSelector } from "react-redux";

function ProductSlider(){
    const currency =  useSelector((state)=> state.CurrencySlice)
    console.log(currency)
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
                                <img src="assests/images/addcart.svg" className="addCart"/>
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