import React, { createContext, useContext, useState } from 'react';

// Se crerea el contexto de autorización
const AuthorizationContext = createContext();

// Proveedor de autorización
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

// Hook personalizado para usar el contexto de autorización
export const useAuthorization = () => useContext(AuthorizationContext);
