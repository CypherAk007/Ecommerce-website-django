import axios from "axios";
import { CART_ADD_ITEM ,CART_REMOVE_ITEM,CART_SAVE_PAYMENT_METHOD,CART_SAVE_SHIPPING_ADDRESS} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // getState-> like useselector , we need when we load data to browser 
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image:data.image, 
      price:data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  // load data to localStorage so that after refresh of page we can take data fm here and put it into our state
  // stringify as it needs to be string value 
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (id)=>(dispatch,getState)=>{
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id,
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// Shipping Action 
export const saveShippingAddress = (data)=>(dispatch)=>{
  dispatch({
    type:CART_SAVE_SHIPPING_ADDRESS,
    payload:data,
  })
  localStorage.setItem("shippingAddress", JSON.stringify(data));
}

// Shipping Action 
export const savePamentMethod = (data)=>(dispatch)=>{
  dispatch({
    type:CART_SAVE_PAYMENT_METHOD,
    payload:data,
  })
  localStorage.setItem("paymentMethod", JSON.stringify(data));
}