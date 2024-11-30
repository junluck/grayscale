import IsClickedSliceReducer  from './features/isClicked';
import { IsClickedTwoReduce } from './features/isClicked';
import { ProductSliceTwoReducer,  ProductIndexSliceReducer  } from './features/productSlice';

import ProductSliceReducer from "./features/productSlice"
import currencyReducer from "./features/currencySlice"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
      CurrencySlice:currencyReducer,
      IsClickedSlice:IsClickedSliceReducer,
      IsClickedSliceTwo:IsClickedTwoReduce,
      ProductSlice:ProductSliceReducer,
      ProductSliceTwo: ProductSliceTwoReducer,
      ProductIndexSlice: ProductIndexSliceReducer 
    }
  })

  export default store
  