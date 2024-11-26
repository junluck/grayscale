import { createSlice } from "@reduxjs/toolkit";
import inventory from "./inventory";

const initialState = []
const ProductSlice = createSlice({
    name:"arraySort",
    initialState:initialState,
    reducers:{
        arrayOfSortedItems:(state,action)=>{
            state = [...state,...action.payload]
            return state
        },
        arrayReseter:(state,action)=>{
            state=[];
            return state
        }

    }
})

export const {arrayOfSortedItems, arrayReseter} = ProductSlice.actions;
export default ProductSlice.reducer