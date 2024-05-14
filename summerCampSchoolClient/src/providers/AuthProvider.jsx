import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useSignOut, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';

// context
export const AuthContext = createContext(null);

// auth firebase
const auth = getAuth(app);

// auth provider
const AuthProvider = ({ children }) => {
  // axios public which has an instance setup
  const [axiosPublic] = useAxiosPublic();

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

  // password reset / forget password
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  // send email verification
  const [sendEmailVerification] = useSendEmailVerification(
    auth
  );

  // update users profile
  const [updateProfile] = useUpdateProfile(auth);

  // observer
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    axiosPublic.get(`/users/${user?.email}`).then(response => {
      console.log('existing user', response.data);

      if (!response.data) {
        const savedUser = { email: user.email, name: user.displayName, photoURL: user.photoURL };

        axiosPublic.post('/users', savedUser).then(res => {
          console.log('new user', res.data);
        }).catch(err => console.log(err));
      }
    });
  }

  // sending all data to context
  const authInfo =
  {
    user, loading, error, signInWithGoogle, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, updateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;