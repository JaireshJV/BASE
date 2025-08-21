import React, { Fragment } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export const CartByRedux = () => {
  return (
    <Fragment>
      <ProductList />
      <Cart />
    </Fragment>
  );
};
