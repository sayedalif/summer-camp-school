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

  // todo: fix the double user creation issue in the database
  if (user) {
    /* axiosPublic.get(`/users/${user?.email}`).then(response => {
      console.log('existing user', response.data);

      if (!response.data) {
        const savedUser = { email: user.email, name: user.displayName, photoURL: user.photoURL };

        axiosPublic.post('/users', savedUser).then(res => {
          console.log('new user', res.data);
        }).catch(err => console.log(err));
      }
    }); */
    
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