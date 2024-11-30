import { createSlice } from "@reduxjs/toolkit";
import inventory from "./inventory";
import { useSelector } from "react-redux";


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

const ProductSliceTwo = createSlice({
    name:"arraySortTwo",
    initialState:[],
    reducers:{
        arrayOfSortedItemsTwo:(state,action)=>{
            let array = [];
            let k = 0
            let maxArrayIndex = 9 +  action.payload.index;
            
            if (maxArrayIndex > action.payload.arraySorted.length){
                maxArrayIndex  = action.payload.arraySorted.length;
               
                
            }
            console.log(maxArrayIndex)
            for(let i = action.payload.index; i < maxArrayIndex ; i++ ){
                array[k] = action.payload.arraySorted[i];
                k++;
            }
           
            return array
        }

    }
})

const ProductIndexSlice = createSlice({
    name:"index",
    initialState:0,
    reducers:{
        reset:(state,action)=>{
            state = 0
        },
        incermentByNine:(state,action)=>{
           
            let value = state + 9
            console.log(action.payload)
            if((action.payload - value) < 9 && (action.payload - value) != 0 ){
                value = 9 * (Math.floor(action.payload/9))
               
            }
            else{
                value = 9 * (Math.floor(action.payload/9) - 1)
            }
            return value
        },
        decrementByNine:(state,action)=>{
            
            let index = state - 9
            if (index<0){
                index = 0
            }
            return index

            
        }
    }
})

export const ProductSliceTwoReducer = ProductSliceTwo.reducer
export const ProductIndexSliceReducer = ProductIndexSlice.reducer
export default ProductSlice.reducer
export const {arrayOfSortedItemsTwo} = ProductSliceTwo.actions
export const {arrayOfSortedItems, arrayReseter} = ProductSlice.actions;
export const {reset,incermentByNine,decrementByNine} = ProductIndexSlice.actions
