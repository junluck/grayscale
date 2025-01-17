import { createSlice } from "@reduxjs/toolkit";
import { arrayOfClothes } from "./productSlice";

let array = []

for (let i = 0; i < arrayOfClothes.length ; i++){
    array[i] = 1
}

let initialState = JSON.parse(sessionStorage.getItem("cart")) || []
const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            let arrayOne = [...state];
            let bool = false;
            arrayOne.forEach((element)=>{
                if(element.title === action.payload.title){
                    bool = true;
                }
            })
            if(bool != true){
                let arrayTwo = [...state,action.payload];
                return arrayTwo;
                
            }
            
        },
        removeFromCart:(state,action)=>{
            let array = [...state];
            array.splice(action.payload,1);
            return array;
           
        },
        cartAssign:(state,action)=>{
            let array = [...action.payload];
            return array;
        },
        clearCart:(state,action)=>{
            sessionStorage.removeItem("cart");
            return []
        }
        
    }
})

const CartNumberSlice = createSlice({
    name:"cartNumber",
    initialState:0,
    reducers:{
        addNumberToCart:(state,action)=>{
            let number = action.payload.length
            return number
            sessionStorage.setItem("cartNumber",number)
        }
       
    }

})

const CartDisplayerSlice = createSlice({
    name:"cartDisplay",
    initialState:false,
    reducers:{
        cartDisplayTrueFalse:(state,acition)=>{
            if (acition.payload > 0){
                return true
            }
            else{
                return false
            }
        }
    }
})

const CartQuantitySlice = createSlice({
    name:"quantity",
    initialState:JSON.parse(sessionStorage.getItem("qauntityGroup")) || array,
    reducers:{
        addToQuantity:(state,action)=>{
            let array = [...state]
            array[action.payload] += 1
            return array
        },
        substractToQuantity:(state,action)=>{
            let array = [...state]
            if(array[action.payload] > 1){
                array[action.payload] -= 1;
            } 
            return array
        },
        setQuantity:(state,action) =>{
            let array = [...state]
            array[action.payload.indexOf] = action.payload.setValue
            return array
        },
        resetQuantity:(state,action) =>{
            return array
        }
    }
})
export const {addToCart , removeFromCart, addQuantity, subtractQuantity, cartAssign, clearCart} = CartSlice.actions;
export const {addNumberToCart, removeNumberToCart} = CartNumberSlice.actions
export const {cartDisplayTrueFalse} = CartDisplayerSlice.actions
export const {addToQuantity, substractToQuantity, setQuantity, resetQuantity} = CartQuantitySlice.actions
export const  CartNumberSliceReducer = CartNumberSlice.reducer;
export const  CartDisplayerSliceReducer = CartDisplayerSlice.reducer;
export const  CartQuantitySliceReducer = CartQuantitySlice.reducer
export default CartSlice.reducer;