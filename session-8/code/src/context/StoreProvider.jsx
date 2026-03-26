import React, { createContext, useContext, useState } from "react";
import { Children } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  };

  console.log(children);
  return (
    <StoreContext.Provider value={{ theme, cart, toggleTheme, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

//for consuming provide useContext
export const useStore = () => useContext(StoreContext);
