import {createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers} from './reducers/productReducers'
import { ProductDetailsReducer } from './reducers/productDetailsReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: ProductDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
})

// 2-> pull data from local storge and store it in our initial state if not there ->[]
const cartItemsFromStorage = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')): null

    // cart:{cartItems: cartItemsFromStorage} -> const cartReducer = (state={cartItems:[]
    // cart:cartReducer, - above in reducer so its cart:{cartItems:[]}
const initialState = {
    cart:{cartItems: cartItemsFromStorage},
    userLogin:{userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store 