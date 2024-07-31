import React, { createContext, useState } from 'react';

const ElementContext = createContext();

const ElementProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [identifier, setIdentifier] = useState(0);

  const changeValue = (newValue, newIdentifier) => {
    console.log(newValue);
    setValue(newValue);
    setIdentifier(newIdentifier);
  };

  return (
    <ElementContext.Provider value={{ value, changeValue, identifier }}>
      {children}
    </ElementContext.Provider>
  );
};

export { ElementContext, ElementProvider };