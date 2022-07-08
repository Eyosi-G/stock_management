import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { PurchaseProduct } from "../store/product_detail/type";
const PurchasedProduct = (product: PurchaseProduct) => {
  return (
    <TableRow key={product.id}>
      <TableCell component="th" scope="row">
        {product.pricePerPiece}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {product.quantity}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {product.purchasedOn.split("T")[0]}
      </TableCell>
    </TableRow>
  );
};

export default PurchasedProduct;
