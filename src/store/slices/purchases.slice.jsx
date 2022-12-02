import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';


export const purchaseSlice = createSlice({
    name: 'Purchase',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            return action.payload
        }
    }
})


export const getPurchasesThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchases(res.data.data.purchases)))
        .catch(error => console.error(error.response.data))

        .finally(() => dispatch(setIsLoading(false)))
}

export const { setPurchases } = purchaseSlice.actions;

export default purchaseSlice.reducer;
