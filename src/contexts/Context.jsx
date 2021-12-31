import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [user, setUser] = useState(null);


  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        user,
        setUser
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
