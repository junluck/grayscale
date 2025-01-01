import { createSlice } from "@reduxjs/toolkit"

let array = [];

for(let i = 0; i < 94; i++){
    array[i] = "M";
}

const clothingSizeSlice = createSlice({
    name:"clothingSizeSlice",
    initialState:array,
    reducers:{
        addSizeClothing:(state,action)=>{
            let array = [...state];
            array[action.payload.index] = action.payload.size;
            return array
        }
    }
})


export const {addSizeClothing} = clothingSizeSlice.actions

export default clothingSizeSlice.reducer