import React, { useState, createContext } from "react";

export const globalContext = createContext();
export const ContextProvider = ({ children }) => {
  const [searchFilter, setsearchFilter] = useState("");
  const [cart, setcart] = useState([]);

  return (
    <globalContext.Provider
      value={{ searchFilter, setsearchFilter, cart, setcart }}
    >
      {children}
    </globalContext.Provider>
  );
};
