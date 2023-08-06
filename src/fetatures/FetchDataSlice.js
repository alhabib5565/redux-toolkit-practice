import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk('product/fetch', async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`)
    return response.data
})

 const fetchDataSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            }),
            builder.addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
})

export default fetchDataSlice.reducer