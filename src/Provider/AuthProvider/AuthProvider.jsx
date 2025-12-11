import { useEffect, useState } from "react";
import AuthContext from "../AuthProvider/AuthContext.jsx";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.js";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authloading, setauthloading] = useState(true);

  //   sign in user with google login
  const provider = new GoogleAuthProvider();
  function googleSignIn() {
    setauthloading(true);
    return signInWithPopup(auth, provider);
  }

  //   sign out user
  function logOut() {
    setauthloading(true);
    signOut(auth);
  }

  // register new user
  function registerUser(email, password) {
    setauthloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    setauthloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // updating user profile

  function userProflieUpdate(profileData) {
    return updateProfile(auth.currentUser, profileData);
  }

  //   observing the user
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setauthloading(false);
    });
    return () => unmount();
  }, []);

  console.log(user);
  const sharedData = {
    user,
    setUser,
    googleSignIn,
    logOut,
    registerUser,
    logIn,
    userProflieUpdate,
    authloading,
    setauthloading,
  };
  return <AuthContext value={sharedData}>{children}</AuthContext>;
}
