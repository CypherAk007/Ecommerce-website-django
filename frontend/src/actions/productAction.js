import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,


  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,

  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  

  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,

  PRODUCT_DETAILS_SUCCESS,

} from "../constants/productConstants";

import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products/");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    // in payload  if custom error message then use that else use generic one
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  // we will send data in get request - The token ***
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });
    // userInfo - whole user object with token and access and refresh we need token fm here
    // Linked to config -> Authroziation
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // here id can be -> 'profile' or dynamic ${id}
    const { data } = await axios.delete(`/api/products/delete/${id}`, config);
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}
export const createProduct = () => async (dispatch, getState) => {
  // we will send data in get request - The token ***
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });
    // userInfo - whole user object with token and access and refresh we need token fm here
    // Linked to config -> Authroziation
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // here id can be -> 'profile' or dynamic ${id}
    const { data } = await axios.post(`/api/products/create/`, {},config);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const updateProduct = (product) => async (dispatch, getState) => {
  // we will send data in get request - The token ***
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });
    // userInfo - whole user object with token and access and refresh we need token fm here
    // Linked to config -> Authroziation
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // here id can be -> 'profile' or dynamic ${id}
    const { data } = await axios.put(`/api/products/update/${product._id}`,product,config);
    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
