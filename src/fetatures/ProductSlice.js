import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        carts: []
    },
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            const id = action.payload
            state.carts = state.carts.filter(cartItems => cartItems.id !== id)
        }
    }
})

export const { addCart, deleteFromCart } = productSlice.actions
export default productSlice.reducer

