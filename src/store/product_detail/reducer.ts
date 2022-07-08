import { IFetchProductDetailAction, PurchaseProductState } from "./type";
const initialState: PurchaseProductState = {
  purchaseProducts: [],
};
const productDetailReducer = (
  state = initialState,
  action: IFetchProductDetailAction
): PurchaseProductState | null => {
  switch (action.type) {
    case "FETCH_PRODUCT_DETAIL":
      return {
        purchaseProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
