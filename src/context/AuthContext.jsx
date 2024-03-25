import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [role, setRole] = useState(null);

  return (
    <AuthContext.Provider value={{ connected, setConnected, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
