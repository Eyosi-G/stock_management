import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../store/common/type";

const ProductRow = (product: Product) => {
  const navigate = useNavigate();
  
  return (
    <TableRow
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {product.description}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {product.quantityOnStock}
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
