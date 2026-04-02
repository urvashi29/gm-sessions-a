import React, { useEffect } from "react";
import {
  fetchProducts,
  toggleWishlist,
} from "../actions/productActionCreators";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const { list, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <p>No Prodcuts yet!</p>;

  const productList = list.map((product) => {
    return (
      <div key={product.id}>
        <p>{product.title}</p>
        <span>{product.price}</span>
        <button onClick={() => dispatch(toggleWishlist(product.id))}>
          {product.liked ? "Added" : "Add to Wishlist"}
        </button>
      </div>
    );
  });

  return <>{productList}</>;
};

export default ProductList;
