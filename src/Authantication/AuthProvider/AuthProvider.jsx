/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };
  const googleSignup = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  const update = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const [loading, setloading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (User) => {
      setloading(false);
      if (User) {
        const data = {
          name: User.displayName,
          email: User.email,
          photo: User.photoURL,
        };
        axios.put(`https://testhalal-server.vercel.app/user/${User.email}`, data);
        setUser(User);
      }
    });
  }, []);

  const userInfo = {
    user,
    createUser,
    loading,
    logOut,
    login,
    googleSignup,
    update,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
