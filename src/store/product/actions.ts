import { axiosInstance } from "../../utils/axios";
import {
  IProductSearchAction,
  ISearchProduct,
  Product,
  ProductResponseDto,
} from "./type";

export const searchProduct =
  (data: ISearchProduct) => async (dispatch: any) => {
    /// Todo: Error Handling
    let url = `/purchase/getAllProducts?startPosition=${data.startPosition}&maxResult=${data.maxResult}`;
    if (data.date1) {
      url += `&data1=${data.date1}`;
    }

    if (data.date2) {
      url += `&data1=${data.date2}`;
    }
    const response = await axiosInstance.get(url);
    let action: IProductSearchAction = {
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: {
        ...response.data,
        maxResult: data.maxResult,
        startPosition: data.startPosition,
      },
    };
    dispatch(action);
  };
