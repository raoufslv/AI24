import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [role, setRole] = useState(null);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState(null);

  return (
    <AuthContext.Provider value={{ connected, setConnected, role, setRole, image, setImage, firstName, setFirstName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
