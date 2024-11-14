import React from "react";
import Menu from "../Menu/Menu";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isClickedBool } from "../../features/isClicked";
function Navbar(){

    const isClicked = useSelector((state)=> state.IsClickedSlice)
    const dispatch = useDispatch()
    console.log(isClicked)

    return(
        <div className="navBar">
            <div className="menu">
                <div className="HamBurgerMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h4>MENU</h4>
                <Menu />
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
          
            
        </div>
    )
}

export default Navbar