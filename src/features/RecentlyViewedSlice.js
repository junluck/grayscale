import { createSlice } from "@reduxjs/toolkit";

const RecentlyViewedSlice = createSlice({
    name:"RecentlyViewed",
    initialState:[],
    reducers:{
        recentlyViewedArray:(state,action)=>{
            let array = [...state];
            let bool = false
            
            array.forEach((element,index)=>{
                if(element.title === action.payload.title){
                    bool = true
                }

               
            })
            if(array.length === 5 && bool === false){
                array.pop();
                array.unshift(action.payload)
            }
            else if(bool === false){
                array.unshift(action.payload)
            }
            
            
            return array;
        }
    }
})

export const {recentlyViewedArray} = RecentlyViewedSlice.actions
export default  RecentlyViewedSlice.reducer;