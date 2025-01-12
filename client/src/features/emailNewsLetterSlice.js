import { createSlice } from "@reduxjs/toolkit";

const EmailNewsLetterSlice = createSlice({
    name:"EmailNewsLetter",
    initialState:[],
    reducers:{
        GroupOfEmail:(state,action)=>{
            let array = [...state];
            let bool = true;
            array.forEach((element,index)=>{
                if(action.payload===element){
                    bool = false;
                }
            })
            if(bool){
                array.push(action.payload)
            }
            return array;
        }
    }
})

export const {GroupOfEmail} = EmailNewsLetterSlice.actions;
export default EmailNewsLetterSlice.reducer;