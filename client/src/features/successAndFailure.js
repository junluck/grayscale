import { createSlice } from "@reduxjs/toolkit";

const SuccessAndFailureSlice =  createSlice({
    name:"SuccessAndFailure",
    initialState:false,
    reducers:{
        SuccessAndFailure:(state, action)=>{
            return true
        }
    }

})

export const {SuccessAndFailure} = SuccessAndFailureSlice.actions
export default SuccessAndFailureSlice.reducer;