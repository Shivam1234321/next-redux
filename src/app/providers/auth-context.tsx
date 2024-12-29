"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType= {
    isAuthenticated: boolean,
    login: () => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) =>{

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
  const context = useContext(AuthContext);
  if(!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
