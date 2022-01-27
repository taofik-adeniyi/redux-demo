import axiosFetch from '../../axios'
import { ActionTypes } from '../constants/action-types'


export const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await axiosFetch.get('/products')
        console.log(res.data)
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: res.data})
    }
}

export const fetchProduct = (id) =>  async (dispatch) => {
        const res = await axiosFetch.get(`/products/${id}`)
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: res.data})
}

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}
