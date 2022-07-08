import { axiosInstance } from "../../utils/axios";
import { AppDispatch } from "../store";
import { IFetchProductDetailAction } from "./type";
export const fetchProductDetail =
  (id: number) => async (dispatch: AppDispatch) => {
    let url = `/purchase/purchaseDetailOfProduct/${id}`;
    const response = await axiosInstance.get(url);
    let action: IFetchProductDetailAction = {
      type: "FETCH_PRODUCT_DETAIL",
      payload: response.data,
    };
    dispatch(action);
  };
