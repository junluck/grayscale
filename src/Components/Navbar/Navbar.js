import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isClickedBool } from "../../features/isClicked";
import { isClickedBoolTwo } from "../../features/isClicked";
import { arrayOfSortedItems,arrayReseter,arrayPageNumbering,pageDisplayerTrue,pageNumberCircleReset, searchArraySorter , arraySetter} from "../../features/productSlice";
import inventory from "../../features/inventory";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { incermentByNine, reset } from "../../features/productSlice";
function Navbar({isClickedFive,setIsClickedFive}){

    const isClicked = useSelector((state)=> state.IsClickedSlice)
    const isClickedTwo = useSelector((state)=> state.IsClickedSliceTwo)
    const productSlice = useSelector((state)=> state.ProductSlice)
    const [isClickedThree,setIsClickedThree] = useState(false)
    const [isClickedFour, setIsClickedFour] = useState(false)
    const searchArray = useSelector(state => state.ProductSearchSlice)
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
    console.log(searchArray)
    useEffect(()=>{
        dispatch(arraySetter(searchArray))
        navigate('items')
    },[searchArray])
   

    return(
        <div>
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
                <img src="assests/images/home.svg" className="homeLogo"/>
                <img src="assests/images/contact us.svg" className="contactLogo"/>
            </div>
            <ul className="menuList">
            <Link to={""} style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><li onClick={()=>{   
                dispatch(isClickedBool(2))
                setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
            }} className={isClicked[2]?"menActive":"menDeactive"}>HOME</li></Link>
                <span></span>
                <li onClick={()=>{
                    dispatch(isClickedBool(3))
                    setIsClickedFive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])}
                } className={isClicked[3]?"menActive":"menDeactive"}>CONTACT US</li>
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
                    console.log(productSlice)
                    
                }} className={isClicked[1]?"menActive":"menDeactive"}>WOMEN</li></Link>
                <span></span>
                
            </ul>
            <form className="magnifyerAndSearch" onSubmit={(e)=>{
                e.preventDefault()

                dispatch(searchArraySorter({array:arrayOfClothes,searchString:e.target[0].value}))
            }}>
                <img src='assests/images/magnify.svg' className="magnify"/>
                <input type="text" placeholder="search" id="search"/>
                <img src="assests/images/Cart.svg" className="cartLogo"/>
            </form>
          
            <div className="menuTwo">
                <Menu isClickedFour={isClickedFour} isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive}/>
            </div>
            <form className="magnifyerAndSearchTwo" onSubmit={(e)=>{
                e.preventDefault()
              
            }}>
                <img src='assests/images/magnify.svg' className="magnify"/>
                <input type="text" placeholder="search" id="search" onSubmit={(e)=>{
                    dispatch(searchArraySorter({array:inventory,searchString:e.target.value}))

                }}/>
                <img src="assests/images/Cart.svg" className="cartLogo" />
            </form>
        
        </div>
        
        <div className="space">
            
        </div>
            <Outlet />
        </div>
    )
}

export default Navbar