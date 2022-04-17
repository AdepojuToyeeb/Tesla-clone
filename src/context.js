import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [style, setStyle] = useState("wrap");

  const openBurger = () => {
    setMenuOpen(true);
    setStyle("second-wrap");
  };

  const closeBurger = () => {
    setMenuOpen(false);
    setStyle("wrap");
  };

  return (
    <AppContext.Provider
      value={{
        menuOpen,
        style,
        openBurger,
        closeBurger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
