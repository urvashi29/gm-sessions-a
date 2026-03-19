import React, { Suspense, use, useCallback, useEffect, useState } from "react";
import { fetchProducts } from "./services/productServices";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import useDebounce from "./hooks/useDebounce";
const Cart = React.lazy(() => import("./components/Cart"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debounceSearchValue = useDebounce(search);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // useCallback(() => {
  // }, [])

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  }, []);

  const filterProducts = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(debounceSearchValue.toLowerCase());
  });

  if (loading) return <p>Loading Products....</p>;

  return (
    <>
      <div style={{ display: "flex", padding: "20px" }}>
        <div style={{ flex: 3 }}>
          <SearchBar value={search} onChange={setSearch} />
          <ProductList products={filterProducts} onAdd={addToCart} />
        </div>

        <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart cart={cart} />
        </Suspense>
      </div>
    </>
  );
};

export default App;
