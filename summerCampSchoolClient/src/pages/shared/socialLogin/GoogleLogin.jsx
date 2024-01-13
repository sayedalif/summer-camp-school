import React from 'react';
import googleLogo from '../../../assets/icons/google.png';
import { useNavigate } from 'react-router-dom';


const GoogleLogin = () => {
  const navigate = useNavigate();
  // from: hook context
  // const { googleSignIn, setError } = useAuth();

  // google pop up sign in
  const handleGoogleSignIn = () => {
    /* googleSignIn()
      .then((result) => {
        toast.success('successfully signed in')
        navigate('/');
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      }); */
  }

  return (
    <button onClick={handleGoogleSignIn} className="flex pl-0 btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] w-[457px] h-[51px]">
      <img src={googleLogo} alt="google logo" className='w-7 flex-none ml-2' />
      <span className='flex-auto font-[500]'>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;