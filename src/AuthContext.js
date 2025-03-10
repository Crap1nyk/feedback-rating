import React, { createContext, useContext, useState } from 'react';
import { signup, login, logout } from './firebase'; // Import Firebase functions

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Handle user signup
  const handleSignup = async (email, password) => {
    try {
      const userCredential = await signup(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Signup error: ', error.message);
    }
  };

  // Handle user login
  const handleLogin = async (email, password) => {
    try {
      const userCredential = await login(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Login error: ', error.message);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Logout error: ', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleSignup, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
