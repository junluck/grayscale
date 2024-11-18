import React from "react";
import "./Menu.css"
import { useState } from "react";

function Menu({isClickedFour}){
    const [isClickedThree,setIsClickedThree] = useState([false,false,false,false]);
    const [isClickedFive,setIsClickedFive] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
    const arrayOfBools = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    function arraySetter(index,arrayNew,setter){
        let array = [...arrayNew];
        array[index] = !array[index];
        setter(array)   
        console.log(array)
    }
    return(
    <div className={isClickedFour?"menuDivActive":"menuDivDeactive"}>
        <div className="shopMen">
            <h2 onClick={()=>{
              arraySetter(0,isClickedThree,setIsClickedThree)
            }} className="shopMenHeading">SHOP MEN</h2>
            <div className={isClickedThree[0]?"topsOneActive":"topsOneXDeactive"} >
                <div className="tops" onClick={()=>{
                        arraySetter(1,isClickedThree,setIsClickedThree)
                }}>
                    <h3>Tops</h3>
                    <div className="minusAndPlus">
                        <img src = "assests/images/plus.svg" className={isClickedThree[1]?"plusOneDeactive":"plusOneActive"}/>
                        <img src = "assests/images/minus.svg" className={isClickedThree[1]?"minusOneActive":"minusOneDeactive"}/>
                    </div>
                </div>
                <div className={isClickedThree[1]?"groupTopsOneActive":"groupTopsOneXDeactive"}>
                    <div className="subHeading">
                        <h4 className={isClickedFive[0]?"TShirtActive":"TShirtDeactive"} onClick={()=>{
                            arraySetter(0,arrayOfBools,setIsClickedFive)
                        }}>T-shirts</h4>
                        <span className={isClickedFive[0]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[1]?"hoodiesActive":"hoodiesDeactive"} onClick={()=>{
                            arraySetter(1,arrayOfBools,setIsClickedFive)

                        }}>Hoodies</h4>
                        <span className={isClickedFive[1]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[2]?"sweatshirtsActive":"sweatshirtDeactive"} onClick={()=>{
                            arraySetter(2,arrayOfBools,setIsClickedFive)
                        }}>Sweatshirts</h4>
                        <span className={isClickedFive[2]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[3]?"jacketsActive":"jacketsDeactive"} onClick={()=>{
                            arraySetter(3,arrayOfBools,setIsClickedFive)
                        }}>Jackets</h4>
                        <span className={isClickedFive[3]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[20]?"accessoryOneActive":"accessoryOneDeactive"} onClick={()=>{
                                arraySetter(20,arrayOfBools,setIsClickedFive)
                            }}>Accessories</h4>
                        <span className={isClickedFive[20]?"spanActive":"spanDeactive"}></span>
                    </div>
                </div>

            </div>
            <div className={isClickedThree[0]?"topsOneActive":"topsOneXDeactive"}>
                <div className="tops" onClick={()=>{
                        arraySetter(2,isClickedThree,setIsClickedThree)
                    }}>
                    <h3 className="bottomsHeading">Bottoms</h3>
                    <div className="minusAndPlus">
                        <img src = "assests/images/plus.svg" className={isClickedThree[2]?"plusOneDeactive":"plusOneActive"}/>
                        <img src = "assests/images/minus.svg" className={isClickedThree[2]?"minusOneActive":"minusOneDeactive"}/>
                    </div>
                </div>
                <div className={isClickedThree[2]?"groupBottomsOneActive":"groupBottomsOneXDeactive"}>
                    <div className="subHeading">
                        <h4 className={isClickedFive[4]?"shortsActive":"shortsDeactive"} onClick={()=>{
                            arraySetter(4,arrayOfBools,setIsClickedFive)
                        }}>Shorts</h4>
                        <span className={isClickedFive[4]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[5]?"jeansActive":"jeansDeactive"} onClick={()=>{
                            arraySetter(5,arrayOfBools,setIsClickedFive)
                        }}>Jeans</h4>
                        <span className={isClickedFive[5]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[6]?"dressActive":"dressDeactive"} onClick={()=>{
                            arraySetter(6,arrayOfBools,setIsClickedFive)

                        }}>Dress Pants</h4>
                        <span className={isClickedFive[6]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[7]?"trackActive":"trackDeactive"} onClick={()=>{
                            arraySetter(7,arrayOfBools,setIsClickedFive)

                        }}>Track Pants</h4>
                        <span className={isClickedFive[7]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[19]?"shoesOneActive":"shoesOneDeactive"} onClick={()=>{
                                arraySetter(19,arrayOfBools,setIsClickedFive)
                            }}>Shoes</h4>
                        <span className={isClickedFive[19]?"spanActive":"spanDeactive"}></span>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className="shopWomen">
            <h2 onClick={()=>{
                arraySetter(3,isClickedThree,setIsClickedThree)
            }}>SHOP WOMEN</h2>
            <div  className={isClickedThree[3]?"topsTwoActive":"topsTwoDeactive"}>
            <div className="tops" onClick={()=>{
                        arraySetter(4,isClickedThree,setIsClickedThree)
                    }}>
                <h3>Tops</h3>
                <div className="minusAndPlus">
                        <img src = "assests/images/plus.svg" className={isClickedThree[4]?"plusOneDeactive":"plusOneActive"}/>
                        <img src = "assests/images/minus.svg" className={isClickedThree[4]?"minusOneActive":"minusOneDeactive"}/>
                </div>
            </div>
                <div className={isClickedThree[4]?"groupTopsTwoActive":"groupTopsTwoDeactive"}>
                    <div className="subHeading">
                        <h4 className={isClickedFive[8]?"teesActive":"teeesDeactive"} onClick={()=>{
                            arraySetter(8,arrayOfBools,setIsClickedFive)
                        }}>T-Shirts & Tees</h4>
                        <span className={isClickedFive[8]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[9]?"blouseActive":"blouseDeactive"} onClick={()=>{
                            arraySetter(9,arrayOfBools,setIsClickedFive)
                        }}>Blouses</h4>
                        <span className={isClickedFive[9]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[10]?"sweatersActive":"sweatersDeactive"} onClick={()=>{
                            arraySetter(10,arrayOfBools,setIsClickedFive)
                        }}>Sweaters & Cardigans</h4>
                        <span className={isClickedFive[10]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[11]?"BodysuitsActive":"BodysuitsDeactive"} onClick={()=>{
                            arraySetter(11,arrayOfBools,setIsClickedFive)
                        }}>Bodysuits</h4>
                        <span className={isClickedFive[11]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[12]?"jacketsTwoActive":"jacketsTwoDeactive"} onClick={()=>{
                            arraySetter(12,arrayOfBools,setIsClickedFive)
                        }}>Jackets</h4>
                        <span className={isClickedFive[12]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[18]?"accessoryActive":"accessoryDeactive"} onClick={()=>{
                                arraySetter(18,arrayOfBools,setIsClickedFive)
                            }}>Accessories</h4>
                        <span className={isClickedFive[18]?"spanActive":"spanDeactive"}></span>
                    </div>
                </div>

            </div>
            <div className={isClickedThree[3]?"topsTwoActive":"topsTwoDeactive"}>
                <div className="tops" onClick={()=>{
                        arraySetter(5,isClickedThree,setIsClickedThree)
                }}>
                    <h3>Bottoms</h3>
                    <div className="minusAndPlus">
                        <img src = "assests/images/plus.svg" className={isClickedThree[5]?"plusOneDeactive":"plusOneActive"}/>
                        <img src = "assests/images/minus.svg" className={isClickedThree[5]?"minusOneActive":"minusOneDeactive"}/>
                    </div>
                </div>
                <div className={isClickedThree[5]?"groupBottomsTwoActive":"groupBottomsTwoDeactive"}>
                    <div className="subHeading">
                        <h4 className={isClickedFive[13]?"jeansTwoActive":"jeansTwoDeactive"} onClick={()=>{
                            arraySetter(13,arrayOfBools,setIsClickedFive)
                        }}>Jeans</h4>
                        <span className={isClickedFive[13]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[14]?"trouserActive":"trouserDeactive"} onClick={()=>{
                            arraySetter(14,arrayOfBools,setIsClickedFive)
                        }}>Pants & Trousers</h4>
                        <span className={isClickedFive[14]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[15]?"shortsActive":"shortsDeactive"} onClick={()=>{
                            arraySetter(15,arrayOfBools,setIsClickedFive)
                        }}>Shorts</h4>
                        <span className={isClickedFive[15]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[16]?"skirtsActive":"skirtsDeactive"} onClick={()=>{
                            arraySetter(16,arrayOfBools,setIsClickedFive)
                        }}>Skirts</h4>
                        <span className={isClickedFive[16]?"spanActive":"spanDeactive"}></span>
                    </div>
                    <div className="subHeading">
                        <h4 className={isClickedFive[17]?"shoesActive":"shoesDeactive"} onClick={()=>{
                                arraySetter(17,arrayOfBools,setIsClickedFive)
                            }}>Shoes</h4>
                        <span className={isClickedFive[17]?"spanActive":"spanDeactive"}></span>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
    )
}

export default Menu