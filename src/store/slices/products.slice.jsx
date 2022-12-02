import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios'

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProduct: (state, action) => {
            return action.payload
        }
    }
})


export const getProductThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then(res => dispatch(setProduct(res.data.data.products)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)))
}

export const filterProductThunk = (id) => dispatch => {
    dispatch(setIsLoading(true))
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then(res => dispatch(setProduct(res.data.data.products)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)))
}

export const filterItemThunk = (inputSearch) => dispatch => {
    dispatch(setIsLoading(true))
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
        .then(res => dispatch(setProduct(res.data.data.products)))
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}


//https://e-commerce-api.academlo.tech/api/v1/products

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
