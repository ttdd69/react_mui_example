import React, { createContext, useState, ReactNode } from 'react'

type SelectItem = {
    key: Number;
    value: string;
    content: string;
  }

interface SelectChoiceContextType {
  state: SelectItem;
  setState: React.Dispatch<React.SetStateAction<SelectItem>>;
}

// Create the context with a default value
const SelectChoiceContext = createContext<SelectChoiceContextType | undefined>(undefined);

// Create a provider component
const SelectChoiceContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initItem : SelectItem = {
    key: 0,
    value: '',
    content: 'Select an item above'
  }
  
  const [state, setState] = useState<SelectItem>(initItem);

  return (
    <SelectChoiceContext.Provider value={{ state, setState }}>
      {children}
    </SelectChoiceContext.Provider>
  )};

  export { SelectChoiceContext , SelectChoiceContextProvider}