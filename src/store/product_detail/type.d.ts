export interface PurchaseProduct {
  id: number;
  quantity: number;
  pricePerPiece: number;
  purchasedOn: string;
}
export interface PurchaseProductState {
  purchaseProducts: PurchaseProduct[];
}

export interface IFetchProductDetailAction {
  type: "FETCH_PRODUCT_DETAIL";
  payload: ProductState;
}
