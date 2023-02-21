import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./Redux/Reducers/productReducer";


const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
  // user:userReducer,
  // profile:profileReducer

});
let initialState = {};
const middleware =[  thunk ];
const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store