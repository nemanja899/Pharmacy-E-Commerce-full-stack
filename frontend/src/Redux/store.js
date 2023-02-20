import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailReducer, productListReducer } from "./Reducers/ProductReducers";

const reducer= combineReducers({
    productList: productListReducer,
    productDetails:productDetailReducer
});

const initialState ={};

const middleWare=[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;