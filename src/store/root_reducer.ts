import { combineReducers } from "@reduxjs/toolkit";
import { ProductState } from "./product/type";

import productReducer from "./product/reducer";
import productDetailReducer from "./product_detail/reducer";

export default combineReducers({
  products: productReducer,
  productDetail: productDetailReducer
});
