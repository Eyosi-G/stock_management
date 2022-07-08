import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
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

const ProductList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dateOne, setDateOne] = useState(
    () => new Date().toISOString().split("T")[0]
  );

  const [dateTwo, setDateTwo] = useState(
    () => new Date().toISOString().split("T")[0]
  );

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
      <button> + create product</button>
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
          <TableBody>
            {products.map((product) => (
              <ProductRow {...product} />
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
    </div>
  );
};

export default ProductList;
