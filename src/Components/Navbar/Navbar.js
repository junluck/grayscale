import React from "react";
import Menu from "../Menu/Menu";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isClickedBool } from "../../features/isClicked";
import { isClickedBoolTwo } from "../../features/isClicked";
import { useState } from "react";
function Navbar(){

    const isClicked = useSelector((state)=> state.IsClickedSlice)
    const isClickedTwo = useSelector((state)=> state.IsClickedSliceTwo)
    const [isClickedThree,setIsClickedThree] = useState(false)
    const [isClickedFour, setIsClickedFour] = useState(false)

    const dispatch = useDispatch()
   

    return(
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
            
            <ul className="menuList">
                <li onClick={()=>dispatch(isClickedBool(0))} className={isClicked[0]?"menActive":"menDeactive"}>MEN</li>
                <span></span>
                <li onClick={()=>dispatch(isClickedBool(1))} className={isClicked[1]?"menActive":"menDeactive"}>WOMEN</li>
                <span></span>
                <li onClick={()=>dispatch(isClickedBool(2))} className={isClicked[2]?"menActive":"menDeactive"}>ACCESSORIES</li>
                <span></span>
                <li onClick={()=>dispatch(isClickedBool(3))} className={isClicked[3]?"menActive":"menDeactive"}>SHOES</li>
            </ul>
            <form className="magnifyerAndSearch" onSubmit={(e)=>{
                e.preventDefault()
                console.log(e)
            }}>
                <img src='assests/images/magnify.svg' className="magnify"/>
                <input type="text" placeholder="search" id="search"/>
                <img src="assests/images/Cart.svg" className="cartLogo"/>
            </form>
          
            <div>
                <Menu isClickedFour={isClickedFour}/>
            </div>
        </div>
    )
}

export default Navbar