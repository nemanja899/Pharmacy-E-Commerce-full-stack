import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_RESET,
  PRODUCT_DETAIL_RESET,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_RESET,
  
} from "../Constants/ProductConstants";

export const productDetailReducer = (
  state = { },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {  loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return {  product: action.payload, loading: false };

    case PRODUCT_DETAIL_FAIL:
      return {  loading: false, error: action.payload };
      case PRODUCT_DETAIL_RESET:
        return {};
    default:
      return state;
  }
};

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productEditReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_EDIT_SUCCESS:
      return {
        message: action.payload,
        loading: false,
      };

    case PRODUCT_EDIT_FAIL:
      return { loading: false, error: action.payload };
      case PRODUCT_EDIT_RESET:
        return {};
    default:
      return state;
  }
};

export const productDeleteReducer = (state = { }, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return {
        message: action.payload,
        loading: false,
      };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productAddReducer = (state = { }, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { loading: true };
    case PRODUCT_ADD_SUCCESS:
      return {
        message: action.payload,
        loading: false,
      };

    case PRODUCT_ADD_FAIL:
      return { loading: false, error: action.payload };
      case PRODUCT_ADD_RESET:
        return {};
    default:
      return state;
  }
};

