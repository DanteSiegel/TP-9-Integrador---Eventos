// context/UserContext.js
"use client"; // Asegúrate de tener esto al principio
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Asegúrate de que esta función esté correctamente definida y exportada
export const useUser = () => {
  return useContext(UserContext);
};
