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


const RecentlyViewedSliceBool = createSlice({
    name:"RecentlyViewedSliceBool",
    initialState:true,
    reducers:{
        RecentlyViewedBoolTrue:(state,action)=>{
            return true
        },
        RecentlyViewedBoolFalse:(state,action)=>{
            return false
        }
    }
})


export const {RecentlyViewedBoolTrue, RecentlyViewedBoolFalse} = RecentlyViewedSliceBool.actions
export const {recentlyViewedArray} = RecentlyViewedSlice.actions
export default  RecentlyViewedSlice.reducer;
export const RecentlyViewedSliceBoolReducer = RecentlyViewedSliceBool.reducer