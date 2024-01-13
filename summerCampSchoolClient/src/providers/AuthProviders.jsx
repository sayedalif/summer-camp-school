import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

  // google pop up sign in
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  // observer
  const [user, loading, error] = useAuthState(auth);

  const authInfo =
  {
    user, loading, error, signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;