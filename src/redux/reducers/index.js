import { combineReducers } from 'redux'
import { product, selectedProduct } from './product'

const reducers = combineReducers({
     allProducts: product,
     product: selectedProduct
})

export default reducers