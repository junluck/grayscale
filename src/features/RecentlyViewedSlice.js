import { createSlice } from "@reduxjs/toolkit";

const RecentlyViewedSlice = createSlice({
    name:"RecentlyViewed",
    initialState:[],
    reducers:{
        recentlyViewedArray:(state,action)=>{
            let array = [...state];
            if(action.payload.length === 5){
                array.pop();
                array.unshift(action.payload)
            }
            else{
                array.unshift(action.payload)
            }

            return array;
        }
    }
})

export const {recentlyViewedArray} = RecentlyViewedSlice.actions
export default  RecentlyViewedSlice.reducer;