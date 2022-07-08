import { configureStore } from "@reduxjs/toolkit";
import { ProductState } from "./product/type";
import { IProductSearchAction } from "../store/product/type";
import rootReducer from "./root_reducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
