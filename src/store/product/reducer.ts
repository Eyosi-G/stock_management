import { IProductSearchAction, ProductResponseDto, ProductState } from "./type";
const initialState: ProductState = {
  maxResult: 0,
  model: [],
  startPosition: 0,
  totalCount: 0,
};

const productReducer = (state = initialState, action: IProductSearchAction) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
