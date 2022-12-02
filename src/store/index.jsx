import { configureStore } from '@reduxjs/toolkit'
import purchaseSlice from './slices/purchases.slice'
import isLoadingSlice from './slices/isLoading.slice'
import productSlice from './slices/products.slice'
import cartSlice from './slices/cart.slice'

export default configureStore({
    reducer: {
        product: productSlice,
        isLoading: isLoadingSlice,
        purchases: purchaseSlice,
        cart: cartSlice
    }
})
