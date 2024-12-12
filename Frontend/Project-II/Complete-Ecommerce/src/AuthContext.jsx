// src/AuthContext.jsx
import React,  { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
const AuthContext = createContext();

// AuthProvider component provides the auth context to its children
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); // Use navigate here

    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard'); // Navigate after login
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/'); // Navigate after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to consume the AuthContext
export const useAuth = () => useContext(AuthContext);
