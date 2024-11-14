import { createSlice } from "@reduxjs/toolkit";

export const IsClickedSlice = createSlice({
    name:"isClicked",
    initialState:[false,false,false,false],
    reducers:{
        isClickedBool:(state,action)=>{
            state = [false,false,false,false]
            state[action.payload] = !state[action.payload];
            return state
        }
    }
})

export const {isClickedBool} = IsClickedSlice.actions

export default IsClickedSlice.reducer