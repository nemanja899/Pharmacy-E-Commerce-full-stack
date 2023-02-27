import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../Constants/OrderCOnstants";
import axios from "axios";
import { CART_CLEAR_ITEMS } from "../Constants/CartConstants";
import { logout } from "./UserActions";

//order create
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/orders", order, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS });

    localStorage.removeItem("cartItems");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized token failed") {
      dispatch(logout());
    }
    dispatch({ type: ORDER_CREATE_FAIL, payload: message });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
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
    if (message === "Not authorized token failed") {
      dispatch(logout());
    }
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};

//order pay
export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${id}/pay`,
      paymentResult,
      config
    );
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    if (message === "Not authorized token failed") {
      dispatch(logout());
    }
    dispatch({ type: ORDER_PAY_FAIL, payload: message });
  }
};
//user orders
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config={
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer " +userInfo.token
      }
    }

    const {data} = await axios.get("/api/orders",config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data});
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    if (message === "Not authorized token failed") {
      dispatch(logout());
    }
    dispatch({ type: ORDER_LIST_MY_FAIL, payload: message });
  }
};
