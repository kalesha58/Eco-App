import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./Redux/Reducers/productReducer";
import { allUsersReducer, profileReducer, userReducer } from "./Redux/Reducers/userReducer";
import { cartReducer } from "./Redux/Reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer,orderDetailsReducer, orderReducer } from "./Redux/Reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders:myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  // {====ADMIN===}
  allUsers: allUsersReducer,
  allOrders: allOrdersReducer,
  product: productReducer,
  newProduct: newProductReducer,
  order: orderReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,

});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
