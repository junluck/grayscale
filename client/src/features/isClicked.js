import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./productSlice";

export const IsClickedSlice = createSlice({
    name:"isClicked",
    initialState: JSON.parse(sessionStorage.getItem("isClicked")) || [false,false,true,false],
    reducers:{
        isClickedBool:(state,action)=>{
            state = [false,false,false,false]
            state[action.payload] = !state[action.payload];
            return state
        },
        resetIsClicked:(state,action)=>{
            return [false,false,true,false]
        }
    }
})


export const IsClickedSliceTwo = createSlice({
    name:"isClickedTwo",
    initialState:false,
    reducers:{
        isClickedBoolTwo:(state,action)=>{
            state = !state;
            return state
        }
    }
})

export const IsClickedSliceThree = createSlice({
    name:"isClickedThree",
    initialState:false,
    reducers:{
        isClickedBoolThree:(state,action)=>{
            state = !state;
            return state
        },
        isClickedBoolThreeFalse:(state,action)=>{
            state = false;
            return state
        }
        

    }
})

export const IsClickedSliceFour = createSlice({
    name:"isClickedFour",
    initialState:false,
    reducers:{
        isClickedBoolFourFalse:(state,action)=>{
            return false
        },
        isClickedBoolFourTrue:(state,action)=>{
            return true
        }

    }

})

export const IsClickedSliceFive = createSlice({
    name:"isClickedFive",
    initialState:[false,false,false],
    reducers:{
        isClickedBoolFive:(state,action)=>{
            let array = [...state];
            array[action.payload] = !array[action.payload];
            return array;
        }

    }
})
export const {isClickedBool ,resetIsClicked} = IsClickedSlice.actions;
export const {isClickedBoolTwo} = IsClickedSliceTwo.actions;
export const {isClickedBoolThree, isClickedBoolThreeFalse} = IsClickedSliceThree.actions;
export const {isClickedBoolFourFalse,isClickedBoolFourTrue} =  IsClickedSliceFour.actions;
export const {isClickedBoolFive} = IsClickedSliceFive.actions;
export const IsClickedTwoReduce = IsClickedSliceTwo.reducer;
export const IsClickedThreeReduce = IsClickedSliceThree.reducer;
export const IsClickedFourReduce = IsClickedSliceFour.reducer;
export const IsClickedFiveReduce = IsClickedSliceFive.reducer
export default IsClickedSlice.reducer