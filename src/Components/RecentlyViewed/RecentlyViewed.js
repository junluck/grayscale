import React from "react";
import { useSelector } from "react-redux";
import "./RecentlyViewed.css";

function RecentlyViewed(){
    const recentlyViewedArray = useSelector(state=>state.recentlyViewedArraySlice);
    const currency = useSelector(state => state.CurrencySlice)
    return(
        <div className="recentlyViewed">
            {recentlyViewedArray.map((element,index)=>{
                if(index > 0){
                    return(
                        <div className="recenltyViewedProduct">
                            <img src={element.picture} className="recentlyViewedPicture"/>
                            <h5 className="recentlyViewedTitle">{element.title}</h5>
                            <h5 className="recentlyViewedPrice">{`${currency}${element.price}`}</h5>
                        </div>
                    )
                }
            })}
        </div>

    )
}

export default RecentlyViewed