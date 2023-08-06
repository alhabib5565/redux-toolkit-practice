import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../fetatures/ProductSlice";
import FetchDataSlice from "../fetatures/FetchDataSlice";


const store = configureStore({
    reducer: {
        catrProduct: ProductSlice,
        products: FetchDataSlice
    }
})
export default store