import {createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers} from './reducers/productReducers'
import { ProductDetailsReducer } from './reducers/productDetailsReducers'
import { cartReducer } from './reducers/cartReducers'
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: ProductDetailsReducer,
    cart:cartReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store 