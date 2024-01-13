import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignOut } from 'react-firebase-hooks/auth';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

  // create user with email and password
  const [
    createUserWithEmailAndPassword,
  ] = useCreateUserWithEmailAndPassword(auth);

  // email password sign in
  const [
    signInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);


  // google pop up sign in
  const [signInWithGoogle,] = useSignInWithGoogle(auth);

  // logout
  const [signOut] = useSignOut(auth);

  // observer
  const [user, loading, error] = useAuthState(auth);
  console.log("🚀 ~ AuthProviders ~ loading:", loading);
  console.log("🚀 ~ AuthProviders ~ user:", user);
  console.log("🚀 ~ AuthProviders ~ error:", error);

  const authInfo =
  {
    user, loading, error, signInWithGoogle, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;