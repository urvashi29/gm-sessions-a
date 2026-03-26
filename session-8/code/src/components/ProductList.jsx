import React from "react";
import products from "../data/products";
import { useStore } from "../context/StoreProvider";

const ProductList = () => {
  const { addToCart } = useStore();

  return (
    <div>
      {products.length &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <p>
                {product.name} || {product.price}
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
