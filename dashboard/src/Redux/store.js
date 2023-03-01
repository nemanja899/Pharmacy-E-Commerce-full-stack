import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {

} from "./Reducers/ProductReducers";
import {
  userLoginReducer,
} from "./Reducers/UserReducer";


const reducer = combineReducers({

  userLogin: userLoginReducer,
 
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
