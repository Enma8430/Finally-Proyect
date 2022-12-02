import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
})

export const getCartThunk = () => dispatch => {
    console.log("Me ejecute")
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)))
}

export const createCartThunk = (productToCart) => dispatch => {
    dispatch(setIsLoading(true))
    axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', productToCart, getConfig())
        .then(res => dispatch(getCartThunk()))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)))
}

export const chekCartThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(res => dispatch(setCart([])))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;

//https://e-commerce-api.academlo.tech/api/v1/cart