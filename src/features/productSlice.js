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

const ProductSliceTwp = createSlice({
    name:"arraySortTwo",
    initialState:[],
    reducers:{
        arrayOfSortedItemsTwo:(state,action)=>{
            let array = [];
            let k = 0
            let maxArrayIndex = 9 +  action.payload.index;
            for(let i = action.payload.index; i < maxArrayIndex ; i++ ){
                array[k] = action.payload.arraySorted[i];
            }
            state = [...array];
            return state
        }

    }
})

export const {arrayOfSortedItems, arrayReseter} = ProductSlice.actions;
export default ProductSlice.reducer