import ProductsAdmin from "@/components/admin/ProductsAdmin";
import LogoutButton from "@/components/auth/Logout";
import React from "react";

const ProductsTable = () => {
  return (
    <>
      <ProductsAdmin />
      <LogoutButton />
    </>
  );
};

export default ProductsTable;
