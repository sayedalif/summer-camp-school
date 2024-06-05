import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useSignOut, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';

// context
export const AuthContext = createContext(null);

// auth firebase
export const auth = getAuth(app);
console.log("🚀 ~ auth:", auth);

// auth provider
const AuthProvider = ({ children }) => {
  // axios public which has an instance setup
  const [axiosPublic] = useAxiosPublic();

  // create user with email and password
  const [
    createUserWithEmailAndPassword,
  ] = useCreateUserWithEmailAndPassword(auth);


  // google pop up sign in
  const [signInWithGoogle,] = useSignInWithGoogle(auth);

  // logout
  const [signOut] = useSignOut(auth);

  // send email verification
  const [sendEmailVerification] = useSendEmailVerification(
    auth
  );

  // update users profile
  const [updateProfile] = useUpdateProfile(auth);

  // observer
  const [user, loading, error] = useAuthState(auth);
  console.log("🚀 ~ AuthProvider ~ user:", user);
  if (user) {
    if (user) {
      // get token and store client
      // const userInfo = { email: user?.email };
      axiosPublic.post('/jwt', { email: user?.email })
        .then(res => {
          if (res?.data?.token) {
            localStorage.setItem('access-token', res.data.token);
            // setLoading(false);
          }
        })
    }
    else {
      // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
      localStorage.removeItem('access-token');
    }
  }

  // sending all data to context
  const authInfo =
  {
    user, loading, error, signInWithGoogle, signOut, createUserWithEmailAndPassword, sendEmailVerification, updateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;