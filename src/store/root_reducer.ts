import { combineReducers } from "@reduxjs/toolkit";
import { ProductState } from "./product/type";

import productReducer from "./product/reducer";

export default combineReducers({
  products: productReducer,
});
