import React from "react";
import { useSelector } from "react-redux";
import "./ProductDetails.css";
import { isClickedBoolFive } from "../../features/isClicked";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addSizeClothing } from "../../features/clothingSizeSlice";
import { addToCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { addNumberToCart } from "../../features/cartSlice";
import { isClickedBoolThreeFalse } from "../../features/isClicked";
import { cartDisplayTrueFalse } from "../../features/cartSlice";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function ProductDetails(){
    const singleProductSlice  = useSelector(state=> state.singleProductSlice);
    const currency = useSelector(state => state.CurrencySlice);
    const isClickedFive = useSelector(state => state.IsClicedFiveSlice);
    const [arrayOfSizes,setArrayOfSizes] = useState([false,false,false,false,false,false]);
    const [isHoverSix,setHoverSix] = useState(false);
    const clothingSizeSlice = useSelector(state => state.clothingSize);
    const CartQuantitySlice = useSelector(state => state.CartQuantitySlice);
    const cartSlice = useSelector(state => state.CartSlice);
    const CartNumberSlice = useSelector(state => state.CartNumberSlice);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
            dispatch(addNumberToCart(cartSlice));
            if(cartSlice.length <= 0){
                dispatch(isClickedBoolThreeFalse()) 
            }
        },[cartSlice])
        
        useEffect(()=>{
            dispatch(cartDisplayTrueFalse(CartNumberSlice))  
        },[CartNumberSlice])

    const dispatch = useDispatch()
    console.log(isClickedFive)
    const handleMouseOver = () => setHoverSix(true);
    const handleMouseOut = () => setHoverSix(false);
    return(
        <div className="singleProductOuter">
            <div className="singleProduct">
            {loading && (
                <LoadingAnimation />
            )}
                <img src={`${singleProductSlice.picture}`}  style={loading ? { visibility: "hidden" } : {}} className="productPicture" onLoad={(e)=>{
                    setLoading(false)
                }} />
                <div className="productDetails">
                    <div className="itemNameAndPrice">
                        <h3 className="productTitle">{singleProductSlice.title}</h3>
                        <h4 className="priceTwo">{`${currency}${singleProductSlice.price}`}</h4>
                    </div>
                    <div className="sizes">
                        <div className="sizingAndGuide">
                            <h5 className="sizing">Sizing</h5>
                            <div className="sizesSpan" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <h5 className="sizeGuide">Size Guide</h5>
                                <span className="spanner"></span>
                                <div className={isHoverSix?"sizeGuideParagraph":"sizeGuideParagraphDeactive"}>
                                    <p className="CheckYourChest">Check your chest, waist, and measurements against the brand's size chart to ensure the perfect fit!</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="modelWithClothing">Model is 1.85m and is wearing a size M.</h5>
                        <div className="sizesButtons">
                            <button className={arrayOfSizes[0]?"XS":"XSDeactive"} onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"XS"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[0] = !array[0];
                                    array.forEach((element,index)=>{
                                        if(index != 0){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>XS</button>
                            <button className={arrayOfSizes[1]?"S":"SDeactive"}onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"S"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[1] = !array[1];
                                    array.forEach((element,index)=>{
                                        if(index != 1){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>S</button>
                            <button className={arrayOfSizes[2]?"M":"MDeactive"} onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"M"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[2] = !array[2];
                                    array.forEach((element,index)=>{
                                        if(index != 2){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>M</button>
                            <button className={arrayOfSizes[3]?"L":"LDeactive"} onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"L"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[3] = !array[3];
                                    array.forEach((element,index)=>{
                                        if(index != 3){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>L</button>
                            <button className={arrayOfSizes[4]?"XL":"XLDeactive"} onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"XL"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[4] = !array[4];
                                    array.forEach((element,index)=>{
                                        if(index != 4){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>XL</button>
                            <button className={arrayOfSizes[5]?"XXL":"XXLDeactive"} onClick={(e)=>{
                                dispatch(addSizeClothing({index:singleProductSlice.indexOf,size:"XXL"}))
                                setArrayOfSizes((prev)=>{
                                    let array = [...prev];
                                    array[5] = !array[5];
                                    array.forEach((element,index)=>{
                                        if(index != 5){
                                            array[index] = false
                                        }

                                    })
                                    return array;
                                })
                            }}>XXL</button>
                        </div>
                    </div>
                    <h5 className="inStock">In Stock</h5>
                    <div className="addToCartAndShipping">
                        <button className="addToCart" onClick={(e)=>{
                            dispatch(addToCart({picture:singleProductSlice.picture,title:singleProductSlice.title,quantity:CartQuantitySlice[singleProductSlice.indexOf],price:singleProductSlice.price,catergory:singleProductSlice.catergory,indexOf:singleProductSlice.indexOf,size:clothingSizeSlice[singleProductSlice.indexOf]}))
                        }}>ADD TO CART</button>
                        <h5 className="shipping">FREE SHIPPING</h5>
                    </div>
                    <div className="materialsFeatures">
                        <div className="material">
                            <div className="meterialArrow" onClick={(e)=>{
                                    dispatch(isClickedBoolFive(0))
                                }}>
                                <h5>Material</h5>
                                <img src="assests/images/dropdownMatrial.svg" className={isClickedFive[0]?"dropDownArrow":"dropDownArrowDeactive"} />
                            </div>
                            <p className={isClickedFive[0]?"softMaterial":"softMaterialDeactive"}>Soft and durable fabric</p>
                            <span className="spanMaterial"></span>
                        </div>
                        <div className="Features">
                            <div className="FeaturesArrow" onClick={(e)=>{
                                    dispatch(isClickedBoolFive(1))
                                }}>
                                <h5>Features</h5>
                                <img src="assests/images/dropdownMatrial.svg" className={isClickedFive[1]?"dropDownArrow":"dropDownArrowDeactive"} />
                            </div>
                            <p className={isClickedFive[1]?"softFeatures":"softFeaturesDeactive"}>Soft and breathable fabric</p>
                            <span className="spanMaterial"></span>
                        </div>
                        <div className="Returns">
                            <div className="ReturnsArrow"  onClick={(e)=>{
                                    dispatch(isClickedBoolFive(2))
                                }}>
                                <h5>Returns</h5>
                                <img src="assests/images/dropdownMatrial.svg" className={isClickedFive[2]?"dropDownArrow":"dropDownArrowDeactive"}/>
                            </div>
                            <p className={isClickedFive[2]?"softReturns":"softReturnsDeactive"}>Easy 30-day returns on all items.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductDetails