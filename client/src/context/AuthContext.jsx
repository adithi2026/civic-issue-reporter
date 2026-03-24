import React, { createContext, useState, useContext } from "react";

// create context
const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};