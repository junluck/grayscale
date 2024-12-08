import { createSlice } from "@reduxjs/toolkit";
import inventory from "./inventory";
import { useSelector } from "react-redux";


const initialState = []
function inventorySorted(inventor){
    let array = []
    for (let clothingItem in inventor.men.tops){
        array = [...inventor.men.tops[clothingItem]]
    };
    for (let clothingItem in inventor.men.bottoms){
        array = [...array,...inventor.men.bottoms[clothingItem]]
    };
    for (let clothingItem in inventor.women.tops){
        array = [...array,...inventor.women.tops[clothingItem]]
    };
    for (let clothingItem in inventor.women.bottoms){
        array = [...array,...inventor.women.bottoms[clothingItem]]
    };
    return array
}

function sentenceIntoTwoDimen(array){
    let arrayTwo = [];
    let k = 0;
    let j = 0;
    let l = 0;
    let arrayOne = [];
    let arrayFinal = [];
    for(let i = 0 ; i < array.length; i++){
        if(array[i] != " "){
            arrayOne[k] = array[i];
            k++;
        }
        if(array[i] === " "){
            k = 0;
            arrayOne = [];
            j++;
        }
        if(arrayOne.length > 0){
            arrayTwo[j] = arrayOne;
        }
    }
    arrayTwo.forEach((element)=>{
        if(element.length > 0){
            arrayFinal[l] = element;
            l++;
        }
    })
    return arrayFinal;
}




 let arrayOfClothes = inventorySorted(inventory)
 console.log(arrayOfClothes)

const ProductSlice = createSlice({
    name:"arraySort",
    initialState:initialState,
    reducers:{
        arrayOfSortedItems:(state,action)=>{
            state = [...state,...action.payload]
            return state
        },
        arrayReseter:(state,action)=>{
            state=[];
            return state
        },
        arraySetter:(state,action)=>{
            state = [...action.payload];
            return state
        }

    }
})

const ProductSliceTwo = createSlice({
    name:"arraySortTwo",
    initialState:[],
    reducers:{
        arrayOfSortedItemsTwo:(state,action)=>{
            let array = [];
            let k = 0
            let maxArrayIndex = 9 +  action.payload.index;
            
            if (maxArrayIndex > action.payload.arraySorted.length){
                maxArrayIndex  = action.payload.arraySorted.length;
               
                
            }
            console.log(maxArrayIndex)
            for(let i = action.payload.index; i < maxArrayIndex ; i++ ){
                array[k] = action.payload.arraySorted[i];
                k++;
            }
           
            return array
        }

    }
})

const ProductIndexSlice = createSlice({
    name:"index",
    initialState:0,
    reducers:{
        reset:(state,action)=>{
            state = 0
            return state
        },
        incermentByNine:(state,action)=>{
           
            let value = state + 9
            console.log(action.payload)
            if((action.payload - value) < 9 ){
                value = action.payload - 9
               
            }
            
            return value
        },
        decrementByNine:(state,action)=>{
            
            let index = state - 9
            if (index<0){
                index = 0
            }
            return index

            
        },
        mutiplyier:(state,action)=>{
           let index = 9 * action.payload
           return index
        }
    }
})

const ProductPageNumberSlice = createSlice({
    name:"pageNumbers",
    initialState:[],
    reducers:{
        arrayPageNumbering:(state,action)=>{
            let array = [];
            let maxPages = Math.ceil(action.payload/9)
            for(let i = 0 ; i < maxPages ; i++){
                array[i] = i + 1
            }
            return array
        }
    }
})

const ProductPageIndexerSlice = createSlice({
    name:"pageDisplayer",
    initialState:true,
    reducers:{
        pageDisplayerTrue:(state,action)=>{
            let bool = true;
            return bool
        },
        pageDisplayerFalse:(state,action)=>{
            let bool = false;
            return bool
        }
    }
    
})

const ProductSlicePageNumberCircle = createSlice({
    name:"pageNumberCircle",
    initialState:[true],
    reducers:{
        pageNumberCircle:(state,action)=>{
            let array = []
            for(let i = 0;i < action.payload.length; i++){
                array[i] = false
            }
            array[action.payload.ele] = true
            return array
            
        },
        pageNumberCircleReset:(state,action)=>{
            let array = [true]
            return array
            
        }

    }
})

const ProductSearchSlice = createSlice({
    name:"arrayOfClothesSearcher",
    initialState:arrayOfClothes,
    reducers:{
        searchArraySorter:(state,action)=>{
            let arrayOfSearchString = sentenceIntoTwoDimen(action.payload.searchString)
            let arrayOfTitles = []
            action.payload.array.forEach((element)=>{
                let arrayOfChars = [element.title]
                let arrayOfItem = sentenceIntoTwoDimen(arrayOfChars)
                arrayOfItem.forEach((element,index)=>{
                    
                })

            })
        }
    }
})

export const ProductSliceTwoReducer = ProductSliceTwo.reducer;
export const ProductIndexSliceReducer = ProductIndexSlice.reducer;
export const ProductPageNumberSliceReducer = ProductPageNumberSlice.reducer;
export const ProductPageIndexerSliceReducer = ProductPageIndexerSlice.reducer;
export const ProductSlicePageNumberCircleReducer = ProductSlicePageNumberCircle.reducer
export default ProductSlice.reducer;
export const {arrayOfSortedItemsTwo} = ProductSliceTwo.actions;
export const {arrayOfSortedItems, arrayReseter} = ProductSlice.actions;
export const {reset,incermentByNine,decrementByNine,mutiplyier} = ProductIndexSlice.actions;
export const {arrayPageNumbering} = ProductPageNumberSlice.actions;
export const {pageDisplayerTrue,pageDisplayerFalse} = ProductPageIndexerSlice.actions;
export const { pageNumberCircle,pageNumberCircleReset} = ProductSlicePageNumberCircle.actions
