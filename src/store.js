import IsClickedSliceReducer  from './features/isClicked';
import { IsClickedTwoReduce } from './features/isClicked';
import { ProductSliceTwoReducer,  ProductIndexSliceReducer ,ProductPageNumberSliceReducer ,ProductPageIndexerSliceReducer, ProductSlicePageNumberCircleReducer , ProductSliceNoProductsReducer } from './features/productSlice';
import ProductSliceReducer from "./features/productSlice"
import currencyReducer from "./features/currencySlice"
import { configureStore } from '@reduxjs/toolkit';
import CartSliceReducer, { CartNumberSliceReducer } from './features/cartSlice';


const store = configureStore({
    reducer:{
      CurrencySlice:currencyReducer,
      IsClickedSlice:IsClickedSliceReducer,
      IsClickedSliceTwo:IsClickedTwoReduce,
      ProductSlice:ProductSliceReducer,
      ProductSliceTwo: ProductSliceTwoReducer,
      ProductIndexSlice: ProductIndexSliceReducer, 
      ProductPageNumberSlice:ProductPageNumberSliceReducer,
      ProductPageIndexerSlice:ProductPageIndexerSliceReducer,
      ProductSlicePageNumberCircle:ProductSlicePageNumberCircleReducer,
      ProductSliceNoProducts:ProductSliceNoProductsReducer,
      CartSlice:CartSliceReducer,
      CartNumberSlice:CartNumberSliceReducer 
    }
  })

  export default store
  