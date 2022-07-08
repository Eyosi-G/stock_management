import { Box, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../store/common/type";
export type UpdateProduct =  (id: number, quantity: number, piecePerPrice: number) => void
const ProductRow = (product: Product, updateProduct: UpdateProduct) => {
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
      <TableCell style={{ width: 160 }} align="right">
        <Box sx={{ display: "flex" }}>
          <button>+</button> <input type="number" /> <button>-</button>
        </Box>
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <Box sx={{ display: "flex" }}>
          <button>+</button> <input type="number" /> <button>-</button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
