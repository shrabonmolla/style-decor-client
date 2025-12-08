import { useEffect, useState } from "react";
import AuthContext from "../AuthProvider/AuthContext.jsx";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.js";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //   sign in user with google login
  const provider = new GoogleAuthProvider();
  function googleSignIn() {
    return signInWithPopup(auth, provider);
  }

  //   sign out user
  function logOut() {
    signOut(auth);
  }

  //   observing the user
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unmount();
  }, []);

  console.log(user);
  const sharedData = {
    user,
    setUser,
    googleSignIn,
    logOut,
  };
  return <AuthContext value={sharedData}>{children}</AuthContext>;
}
