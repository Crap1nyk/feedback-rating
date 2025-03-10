// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIXRqcBEauSiXqrQL-YM7aphZhDubgI7o",
  authDomain: "ey-demo-5563e.firebaseapp.com",
  projectId: "ey-demo-5563e",
  storageBucket: "ey-demo-5563e.appspot.com",
  messagingSenderId: "520683042818",
  appId: "1:520683042818:web:dea6215c9fef7bf3d80f1b",
  measurementId: "G-PRX9NW95GQ"
};

const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Function to create a new user (Signup)
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to log in an existing user
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to log out the current user
export const logout = () => {
  return signOut(auth);
};

// Export the auth instance for use in other parts of the app
export { auth };