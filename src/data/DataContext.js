import React, { createContext, useContext, useState } from 'react';


// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  // Initialize your global state here
  const [data, setData] = useState({
    income : 10000,
    expense : 400
  }
  );

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a consumer hook
export const useData = () => useContext(DataContext);
