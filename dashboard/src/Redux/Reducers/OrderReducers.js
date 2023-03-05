import {
  ORDER_ALL_FAIL,
  ORDER_ALL_REQUEST,
  ORDER_ALL_RESET,
  ORDER_ALL_SUCCESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_RESET,
  ORDER_DETAILS_SUCCESS,

 

} from "../Constants/OrderConstants";



export const orderDetailsReducer = (
  state = {loading:true },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
      case ORDER_DETAILS_RESET:
        return {loading:true};
    default:
      return state;
  }
};



export const orderAllReducer = (state = {orders:[],loading:false }, action) => {
  switch (action.type) {
    case ORDER_ALL_REQUEST:
      return { loading: true };
    case ORDER_ALL_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_ALL_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_ALL_RESET:
      return {orders:[],loading:false };
    default:
      return state;
  }
};

export const orderDeliveredReducer = (state = { }, action) => {
  switch (action.type) {
    case ORDER_DELIVERED_REQUEST:
      return { loading: true };
    case ORDER_DELIVERED_SUCCESS:
      return { loading: false, message: action.payload };
    case ORDER_DELIVERED_FAIL:
      return { loading: false, error: action.payload };
  
    default:
      return state;
  }
};
