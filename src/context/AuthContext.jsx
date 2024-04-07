import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [role, setRole] = useState(null);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ connected, setConnected, role, setRole, image, setImage, firstName, setFirstName, openLogin, setOpenLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
