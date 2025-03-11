import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth, db } from './firebase'; // Make sure db is exported from firebase.js
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 SIGN UP FUNCTION
  const handleSignup = async (email, password, name) => {
    setLoading(true);
    setError(null);
    try {
      // Create user account with email & password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase Auth profile with displayName
      await updateProfile(user, {
        displayName: name
      });

      console.log('Signup successful:', user);

      // Optional: Save extra user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp()
      });

      console.log('User data saved to Firestore');
    } catch (error) {
      console.error('Error during signup:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 LOGIN FUNCTION
  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 LOGOUT FUNCTION
  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 MONITOR USER STATE CHANGES
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log('User state changed:', user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        handleSignup,
        handleLogin,
        handleLogout,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
