import React, { useState, createContext } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };