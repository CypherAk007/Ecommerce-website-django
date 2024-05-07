import axios from 'axios';
import{
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch,getState) => {
    // we will send data in get request - The token ***
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
  // userInfo - whole user object with token and access and refresh we need token fm here
  // Linked to config -> Authroziation 
      const {
        userLogin:{userInfo},
      } = getState()
  
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`
        },
      };
      // here id can be -> 'profile' or dynamic ${id}
      const { data } = await axios.post(
        `/api/orders/add/`,
        order,
        config
      );
      dispatch({
          type:ORDER_CREATE_SUCCESS,
          payload:data
      })
  
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
  
  