import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUsername] = useState(null);

  const isLoggedIn = () => !!userName;

  const setLoginInfo = (userName) => {
    console.log({ userName });
    setUsername(userName);
  };

  return (
    <AuthContext.Provider value={{ userName, isLoggedIn, setLoginInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
