import React from "react";
import ProductList from "./pages/product_list";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./pages/product_detail";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
