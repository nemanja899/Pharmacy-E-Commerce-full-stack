import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productAddReducer, productDeleteReducer, productDetailReducer, productEditReducer, productListReducer } from "./Reducers/ProductReducers";
import {
  userListReducer,
  userLoginReducer,
} from "./Reducers/UserReducer";
import { orderAllReducer, orderDetailsReducer,orderDeliveredReducer } from "./Reducers/OrderReducers";


const reducer = combineReducers({

  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productAdd: productAddReducer,
  detailProduct: productDetailReducer,
  productEdit: productEditReducer,
  orderAll: orderAllReducer,
  orderDetail: orderDetailsReducer,
  orderDelivered: orderDeliveredReducer,
});



//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
 : null;

const initialState = {
 
 userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
