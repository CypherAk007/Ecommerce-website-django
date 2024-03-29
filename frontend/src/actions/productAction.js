import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST } from "../constants/productConstants"

import axios from 'axios'
export const listProducts = ()=> async (dispatch) =>{
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('/api/products/')
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})

    }catch(error){
        // in payload  if custom error message then use that else use generic one
        dispatch({type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.detail?
            error.response.data.detail:
            error.message

        })
    }
}