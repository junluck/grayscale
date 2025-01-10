import { createSlice } from "@reduxjs/toolkit";
import inventory from "./inventory";
import { useSelector } from "react-redux";
import { useState } from "react";


const initialState = []

function inventorySorted(inventor){
    let array = []
    for (let clothingItem in inventor.men.tops){
        array = [...array,...inventor.men.tops[clothingItem]]
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

    array.forEach((element,index)=>{
        element["indexOf"] = index

    })
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

 


function compareTwoDimenArray(arrayOne,arrayTwo){
    let bool = false;
    let count = 0;
    let mainCount = 0;
    
    arrayOne.forEach((element,index)=>{ 
        arrayTwo.forEach((ele,inde)=>{
                
                if (element[0] === ele[0] && element[0] != undefined){
                    console.log(element)
                    console.log(ele)
                    count += 1;
                }

                if (element[0] === ele[0] &&  element[1] === ele[1]  && element[1] != undefined){
                    console.log(element)
                    console.log(ele)
                    count += 1;
                }

                if (element[0] === ele[0] &&  element[1] === ele[1] &&  element[2] === ele[2]  && element[2] != undefined){
                    console.log(element)
                    console.log(ele)
                    count += 1;
                }

                if (element[0] === ele[0] &&  element[1] === ele[1] &&  element[2] === ele[2]  &&  element[3] === ele[3]  && element[3] != undefined){
                    console.log(element)
                    console.log(ele)
                    count += 1;
                }
            
                if (mainCount <= count){
                    mainCount = count
                }
                count = 0;
         
        })
    })
    return mainCount
       
}





 export let arrayOfClothes = inventorySorted(inventory)
 
const ProductSlice = createSlice({
    name:"arraySort",
    initialState:JSON.parse(sessionStorage.getItem("productSlice")) || arrayOfClothes,
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
        },
        searchArraySorter:(state,action)=>{
            let array = [];
            let arrayFinal = []
            let i = 0;
            let j = 0;
            let lowerCaseSearchString = action.payload.searchString.toLowerCase()
            let arrayOfSearchString = sentenceIntoTwoDimen([...lowerCaseSearchString])
            console.log(action.payload.array)
            action.payload.array.forEach((element,index)=>{
                let bool = false
                let lowerElementString = element.title.toLowerCase()
                let arrayOfChars = [...lowerElementString]
                let arrayOfItem = sentenceIntoTwoDimen(arrayOfChars)
                let amount = compareTwoDimenArray(arrayOfItem,  arrayOfSearchString)
                array[index] = amount
            })
            let maxNumber = Math.max(...array);
            array.forEach((element,index)=>{
                if (maxNumber === 0 ){
                    arrayFinal = []
                }

              
                else if (element === maxNumber){
                    arrayFinal[j] = action.payload.array[index];
                    j++;
                }
            
            })
            return arrayFinal;
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
            
            for(let i = action.payload.index; i < maxArrayIndex ; i++ ){
                array[k] = action.payload.arraySorted[i];
                k++;
            }
           
            return array
        },
        arraySetterTwo:(state,action)=>{
            return action.payload

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
            if (index < 0){
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
            let maxPages = Math.ceil(action.payload / 9)
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
            let maxPages = Math.ceil(action.payload.length / 9 )
            for(let i = 0;i < maxPages; i++){
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

const ProductSliceNoProducts = createSlice({
    name:"noProducts",
    initialState:false,
    reducers:{
        setToTrue:(state,action)=>{
            return true
        },
        setToFalse:(state,action)=>{
            return false
        },
    }
})

export const ProductSliceTwoReducer = ProductSliceTwo.reducer;
export const ProductIndexSliceReducer = ProductIndexSlice.reducer;
export const ProductPageNumberSliceReducer = ProductPageNumberSlice.reducer;
export const ProductPageIndexerSliceReducer = ProductPageIndexerSlice.reducer;
export const ProductSlicePageNumberCircleReducer = ProductSlicePageNumberCircle.reducer;
export const  ProductSliceNoProductsReducer =  ProductSliceNoProducts.reducer;

export default ProductSlice.reducer;
export const {arrayOfSortedItemsTwo} = ProductSliceTwo.actions;
export const {arrayOfSortedItems, arrayReseter , arraySetter , searchArraySorter} = ProductSlice.actions;
export const {reset,incermentByNine,decrementByNine,mutiplyier} = ProductIndexSlice.actions;
export const {arrayPageNumbering} = ProductPageNumberSlice.actions;
export const {pageDisplayerTrue,pageDisplayerFalse} = ProductPageIndexerSlice.actions;
export const { pageNumberCircle,pageNumberCircleReset} = ProductSlicePageNumberCircle.actions;
export const {setToTrue,setToFalse} = ProductSliceNoProducts.actions

