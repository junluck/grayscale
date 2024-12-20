import { createSlice } from "@reduxjs/toolkit";

export const IsClickedSlice = createSlice({
    name:"isClicked",
    initialState:[false,false,true,false],
    reducers:{
        isClickedBool:(state,action)=>{
            state = [false,false,false,false]
            state[action.payload] = !state[action.payload];
            return state
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

export const isClickedSliceFour = createSlice({
    name:"isClickedFour",
    initialState:false,
    reducers:{
        isBoolFourFalse:(state,action)=>{
            return false
        },
        isBoolFourTrue:(state,action)=>{
            return false
        }

    }

})
export const {isClickedBool} = IsClickedSlice.actions;
export const {isClickedBoolTwo} = IsClickedSliceTwo.actions;
export const {isClickedBoolThree, isClickedBoolThreeFalse} = IsClickedSliceThree.actions;
export const IsClickedTwoReduce = IsClickedSliceTwo.reducer;
export const IsClickedThreeReduce = IsClickedSliceThree.reducer

export default IsClickedSlice.reducer