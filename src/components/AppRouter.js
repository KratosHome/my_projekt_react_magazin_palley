import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/HomePage/Main";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import CartPage from "../pages/CardPage/CardPage";

const AppRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact_ass" element={<ContactPage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};
export default AppRouters;
