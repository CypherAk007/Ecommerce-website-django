import { PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST } from "../constants/productConstants"

export const ProductDetailsReducer = (state = {product:{reviews:[]}},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{loading:true,product:{}}
        
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}

        case PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }

}