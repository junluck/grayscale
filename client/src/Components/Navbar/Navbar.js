import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isClickedBool } from "../../features/isClicked";
import { isClickedBoolTwo } from "../../features/isClicked";
import { arrayOfSortedItems,arrayReseter,arrayPageNumbering,pageDisplayerTrue,pageNumberCircleReset, searchArraySorter , arraySetter,setToTrue, setToFalse} from "../../features/productSlice";
import inventory from "../../features/inventory";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { incermentByNine, reset } from "../../features/productSlice";
import { isClickedBoolThree} from "../../features/isClicked";
import Checkout from "../Checkout/Checkout";
import { cartAssign } from "../../features/cartSlice";
import { clearCart } from "../../features/cartSlice";
function Navbar({isClickedFive,setIsClickedFive}){

    const isClicked = useSelector((state)=> state.IsClickedSlice)
    const isClickedTwo = useSelector((state)=> state.IsClickedSliceTwo)
    const productSlice = useSelector((state)=> state.ProductSlice)
    const numberSlice = useSelector((state)=> state.CartNumberSlice)
    const CartDisplayer = useSelector(state => state.CartDisplayerSlice)
    const quantity = useSelector(state => state.CartQuantitySlice)
    const cartSlice = useSelector(state => state.CartSlice)
    const isClickedCheckout = useSelector (state => state)
    const [isClickedThree,setIsClickedThree] = useState(false)
    const [isClickedFour, setIsClickedFour] = useState(false)
    const SuccessAndFailure = useSelector(state => state.SuccessAndFailure)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    function inventorySorted(inventor){
        let array = []
        for (let clothingItem in inventor.men.tops){
            array = [...array,...inventor.men.tops[clothingItem]]
        };
        for (let clothingItem in inventor.men.bottoms){
            array = [...array,...inventor.men.bottoms[clothingItem]]
        };
        for (let clothingItem in inventor.women.tops){
            array = [...array,...inventor.women.tops[clothingItem]]
        };
        for (let clothingItem in inventor.women.bottoms){
            array = [...array,...inventor.women.bottoms[clothingItem]]
        };
        return array
    }
    

    let arrayOfClothes = inventorySorted(inventory)
   
    
    useEffect(()=>{
        if(productSlice.length === 0){
            dispatch(setToTrue())
        }
        else{
            dispatch(setToFalse())
        }
        sessionStorage.setItem("productSlice",JSON.stringify(productSlice))
    },[productSlice])

    useEffect(()=>{
                sessionStorage.setItem("cart",JSON.stringify(cartSlice));
    },[cartSlice])

    useEffect(()=>{
        sessionStorage.setItem("isClicked",JSON.stringify(isClicked))
    },[isClicked])

    
    useEffect(()=>{
        sessionStorage.setItem("quantity",JSON.stringify(quantity))
    },[quantity])
    
 
   
    

    return(
        <div>
        <div className="navBarBackground"></div>
        <div className="navBar">
            <div className="menu" onClick={()=>{
                dispatch(isClickedBoolTwo())
                setIsClickedThree(!isClickedThree)
                setIsClickedFour(!isClickedFour)                   
                   
            }}>
                <div className="HamBurgerMenu">
                    <span className={isClickedTwo?"spanOneActive":"spanOneDeactive"}></span>
                    <span className={isClickedTwo?"spanTwoActive":"spanTwoDeactive"}></span>
                    <span className={isClickedTwo?"spanThreeActive":"spanThreeDeactive"}></span>
                </div>
                <h4>MENU</h4>
               
            </div>
            <div className="homeAndContact">
            <Link to={""} className="homeLogo"><img src="assests/images/home.svg" className="homeLogo"/></Link>
                <img src="assests/images/contact us.svg" className="contactLogo"/>
            </div>
            <ul className="menuList">
            <Link to={""} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><li onClick={()=>{   
                dispatch(isClickedBool(2))
                setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
                window.scrollTo({ top: 0})  
            }} className={isClicked[2]?"menActive":"menDeactive"}>HOME</li></Link>
                <span></span>
                <Link to={"/ContactUs"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><li onClick={()=>{
                    dispatch(isClickedBool(3))
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])}
                } className={isClicked[3]?"menActive":"menDeactive"}>CONTACT US</li></Link>
                <span></span>
                <Link to="/items" style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><li onClick={
                    ()=>{
                    dispatch(isClickedBool(0));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
                    for(const clothing in inventory.men.tops){
                        let array = [...inventory.men.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    for(const clothing in inventory.men.bottoms){
                        let array = [...inventory.men.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                        }
                        window.scrollTo({ top: 0})  
                        }} className={isClicked[0]?"menActive":"menDeactive"}>MEN</li></Link>
                <span></span>
                <Link to={"items"} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><li onClick={()=>{
                    dispatch(isClickedBool(1));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
                    for(const clothing in inventory.women.tops){
                        let array = [...inventory.women.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))
                    }

                    for(const clothing in inventory.women.bottoms){
                        let array = [...inventory.women.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    window.scrollTo({ top: 0})  
                    
                }} className={isClicked[1]?"menActive":"menDeactive"}>WOMEN</li></Link>
                <span></span>
                
            </ul>
            <form className="magnifyerAndSearch" onSubmit={(e)=>{
                e.preventDefault()
                dispatch(searchArraySorter({array:arrayOfClothes,searchString:e.target[0].value}))
                navigate("items");
                window.scrollTo({ top: 0});
            }}>
                <img src='assests/images/magnify.svg' className="magnify" onClick={(e)=>{
                     dispatch(searchArraySorter({array:arrayOfClothes,searchString:e.nativeEvent.srcElement.nextSibling.value}))
                     navigate("items")
                     window.scrollTo({ top: 0})
                }}/>
                <input type="text" placeholder="search" id="search"/>
                
            </form>
            <div className="cartLogDiv" onClick={(e)=>{
                    if(cartSlice.length > 0){
                        dispatch(isClickedBoolThree())
                        console.log(isClickedCheckout)
                    }
                }}>
                    <div className={CartDisplayer?"number":"numberDeactive"}><h4>{numberSlice}</h4></div>
                    <img src="assests/images/Cart.svg" className="cartLogo" />
                </div>
                <div className="cartLogDivTwo" onClick={(e)=>{
                    if(cartSlice.length > 0){
                        dispatch(isClickedBoolThree())
                        console.log(isClickedCheckout);
                        navigate("cart");
                    }
                    
                }}>
                    <div className={CartDisplayer?"number":"numberDeactive"}><h4>{numberSlice}</h4></div>
                    <img src="assests/images/Cart.svg" className="cartLogo" />
                </div>
            <div className="menuTwo">
                <Menu isClickedFour={isClickedFour} isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive} setIsClickedThreee={setIsClickedThree} setIsClickedFour={setIsClickedFour}/>
            </div>
            <div className="magnifyParent">
                <form className="magnifyerAndSearchTwo" onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(searchArraySorter({array:arrayOfClothes,searchString:e.target[0].value}))
                    navigate("items")
                    window.scrollTo({ top: 0})
                
                }}>
                   
                    <input type="text" placeholder="search" id="search"/>
                    <Link to={""} className="homeLogoTwo"><img src="assests/images/home.svg" className="homeLogoTwo"/></Link>
                    
                </form>
            
            </div>
             
    
        </div>
        <Checkout/>
        <div className="space">
            
        </div>
            <Outlet />
        </div>
    )
}

export default Navbar