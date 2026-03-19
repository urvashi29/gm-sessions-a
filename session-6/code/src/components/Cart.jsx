import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, total) => {
    return sum + total.price;
  }, 0);

  return (
    <div style={{ flex: 1, borderLeft: "2px solid gray", padding: "10px" }}>
      <h2>Cart</h2>
      <p>Total: {total}</p>
      {cart.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Cart;
