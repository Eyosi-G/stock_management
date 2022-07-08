import { useSelect } from "@mui/base";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductRow from "../components/product_row";
import PurchasedProduct from "../components/purchased_product";
import { fetchProductDetail } from "../store/product_detail/action";
import { PurchaseProductState } from "../store/product_detail/type";
import { RootState, useAppDispatch } from "../store/store";

const ProductDetail = () => {
  const param = useParams();
  const dispatch = useAppDispatch();

  const productState: PurchaseProductState = useSelector(
    (state: RootState) => state.productDetail
  );
  const { purchaseProducts } = productState
  useEffect(() => {
    const { id } = param;
    if (!id) return;
    dispatch(fetchProductDetail(parseInt(id)));
  }, []);

  if (!purchaseProducts.length) return null;
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableBody>
        {purchaseProducts.map((product) => (
          <PurchasedProduct {...product} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default ProductDetail;
