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
            return state
        },
        incermentByNine:(state,action)=>{
           
            let value = state + 9
            console.log(action.payload)
            if((action.payload - value) < 9 ){
                value = action.payload - 9
               
            }
            
            return value
        },
        decrementByNine:(state,action)=>{
            
            let index = state - 9
            if (index<0){
                index = 0
            }
            return index

            
        },
        mutiplyier:(state,action)=>{
           let index = 9 * action.payload
           return index
        }
    }
})

const ProductPageNumberSlice = createSlice({
    name:"pageNumbers",
    initialState:[],
    reducers:{
        arrayPageNumbering:(state,action)=>{
            let array = [];
            let maxPages = Math.ceil(action.payload/9)
            for(let i = 0 ; i < maxPages ; i++){
                array[i] = i + 1
            }
            return array
        }
    }
})

const ProductPageIndexerSlice = createSlice({
    name:"pageDisplayer",
    initialState:true,
    reducers:{
        pageDisplayerTrue:(state,action)=>{
            let bool = true;
            return bool
        },
        pageDisplayerFalse:(state,action)=>{
            let bool = false;
            return bool
        }
    }
    
})

const ProductSlicePageNumberCircle = createSlice({
    name:"pageNumberCircle",
    initialState:[true],
    reducers:{
        pageNumberCircle:(state,action)=>{
            let array = []
            for(let i = 0;i < action.payload.length; i++){
                array[i] = false
            }
            array[action.payload.ele] = true
            return array
            
        },
        pageNumberCircleReset:(state,action)=>{
            let array = [true]
            return array
            
        }

    }
})

export const ProductSliceTwoReducer = ProductSliceTwo.reducer;
export const ProductIndexSliceReducer = ProductIndexSlice.reducer;
export const ProductPageNumberSliceReducer = ProductPageNumberSlice.reducer;
export const ProductPageIndexerSliceReducer = ProductPageIndexerSlice.reducer;
export const ProductSlicePageNumberCircleReducer = ProductSlicePageNumberCircle.reducer
export default ProductSlice.reducer;
export const {arrayOfSortedItemsTwo} = ProductSliceTwo.actions;
export const {arrayOfSortedItems, arrayReseter} = ProductSlice.actions;
export const {reset,incermentByNine,decrementByNine,mutiplyier} = ProductIndexSlice.actions;
export const {arrayPageNumbering} = ProductPageNumberSlice.actions;
export const {pageDisplayerTrue,pageDisplayerFalse} = ProductPageIndexerSlice.actions;
export const { pageNumberCircle,pageNumberCircleReset} = ProductSlicePageNumberCircle.actions
