import React, { createContext, useState } from 'react';

const ElementContext2 = createContext();

const SearchProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const changeValue = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <ElementContext2.Provider value={{ value, changeValue }}>
      {children}
    </ElementContext2.Provider>
  );
};

export { ElementContext2, SearchProvider };