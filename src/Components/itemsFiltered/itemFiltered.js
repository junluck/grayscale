import React from "react";
import { useEffect , useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { arrayOfSortedItems,arrayReseter,arrayPageNumbering,mutiplyier,pageNumberCircle,arraySetterTwo}from "../../features/productSlice";
import { addToCart,addNumberToCart,cartDisplayTrueFalse, addToQuantity } from "../../features/cartSlice";
import { arrayOfSortedItemsTwo } from "../../features/productSlice";
import { isClickedBoolThreeFalse } from "../../features/isClicked";
import "./ItemFiltered.css"

function ItemFilter(){
    class CartItem{
        constructor(picture,title,quantity,price,catergory,indexOf){
            this._picture = picture
            this._title = title
            this._quantity = quantity
            this._price = price
            this._catergory = catergory
            this._indexOf = indexOf
        }
        get picture(){
            return this._picture
        }
        get title(){
            return this._title
        }
        get quantity(){
            return this._quantity
        }
        set quantity(newQuantity){
            this._quantity += newQuantity
        }
        get price(){
            return this._price
        }
        get catergory(){
            return this._catergory
        }
        get indexOf(){
            return this._indexOf
        }



    }
    const dispatch = useDispatch()
    const arrayOfSortedClothing = useSelector((state)=>state.ProductSlice)
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


    useEffect(()=>{
       const data =  localStorage.getItem("arrayOfSortedClothing");
       newArray = [...JSON.parse(data)]
       /*
       dispatch(arrayOfSortedItems(JSON.parse(data)))
       dispatch(arrayOfSortedItemsTwo(JSON.parse(data)))*/
    },[])

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
                    <img src={element.picture} className="itemPictureTwo"/>
                    <div className="arrowButtonAndPriceTwo">
                    <img src="assests/images/addcart.svg" className="addCart" onClick={(e)=>{
                        dispatch(addToCart({picture:element.picture,title:element.title,quantity:CartQuantitySlice[element.indexOf],price:element.price,catergory:element.catergory,indexOf:element.indexOf}))
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
                        <div className="arrowButtoBackgroundTwo">
                            <img src="assests/images/arrowRight.svg" className="arrowPicTwo"/>
                        </div>
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
