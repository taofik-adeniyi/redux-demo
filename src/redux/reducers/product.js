import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [],
}
// {
//     id: 1,
//     title: 'Adeleke',
//     category: 'software developer'
// }

export const product = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        case ActionTypes.FETCH_PRODUCTS:
        return {...state, products: action.payload}
        default:
            return state
    }
}

export const selectedProduct = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}