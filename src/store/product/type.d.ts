import { Product } from "../common/type";
export interface ProductResponseDto {
  model: Product[];
  totalCount: number;
}

export interface ProductState {
  model: Product[];
  totalCount: number;
  startPosition: number;
  maxResult: number;
}

export interface ISearchProduct {
  date1?: string;
  date2?: string;
  startPosition: number;
  maxResult: number;
}

export interface IProductSearchAction {
  type: "FETCH_PRODUCTS_SUCCESS";
  payload: {
    maxResult: number;
    model: Product[];
    startPosition: number;
    totalCount: number;
  };
}
