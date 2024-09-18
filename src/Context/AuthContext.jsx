import React, { createContext, useContext, useState } from 'react';


const AuthorizationContext = createContext();


export const AuthorizationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthorizationContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};


export const useAuthorization = () => useContext(AuthorizationContext);
