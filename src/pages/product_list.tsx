import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductRow from "../components/product_row";
import { searchProduct } from "../store/product/actions";
import { ISearchProduct } from "../store/product/type";
import { RootState, useAppDispatch } from "../store/store";

interface Purchase {
  id: number;
  quanitiy: number;
  piecePerPrice: number;
}

const ProductList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dateOne, setDateOne] = useState(() => "");

  const [dateTwo, setDateTwo] = useState(() => "");
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const updatePurchase = (
    id: number,
    quantity: number,
    piecePerPrice: number
  ) => {
    let purchasesCopy = [...purchases];
    let purchase = purchases.find((purchase) => purchase.id == id);
    if (purchase) {
      purchase.piecePerPrice = piecePerPrice;
      purchase.quanitiy = quantity;
    }
    setPurchases(purchasesCopy);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useAppDispatch();

  const {
    maxResult,
    startPosition,
    totalCount,
    model: products,
  } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    let payload: ISearchProduct = {
      maxResult: rowsPerPage,
      startPosition: page,
    };
    if (dateOne) {
      payload.date1 = new Date(dateOne).toISOString();
    }

    if (dateTwo) {
      payload.date2 = new Date(dateTwo).toISOString();
    }

    dispatch(searchProduct(payload));
  }, [page, rowsPerPage, dateOne, dateTwo]);

  return (
    <div>
      <div>
        <label>frame date</label>
        <input
          type="date"
          value={dateOne}
          onChange={(e) => setDateOne(e.target.value)}
        />
      </div>
      <div>
        <label>to date</label>
        <input
          type="date"
          value={dateTwo}
          onChange={(e) => setDateTwo(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                product name
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                product description
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                quantity in stock
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                quanity
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                piece per price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductRow {...product}  />
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={totalCount}
                rowsPerPage={maxResult}
                page={startPosition}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <button>create purchase</button>
      </Box>
    </div>
  );
};

export default ProductList;
