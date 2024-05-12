import { CART_ADD_ITEM,CART_CLEAR_ITEMS,CART_REMOVE_ITEM,CART_SAVE_PAYMENT_METHOD,CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";
// 1-> cart reducer for checking if product exists in cart and updating it acc
export const cartReducer = (state={cartItems:[],shippingAddress:{}},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x=>x.product===item.product)
            if(existItem){
                // here x.product = is product id ref. cartActions.js -> product: data._id,
                // x.product===existItem.product => if product id matches replace with incoming item else leave it with x(prevly exitsting item )
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>
                        x.product === existItem.product ? item:x
                        )
                }
            }else{
                // if item does not exits 
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.product!== action.payload)
            }
        // Shipping address reducer 
        case CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress:action.payload
            }

        case CART_SAVE_PAYMENT_METHOD:
            return{
                ...state,
                paymentMethod:action.payload
            }

        case CART_CLEAR_ITEMS:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state
    }
}