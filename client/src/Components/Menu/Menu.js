import React from "react";
import "./Menu.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { arrayOfSortedItems,arrayReseter ,reset,pageDisplayerFalse,pageDisplayerTrue} from "../../features/productSlice";
import inventory from "../../features/inventory";
import { Link } from "react-router-dom";
import { isClickedBool } from "../../features/isClicked";
import { useOutletContext } from "react-router-dom";
import { isClickedBoolTwo } from "../../features/isClicked";

function Menu({isClickedFour,isClickedFive,setIsClickedFive,setIsClickedThreee,setIsClickedFour}){
    const dispatch = useDispatch()
    const [isClickedThree,setIsClickedThree] = useState([false,false,false,false]);
    const arrayOfBools = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    function arraySetter(index,arrayNew,setter){
        let array = [...arrayNew];
        array[index] = !array[index];
        setter(array)   
        console.log(array)
    }

    function dispatcher(arrayOfClothes,number){
        dispatch(reset())
        dispatch(arrayReseter())
        dispatch(arrayOfSortedItems(arrayOfClothes))
        dispatch(pageDisplayerFalse())
        dispatch(isClickedBool(number))
    }

    function setThreeAndFourToFalse(){
        setIsClickedThreee(false);
        setIsClickedFour(false);
        dispatch(isClickedBoolTwo())
        window.scrollTo({top: 0});
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
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(0,arrayOfBools,setIsClickedFive);
                                dispatcher(inventory.men.tops.tShirts,0)
                                setThreeAndFourToFalse()
                            
                            }}>
                        <div className="tshirtDiv">
                            <h4 className={isClickedFive[0]?"TShirtActive":"TShirtDeactive"} >T-shirts
                            </h4>
                            <span className={isClickedFive[0]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{  
                                arraySetter(1,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.men.tops.hoodies,0)
                                setThreeAndFourToFalse()
                                
                            }}>
                        <div className="hoodiesDiv">
                            <h4 className={isClickedFive[1]?"hoodiesActive":"hoodiesDeactive"}>Hoodies</h4>
                            <span className={isClickedFive[1]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(2,arrayOfBools,setIsClickedFive) 
                                dispatcher(inventory.men.tops.sweatshirts,0)
                                setThreeAndFourToFalse()
                                
                            }}>
                        <div className="sweatShirtDiv">
                            <h4 className={isClickedFive[2]?"sweatshirtsActive":"sweatshirtDeactive"}>Sweatshirts</h4>
                            <span className={isClickedFive[2]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(3,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.men.tops.jackets,0)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="jacketDiv">
                            <h4 className={isClickedFive[3]?"jacketsActive":"jacketsDeactive"}>Jackets</h4>
                            <span className={isClickedFive[3]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading"  onClick={()=>{
                                arraySetter(20,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.men.tops.accessories,0)
                                setThreeAndFourToFalse()
                                }}>
                        <div className="accerssoriesDiv">
                            <h4 className={isClickedFive[20]?"accessoryOneActive":"accessoryOneDeactive"}>Accessories</h4>
                            <span className={isClickedFive[20]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
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
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(4,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.men.bottoms.shorts,0)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="shortsDiv">
                            <h4 className={isClickedFive[4]?"shortsActive":"shortsDeactive"}>Shorts</h4>
                            <span className={isClickedFive[4]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading"onClick={()=>{
                                    arraySetter(5,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.men.bottoms.jeans,0)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="jeansDiv">
                            <h4 className={isClickedFive[5]?"jeansActive":"jeansDeactive"}>Jeans</h4>
                            <span className={isClickedFive[5]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}  className="subHeading" onClick={()=>{
                                    arraySetter(6,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.men.bottoms.dressPants,0)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="dressPantsDiv">
                            <h4 className={isClickedFive[6]?"dressActive":"dressDeactive"}>Dress Pants</h4>
                            <span className={isClickedFive[6]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                    arraySetter(7,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.men.bottoms.trackPants,0)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="trackPantsDiv">
                            <h4 className={isClickedFive[7]?"trackActive":"trackDeactive"}>Track Pants</h4>
                            <span className={isClickedFive[7]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                    arraySetter(19,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.men.bottoms.shoes,0)
                                    setThreeAndFourToFalse()
                                    }}>
                        <div className="shoesDiv">
                            <h4 className={isClickedFive[19]?"shoesOneActive":"shoesOneDeactive"}>Shoes</h4>
                            <span className={isClickedFive[19]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    
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
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                    arraySetter(8,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.women.tops.tShirtsTees,1)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="tshirtsAndTeesDiv">
                            <h4 className={isClickedFive[8]?"teesActive":"teeesDeactive"} >T-Shirts & Tees</h4>
                            <span className={isClickedFive[8]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(9,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.tops.blouses,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="blouseDiv" >
                            <h4 className={isClickedFive[9]?"blouseActive":"blouseDeactive"}>Blouses</h4>
                            <span className={isClickedFive[9]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}  className="subHeading" onClick={()=>{
                                arraySetter(10,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.tops.sweatersCardigans,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="sweaterDiv">
                            <h4 className={isClickedFive[10]?"sweatersActive":"sweatersDeactive"}>Sweaters & Cardigans</h4>
                            <span className={isClickedFive[10]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading"  onClick={()=>{
                                    arraySetter(11,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.women.tops.Bodysuits,1)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="bodySuitDiv">
                            <h4 className={isClickedFive[11]?"BodysuitsActive":"BodysuitsDeactive"}>Bodysuits</h4>
                            <span className={isClickedFive[11]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(12,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.tops.jackets,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="jacketsDiv">
                            <h4 className={isClickedFive[12]?"jacketsTwoActive":"jacketsTwoDeactive"} >Jackets</h4>
                            <span className={isClickedFive[12]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(18,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.tops.accessories,1)
                                setThreeAndFourToFalse()
                                }}>
                        <div className="accessoryDiv">
                            <h4 className={isClickedFive[18]?"accessoryActive":"accessoryDeactive"}>Accessories</h4>
                            <span className={isClickedFive[18]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
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
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                    arraySetter(13,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.women.bottoms.jeans,1)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="jeansDiv">
                            <h4 className={isClickedFive[13]?"jeansTwoActive":"jeansTwoDeactive"} >Jeans</h4>
                            <span className={isClickedFive[13]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(14,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.bottoms.pantsTrousers,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="pantsAndTrouserDiv">
                            <h4 className={isClickedFive[14]?"trouserActive":"trouserDeactive"}>Pants & Trousers</h4>
                            <span className={isClickedFive[14]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(15,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.bottoms.shorts,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="shortsDiv">
                            <h4 className={isClickedFive[15]?"shortsActive":"shortsDeactive"}>Shorts</h4>
                            <span className={isClickedFive[15]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}} className="subHeading" onClick={()=>{
                                arraySetter(16,arrayOfBools,setIsClickedFive)
                                dispatcher(inventory.women.bottoms.skirts,1)
                                setThreeAndFourToFalse()
                            }}>
                        <div className="skirtsDiv">
                            <h4 className={isClickedFive[16]?"skirtsActive":"skirtsDeactive"} >Skirts</h4>
                            <span className={isClickedFive[16]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    <Link to="items"  style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}className="subHeading" onClick={()=>{
                                    arraySetter(17,arrayOfBools,setIsClickedFive)
                                    dispatcher(inventory.women.bottoms.shoes,1)
                                    setThreeAndFourToFalse()
                                }}>
                        <div className="shoesDiv">
                            <h4 className={isClickedFive[17]?"shoesActive":"shoesDeactive"}>Shoes</h4>
                            <span className={isClickedFive[17]?"spanActive":"spanDeactive"}></span>
                        </div>
                    </Link>
                    
                </div>

            </div>
        </div>
    </div>
    )
}

export default Menu