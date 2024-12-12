import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            let array = [...state,action.payload];
            return array;
        },
        removeFromCart:(state,action)=>{
            let array = [...state];
            array.splice(action.payload,1);
            return array;
        }
    }
})

const CartNumberSlice = createSlice({
    name:"cartNumber",
    initialState:0,
    reducers:{
        addNumberToCart:(state,action)=>{
            let number = state + 1;
            return number
        },
        removeNumberToCart:(state,action)=>{
            let number = state - 1;
            return number
        }
    }

})
export const {addToCart , removeFromCart} = CartSlice.actions;
export const {addNumberToCart, removeNumberToCart} = CartNumberSlice.actions
export const  CartNumberSliceReducer = CartNumberSlice.reducer;
export default CartSlice.reducer;