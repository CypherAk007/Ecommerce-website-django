import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,

  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login/",
      { 'username': email, 'password': password },
      config
    );
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:data
    })
    localStorage.setItem('userInfo',JSON.stringify(data))
    
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const logout = () => (dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({type:USER_LOGOUT})
  dispatch({type:USER_DETAILS_RESET})
}



export const register = (name,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/register/",
      { 'name':name, 'email': email, 'password': password },
      config
    );
    dispatch({
        type:USER_REGISTER_SUCCESS,
        payload:data
    })
    // Login user after register the user 
    dispatch({
      type:USER_LOGIN_SUCCESS,
      payload:data
  })
    localStorage.setItem('userInfo',JSON.stringify(data))
    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const getUserDetails = (id) => async (dispatch,getState) => {
  // we will send data in get request - The token ***
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
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
    const { data } = await axios.get(
      `/api/users/${id}/`,
      config
    );
    dispatch({
        type:USER_DETAILS_SUCCESS,
        payload:data
    })

  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const updateUserProfile = (user) => async (dispatch,getState) => {
  // we will send data in get request - The token ***
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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
    const { data } = await axios.put(
      `/api/users/profile/update/`,
      user,
      config
    );
    dispatch({
        type:USER_UPDATE_PROFILE_SUCCESS,
        payload:data
    })

    dispatch({
      type:USER_LOGIN_SUCCESS,
      payload:data
  })
  localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

