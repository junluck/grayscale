import { createSlice } from "@reduxjs/toolkit";

export const CurrencySlice = createSlice({
    name:"currency",
    initialState:"$",
    reducers:{
        currencySetter:(state,action)=>{
            state = action.payload
            return state

        }
    }
})

export const {currencySetter} = CurrencySlice.actions;

export default CurrencySlice.reducer

