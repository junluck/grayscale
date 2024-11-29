import React from "react";
import { useEffect , useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { arrayOfSortedItems,arrayReseter} from "../../features/productSlice";
import "./ItemFiltered.css"

function ItemFilter(){
    const dispatch = useDispatch()
    const arrayOfSortedClothing = useSelector((state)=>state.ProductSlice)
    const currency =  useSelector((state)=> state.CurrencySlice);
    const [count,setCount] = useState(0)
    const [countStoper,setCountStoper] = useState(9)
    let newArray = [];

    function looper(count,countStoper,array){
        let arrayOfRenders = []
        for(let i = count ; i < countStoper ; i++){
               arrayOfRenders.push( <div className="itemTwo">
                    <img src={array[i].picture} className="itemPictureTwo"/>
                    <div className="arrowButtonAndPriceTwo">
                        <div className="titleAndPriceTwo">
                            <h4 className="elementTitleTwo">{array[i].title}</h4>
                            <h4 className="elementPriceTwo">{currency}{array[i].price}</h4>
                        </div>
                        <div className="arrowButtoBackgroundTwo">
                            <img src="assests/images/arrowRight.svg" className="arrowPicTwo"/>
                        </div>
                    </div>
                </div>)
        }
        return arrayOfRenders

    }
    useEffect(()=>{
       const data =  localStorage.getItem("arrayOfSortedClothing");
       newArray = [...JSON.parse(data)]
       dispatch(arrayOfSortedItems(JSON.parse(data)))
    },[])

    useEffect(()=>{

        localStorage.setItem("arrayOfSortedClothing", JSON.stringify(arrayOfSortedClothing));
    },[arrayOfSortedClothing])

    return(
        <div className="groupOfClothing">
            {newArray.map((element)=>{
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
