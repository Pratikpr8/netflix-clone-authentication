import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import { auth } from "./Utils/firebase";
import ProtectedRoute from "./pages/ProtectedRoute";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const netflixAuthContext = React.createContext();

function App() {
  const [user, setUser] = useState("");
  const netflixAuthValue = {
    handleSignUp,
    handleSignIn,
    handleLogOut,
    user,
    handlePasswordReset,
  };

  function handleSignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleSignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLogOut() {
    return signOut(auth);
  }

  function handlePasswordReset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const listenUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      listenUser();
    };
  }, []);

  return (
    <>
      <netflixAuthContext.Provider value={netflixAuthValue}>
        <Routes>
          <Route path="/netflix-clone-authentication/" exact element={<SignIn />} />
          <Route path="/netflix-clone-authentication/sign-up" element={<SignUp />} />
          <Route path="/netflix-clone-authentication/reset-pswd" element={<ResetPassword />} />
          <Route
            path="/netflix-clone-authentication/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </netflixAuthContext.Provider>
    </>
  );
}

export default App;
