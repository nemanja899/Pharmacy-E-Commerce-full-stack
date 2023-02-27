import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReviewReducer,
  productDetailReducer,
  productListReducer,
} from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/UserReducer";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./Reducers/OrderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay:orderPayReducer,
  orderListMy:orderListMyReducer,
  productCreateReview:productCreateReviewReducer
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//shipping adress
const shippingAdressFromLocalStorage = localStorage.getItem("shippingAdress")
  ? JSON.parse(localStorage.getItem("shippingAdress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAdress: shippingAdressFromLocalStorage,
  
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
