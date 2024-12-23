import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name:"singleProduct",
    initialState:"",
    reducers:{
        choosenProduct:(state,action)=>{
            return action.payload
        }
    }
});


export const {choosenProduct} = singleProductSlice.actions
export default singleProductSlice.reducer