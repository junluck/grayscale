import React from "react";
import { useEffect , useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { arrayOfSortedItems,arrayReseter} from "../../features/productSlice";
import { arrayOfSortedItemsTwo } from "../../features/productSlice";
import "./ItemFiltered.css"

function ItemFilter(){
    const dispatch = useDispatch()
    const arrayOfSortedClothing = useSelector((state)=>state.ProductSlice)
    const currency =  useSelector((state)=> state.CurrencySlice);
    const arrayOfSortedClothingTwo = useSelector((state)=> state.ProductSliceTwo)
    const index = useSelector((state)=> state.ProductIndexSlice)
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

        localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
      
        dispatch(arrayOfSortedItemsTwo({index:index,arraySorted:arrayOfSortedClothing}))
        console.log(index)
    },[arrayOfSortedClothing])

    useEffect(()=>{

        //localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
        console.log(index)
        dispatch(arrayOfSortedItemsTwo({index:index,arraySorted:arrayOfSortedClothing}))
    },[index])

    return(
        <div className="groupOfClothing">
            {arrayOfSortedClothingTwo.map((element)=>{
                return ( <div className="itemTwo">
                    <img src={element.picture} className="itemPictureTwo"/>
                    <div className="arrowButtonAndPriceTwo">
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
    )
}

export default ItemFilter
