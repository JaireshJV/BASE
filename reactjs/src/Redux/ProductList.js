import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const ProductList = () => {

    const dispatch = useDispatch()

  const products = [
    {
      id: "1",
      name: "Mob",
      price: "20000",
    },
    {
      id: "2",
      name: "Tab",
      price: "30000",
    },
    {
      id: "3",
      name: "Lap",
      price: "70000",
    },
  ];
  return (
    <div>
      <h1>ProductList</h1>
      {products?.map((pro) => (
        <div key={pro.id}>
          <Card>
            {pro.name}
            {pro.price}
            <button onClick={()=>dispatch(addToCart(pro))}>ADD TO CART</button>
            <button onClick={()=>dispatch(removeFromCart(pro))}>REMOVE FROM CART</button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
