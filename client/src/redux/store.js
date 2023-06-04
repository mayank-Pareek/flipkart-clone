import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer } from "./reducers/productReducer";
import { getProductDetailsReducer } from "./reducers/productReducer.js";
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductsDetails: getProductDetailsReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
