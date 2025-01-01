import React, { useState } from "react";
import "./MaleAndFemale.css"
import { useDispatch } from "react-redux";
import inventory from "../../features/inventory";
import { isClickedBool } from "../../features/isClicked";
import { arrayReseter,reset,pageDisplayerTrue,pageNumberCircleReset,arrayOfSortedItems} from "../../features/productSlice";
import { Link } from "react-router-dom";

function MaleAndFemale(){

    const [menWomenChoicePic,setMenWomenChoicePic] = useState([false,false])
    const dispatch = useDispatch()
    return(
        <div className="manAndWomenChoiceOuter">
            <div className="manAndWomenChoice">
                <div className="whiteBackground"></div>
                <div className="menChoice" onMouseOver={()=>{
                    setMenWomenChoicePic((state)=>[true,false])
                }}>
                    <img src="assests/images/man.svg" className="menChoicePicture"/>
                    <h3 className="menChoiceTitle">MEN</h3>
                    <Link to="/items" style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center"}}><button className="menChoiceButton" onClick={
                    ()=>{
                    dispatch(isClickedBool(0));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    for(const clothing in inventory.men.tops){
                        let array = [...inventory.men.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    for(const clothing in inventory.men.bottoms){
                        let array = [...inventory.men.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                        }
                            
                        }} >SHOP NOW</button></Link>
                </div>
                <img src="assests/images/manChoice.png"  className={menWomenChoicePic[0]?"manChoiceProfilePicture":"manChoiceProfilePictureDeactive"}/>
                <span className="manChoiceSpan" onMouseOver={()=>{
                    setMenWomenChoicePic((state)=>[true,false])
                }}></span>
                <span className="manAndWomenChoicedivider"></span>
                <span className="womenChoiceSpan" onMouseOver={()=>{
                    setMenWomenChoicePic((state)=>[false,true])
                }}></span>
                <img src="assests/images/womenChoice.png"  className={menWomenChoicePic[1]?"womenChoiceProfilePicture":"womenChoiceProfilePictureDeactive"}/>
                <div className="womenChoice" onMouseOver={()=>{
                    setMenWomenChoicePic((state)=>[false,true])
                }}>
                    
                    <img src="assests/images/women.svg"  className="womenChoicePicture"/>
                    <h3 className="womenChoiceTitle">WOMEN</h3>
                    <Link to="/items" style={{ textDecoration: 'none', color: 'inherit' ,margin:"0px", height:"fit-content",justifySelf:"center",alignSelf:"center",
                    }}><button className="womenChoiceButton" onClick={()=>{
                    dispatch(isClickedBool(1));
                    dispatch(arrayReseter());
                    dispatch(reset());
                    dispatch(pageDisplayerTrue());
                    dispatch(pageNumberCircleReset());
                    for(const clothing in inventory.women.tops){
                        let array = [...inventory.women.tops[clothing]]
                        dispatch(arrayOfSortedItems(array))
                    }

                    for(const clothing in inventory.women.bottoms){
                        let array = [...inventory.women.bottoms[clothing]]
                        dispatch(arrayOfSortedItems(array))

                    }
                    
                }}>SHOP NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MaleAndFemale