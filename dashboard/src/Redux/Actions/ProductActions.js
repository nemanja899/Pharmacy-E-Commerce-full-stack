import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL
} from "../Constants/ProductConstants";
import axios from "axios";

export const addProduct = (price,countInStock,name,description,image) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_ADD_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };
   
    const { data } = await axios.post("/api/products", {price,countInStock,name,description,image}, config);
    console.log(data);
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editProduct =(productId,name="",description="",countInStock,price)=>async(dispatch,getState)=>{
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };
    const {data}= await axios.put(`/api/products/${productId}`,{name,description,countInStock,price},config);
    dispatch({type:PRODUCT_EDIT_SUCCESS,payload:data});
  } catch (error) {
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export const listProduct =
  (sort = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.token,
        },
      };
      const { data } = await axios.get(
        `/api/products/all?sort=${sort}`,
        config
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
//product details
export const productDetails = (id) => async (dispatch) => {
  try {
    console.log(id);

    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct =
  (productId, sort) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.token,
        },
      };

      const { data } = await axios.delete(`/api/products/${productId}`, config);
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
      dispatch(listProduct(sort));
    } catch (err) {
      const message =
        err.response && err.response.message
          ? err.response.message
          : err.message;
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
    }
  };
