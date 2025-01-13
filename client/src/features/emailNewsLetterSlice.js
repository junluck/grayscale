import { createSlice } from "@reduxjs/toolkit";

const EmailNewsLetterSlice = createSlice({
    name:"EmailNewsLetter",
    initialState:JSON.parse(sessionStorage.getItem("groupOfEmails")) || [],
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
        },
        setGroupEmails:(state,action)=>{
            let array = [...action.payload]
            console.log(array)
            return array
        }
    }
})

export const {GroupOfEmail ,setGroupEmails} = EmailNewsLetterSlice.actions;
export default EmailNewsLetterSlice.reducer;