import React from "react";
import { useEffect , useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { arrayOfSortedItems,arrayReseter,arrayPageNumbering,mutiplyier,pageNumberCircle,arraySetterTwo, pageNumberCircleReset,pageDisplayerFalse}from "../../features/productSlice";
import { addToCart,addNumberToCart,cartDisplayTrueFalse, addToQuantity } from "../../features/cartSlice";
import { arrayOfSortedItemsTwo } from "../../features/productSlice";
import { isClickedBoolThreeFalse } from "../../features/isClicked";
import { choosenProduct } from "../../features/singleProductSlice";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import "./ItemFiltered.css"
import { Link } from "react-router-dom";

function ItemFilter(){

    const dispatch = useDispatch()
    const arrayOfSortedClothing = useSelector((state)=>state.ProductSlice)
    const clothingSizeSlice = useSelector(state => state.clothingSize)
    const currency =  useSelector((state)=> state.CurrencySlice);
    const arrayOfSortedClothingTwo = useSelector((state)=> state.ProductSliceTwo)
    const cartSlice = useSelector(state => state.CartSlice)
    const CartQuantitySlice = useSelector(state => state.CartQuantitySlice)
    const CartNumberSlice = useSelector(state => state.CartNumberSlice)
    const index = useSelector((state)=> state.ProductIndexSlice)
    const pageNumbers = useSelector((state)=> state.ProductPageNumberSlice)
    const pageNumberActivator = useSelector(state => state.ProductPageIndexerSlice)
    const productSlicePageNumber = useSelector(state => state.ProductSlicePageNumberCircle)
    const trueOrFalse = useSelector(state => state.ProductSliceNoProducts)
    console.log(pageNumberActivator)
    const [count,setCount] = useState(0)
    const [countStoper,setCountStoper] = useState(9)
    let newArray = [];
     const [loading, setLoading] = useState(true);

    useEffect(()=>{
        dispatch(addNumberToCart(cartSlice));
        if(cartSlice.length <= 0){
            dispatch(isClickedBoolThreeFalse()) 
        }
    },[cartSlice])
    useEffect(()=>{

        localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
        dispatch(arrayOfSortedItemsTwo({index:index,arraySorted:arrayOfSortedClothing}))
        dispatch(arrayPageNumbering(arrayOfSortedClothing.length)) 
        console.log(arrayOfSortedClothing)
        dispatch(arrayOfSortedItemsTwo({arraySorted:arrayOfSortedClothing,index:0}))
        dispatch(pageNumberCircleReset())
        if (arrayOfSortedClothing.length < 9){
            dispatch(pageDisplayerFalse())
        }
    },[arrayOfSortedClothing])
    useEffect(()=>{
        dispatch(cartDisplayTrueFalse(CartNumberSlice))  
    },[CartNumberSlice])

    useEffect(()=>{

        //localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
        console.log(index)
        dispatch(arrayOfSortedItemsTwo({index:index,arraySorted:arrayOfSortedClothing}))
    },[index])

    useEffect(()=>{

        //localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
       
       
    },[arrayOfSortedClothingTwo])

    return(
        <div>
        <div className={trueOrFalse?"oopsActive":"oopsDeactive"}>
            <img src="assests/images/no inventory.svg" className="noInventory"/>
            <h3 className="oppsTitle">Oops looks like we don't have this product please try again...</h3>
        </div>
        <div className={trueOrFalse?"groupOfClothingDeactive":"groupOfClothing"}>
        
            {arrayOfSortedClothingTwo.map((element,inde)=>{
                return ( <div className="itemTwo">
                    {loading && (
                        <div className="itemPictureTwo">
                            <LoadingAnimation/>
                        </div>
                        )}
                    <img src={element.picture} className="itemPictureTwo"  style={loading?{visibility:"hidden"}:{}} onLoad={(e)=>{
                        setLoading(false)
                        console.log("test")
                    }}/>
                    <div className="arrowButtonAndPriceTwo">
                    <img src="assests/images/addcart.svg" className="addCart" onClick={(e)=>{
                        dispatch(addToCart({picture:element.picture,title:element.title,quantity:CartQuantitySlice[element.indexOf],price:element.price,catergory:element.catergory,indexOf:element.indexOf,size:clothingSizeSlice[element.indexOf]}))
                        cartSlice.forEach(elemen => {
                            if(element.title === elemen.title ){
                                dispatch(addToQuantity(element.indexOf))
                            }
                            
                        });
                       
                    }}/>
                        <div className="titleAndPriceTwo">
                            <h4 className="elementTitleTwo">{element.title}</h4>
                            <h4 className="elementPriceTwo">{currency}{element.price}</h4>
                        </div>
                        <Link to={"/Product"}><div className="arrowButtoBackgroundTwo" onClick={(e)=>{
                            dispatch(choosenProduct(element))
                        }}>
                            <img src="assests/images/arrowRight.svg" className="arrowPicTwo"/>
                        </div></Link>
                    </div>
                </div>)
            })}
         
        </div>
        <div className={pageNumberActivator?"PageNumbersActive":"PageNumbersDeactive"}>{pageNumbers.map((element)=>{
            console.log(productSlicePageNumber[element])
                return(
                    <div className={productSlicePageNumber[element-1]?"numberActive":"numberDeactiver"} onClick={()=>{
                        dispatch(arrayOfSortedItemsTwo({index:index,arraySorted:arrayOfSortedClothing}))
                        dispatch(mutiplyier(element-1));
                        dispatch(pageNumberCircle({ele:element-1,length:arrayOfSortedClothing.length}))
                        window.scrollTo({ top: 0, behavior: "smooth" })


                   }}>
                        <p>{element}</p>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default ItemFilter
