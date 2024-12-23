import React from "react";
import { useSelector } from "react-redux";
function ProductDetails(){
    const singleProductSlice  = useSelector(state=> state.singleProductSlice )
    return(
        <div className="singleProduct">
            <img src={`${singleProductSlice.picture}`} className="productPicture"/>
        </div>
    )
}