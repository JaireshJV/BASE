import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []) ;
  console.log(cartItems, "cartItems");

  return (
    <div>
      <h1>Cart</h1>
      {/* {cartItems.map((cart) => ( */}
      <div>
        {/* <Card>
                {cart.name}
                {cart.price} =====
                {cart.quantity} [Quantity]
            </Card> */}
        <table
          style={{
            borderCollapse: "collapse",
            padding: "10px",
            margin: "auto",
            gap: "20px",
          }}
        >
          <thead>
            <th style={{ padding: "10px" }}>SR NO</th>
            <th style={{ padding: "10px" }}>PRODUCT ID</th>
            <th style={{ padding: "10px" }}>PRODUCT NAME</th>
            <th style={{ padding: "10px" }}>PRICE PER UNIT</th>
            <th style={{ padding: "10px" }}>QUANTITY</th>
            <th style={{ padding: "10px" }}>AMOUNT</th>
          </thead>
          <tbody>
            {cartItems?.map((car,ind) => (
              <tr>
                <td>{ind+1}</td>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.price}</td>
                <td>{car.quantity}</td>
                <td>$ {car.price * car.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Cart;
