import { createSlice } from "@reduxjs/toolkit";

export const IsClickedSlice = createSlice({
    name:"isClicked",
    initialState:[false,false,true,false],
    reducers:{
        isClickedBool:(state,action)=>{
            state = [false,false,false,false]
            state[action.payload] = !state[action.payload];
            return state
        }
    }
})


export const IsClickedSliceTwo = createSlice({
    name:"isClickedTwo",
    initialState:false,
    reducers:{
        isClickedBoolTwo:(state,action)=>{
            state = !state;
            return state
        }
    }
})

export const {isClickedBool} = IsClickedSlice.actions
export const {isClickedBoolTwo} = IsClickedSliceTwo.actions

export const IsClickedTwoReduce = IsClickedSliceTwo.reducer

export default IsClickedSlice.reducer