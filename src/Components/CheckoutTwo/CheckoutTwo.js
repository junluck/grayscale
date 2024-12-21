import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { substractToQuantity } from "../../features/cartSlice";
import { setQuantity } from "../../features/cartSlice";
import { addToQuantity } from "../../features/cartSlice";
import { removeFromCart } from "../../features/cartSlice";
import { cartDisplayTrueFalse } from "../../features/cartSlice";
import { useEffect } from "react";
import { addNumberToCart } from "../../features/cartSlice";
import { isClickedBoolThreeFalse , isClickedBoolFourTrue, isClickedBoolFourFalse} from "../../features/isClicked";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./CheckoutTwo.css"
 

function CheckoutTwo(){
    const CartNumberSlice = useSelector(state => state.CartNumberSlice)
    const cartSlice = useSelector(state => state.CartSlice);
    const dispatch = useDispatch();
    const currency =  useSelector((state)=> state.CurrencySlice);
    const quantityGroup = useSelector(state => state.CartQuantitySlice);
    const isClickedThree = useSelector(state => state.IsClickedThreeSlice);
    const isClickedFour = useSelector(state => state.IsClickedFourSlice)
      useEffect(()=>{
                 dispatch(addNumberToCart(cartSlice));
                 if(cartSlice.length <= 0){
                     dispatch(isClickedBoolThreeFalse())
                    dispatch(isClickedBoolFourFalse())
                 }
                 else{
                    dispatch(isClickedBoolFourTrue())
                 }

             },[cartSlice])
             
     useEffect(()=>{
                 dispatch(cartDisplayTrueFalse(CartNumberSlice))  
             },[CartNumberSlice])
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[]) 
     
    useEffect(()=>{
               dispatch(cartDisplayTrueFalse(CartNumberSlice))  
           },[CartNumberSlice])
    
    return(
        <div className={isClickedFour?"mainCheckoutTwo":"mainCheckoutTwoActive"}>
            <div className="checkoutUnderline">
                <h2>CHECKOUT</h2>
                <span></span>
            </div>
            <div className={isClickedFour?"emptyCartAndTitleDeactive":"emptyCartAndTitle"}>
                <img src="assests/images/empty cart.svg" className="emptyCartLogo"/>
                <h3>Your cart is emtpy</h3>
                <Link to={"/manOrWomenChoice"}><button className="continueShopping">CONTINUE SHOPPING</button></Link>
            </div>
            <div className="groupCheckoutsTwo">
               {cartSlice.map((element,index)=>{
                                  return(
                                      <div className="checkoutItemTwo">
                                          <img src={element.picture} className="checkoutImageTwo"/>
                                          <div className="catergoryAndTitleCheckoutTwo">
                                              <h3 className="catergoryCheckout">{element.catergory}</h3>
                                              <h4 className="titleCheckout">{element.title}</h4>
                                          </div>
                                          <form className="plusQuantityMinus">
                                              <div className="minusVect" onClick={()=>{
                                                      dispatch(substractToQuantity(element.indexOf))
                                                  }}>
                                                  <img src="assests/images/minusVector.svg" className="minusVector" />
                                              </div>
                                              <input type="number" className="quantity" value={quantityGroup[element.indexOf]} onClick={(e)=>{
                                                  e.target.value = ""
                                                  
                                              }} onBlur={(e)=>{
                                                  if (e.target.value <= 0 ){
                                                      e.target.value = 1;
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:1}))
                                                  }
                                              }} onChange={(e)=>{
                                                  
                                                  if(e.target.value.length > 0){
                                                      
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:Number(e.target.value)}))
                                                  }
                                                  else{
                                                      dispatch(setQuantity({indexOf:element.indexOf,setValue:""}))
                                                  }
                                                 
                                              }}/>
                                              <div className="plusVect" onClick={(e)=>{
                                                      dispatch(addToQuantity(element.indexOf))
                                                  
                                                      
                                                  }}>
                                                  <img src="assests/images/plusVector.svg" className="plusVector"/>
                                              </div>
                                          </form>
                                          <div className="priceOfItem">
                                              <h4 className="price">{currency}{element.price * quantityGroup[element.indexOf]}</h4>
                                          </div>
                                          <img src="assests/images/exit.svg" className="exitVector" onClick={(e)=>{
                                              dispatch(removeFromCart(index))
                                              dispatch(setQuantity({indexOf:element.indexOf,setValue:1}))
                                              
                                              
                                              }}/>
              
                                      </div>
                                  )
                              })}
            </div>
            <button className={isClickedFour?"checkoutButtonTwo":"checkoutButtonTwoDeactive"}>CHECKOUT</button>
            <div className={isClickedFour?"":"footerTwo"}>
                <Footer/>
            </div>
        </div>
    )
}

export default CheckoutTwo;