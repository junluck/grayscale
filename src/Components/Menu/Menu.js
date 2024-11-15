import React from "react";
import "./Menu.css"
import { useState } from "react";

function Menu({isClickedFour}){
    const [isClickedThree,setIsClickedThree] = useState([false,false,false,false,false,false])
    return(
    <div className={isClickedFour?"menuDivActive":"menuDivDeactive"}>
        <div className="shopMen">
            <h3 onClick={()=>{
                let array = [...isClickedThree];
                array[0] = !array[0];
                setIsClickedThree(array)   
                console.log(array)
            }} className="shopMenHeading">SHOP MEN</h3>
            <div className={isClickedThree[0]?"topsOneActive":"topsOneXDeactive"}>
                <h3 onClick={()=>{
                let array = [...isClickedThree];
                array[1] = !array[1];
                setIsClickedThree(array)   
                console.log(array)
            }}>Tops</h3>
                <div className={isClickedThree[1]?"groupTopsOneActive":"groupTopsOneXDeactive"}>
                    <h4>T-shirts</h4>
                    <h4>Hoodies</h4>
                    <h4>Sweatshirts</h4>
                    <h4>Jackets</h4>
                </div>

            </div>
            <div className={isClickedThree[0]?"topsOneActive":"topsOneXDeactive"}>
                <h3 className="bottomsHeading" onClick={()=>{
                let array = [...isClickedThree];
                array[2] = !array[2];
                setIsClickedThree(array)   
                console.log(array)
            }}>Bottoms</h3>
                <div className={isClickedThree[2]?"groupBottomsOneActive":"groupBottomsOneXDeactive"}>
                    <h4>Shorts</h4>
                    <h4>Jeans</h4>
                    <h4>Dress Pants</h4>
                    <h4>Track Pants</h4>
                </div>

            </div>
        </div>
        <div className="shopWomen">
            <h3 onClick={()=>{
                let array = [...isClickedThree];
                array[3] = !array[3];
                setIsClickedThree(array)   
                console.log(array)
            }}>SHOP WOMEN</h3>
            <div  className={isClickedThree[3]?"topsTwoActive":"topsTwoDeactive"}>
                <h3 onClick={()=>{
                let array = [...isClickedThree];
                array[4] = !array[4];
                setIsClickedThree(array)   
                console.log(array)
            }}>Tops</h3>
                <div className={isClickedThree[4]?"groupTopsTwoActive":"groupTopsTwoDeactive"}>
                    <h4>T-Shirts & Tees</h4>
                    <h4>Blouses</h4>
                    <h4>Sweaters & Cardigans</h4>
                    <h4>Bodysuits</h4>
                    <h4>Jackets</h4>
                </div>

            </div>
            <div className={isClickedThree[3]?"topsTwoActive":"topsTwoDeactive"}>
                <h3 className="bottomsHeading" onClick={()=>{
                let array = [...isClickedThree];
                array[5] = !array[5];
                setIsClickedThree(array)   
                console.log(array)
            }}>Bottoms</h3>
                <div className={isClickedThree[5]?"groupBottomsTwoActive":"groupBottomsTwoDeactive"}>
                    <h4>Jeans</h4>
                    <h4>Pants & Trousers</h4>
                    <h4>Shorts</h4>
                    <h4>Skirts</h4>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Menu