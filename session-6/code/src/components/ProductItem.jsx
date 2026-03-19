import React from "react";

const ProductItem = ({ product, onAdd }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        {product.title} {product.price}
      </span>
      <button
        onClick={() => onAdd(product)}
        style={{ marginLeft: "10px", backgroundColor: "teal", color: "white" }}
      >
        Add
      </button>
    </div>
  );
};

export default ProductItem;
