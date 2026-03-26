import React, { useContext, useState } from "react";
import ProductList from "./components/ProductList";
import { useStore } from "./context/StoreProvider";
import Navbar from "./components/Navbar";

const App = () => {
  const { theme } = useStore();

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          padding: "20px",
        }}
      >
        <Navbar />
        <ProductList />
      </div>
    </>
  );
};

export default App;

// CSR
// Conditional rendering
// Debugging
// Context API
