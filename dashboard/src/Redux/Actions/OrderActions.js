import axios from "axios";
import {
  ORDER_ALL_FAIL,
  ORDER_ALL_REQUEST,
  ORDER_ALL_SUCCESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../Constants/OrderConstants.js";

export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_ALL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };

    const { data } = await axios.get("/api/orders/all", config);
    dispatch({ type: ORDER_ALL_SUCCESS, payload: data });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch({ type: ORDER_ALL_FAIL, payload: message });
  }
};

export const getOrderDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};

//update order delivered
export const deliverOrder= (id)=>async(dispatch,getState)=>{
  try{

   dispatch({ type: ORDER_DELIVERED_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };
    const { data } = await axios.put(`/api/orders/${id}/delivered`,{id}, config);
    dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data });
  }catch(err){
    const message =
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message;

  dispatch({ type: ORDER_DELIVERED_FAIL, payload: message });
  }
}