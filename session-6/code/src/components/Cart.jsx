import React, { useMemo } from "react";

const Cart = ({ cart }) => {
  
  const total = useMemo(() => {
    return cart.reduce((sum, total) => {
      console.log("hello");
      return sum + total.price;
    }, 0);
  }, [cart]);

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
