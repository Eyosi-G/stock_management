import { axiosInstance } from "../../utils/axios";
import { AppDispatch } from "../store";
import { CreatePurchaseRequestDto } from "./type";
export const createPurchase =
  (createPurchase: CreatePurchaseRequestDto) =>
  async (dispatch: AppDispatch) => {
    let url = `/purchase/create/${createPurchase.productId}`;
    let response = await axiosInstance.post(url, {
      quantity: createPurchase.quantity,
      pricePerPiece: createPurchase.pricePerPiece,
    });

    // dispatch();
  };
