import React from 'react';
import googleLogo from '../../../assets/icons/google.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const GoogleLogin = () => {
  const navigate = useNavigate();
  // from: hook context
  const { signInWithGoogle } = useAuth();

  return (
    <button onClick={async () => {
      const success = await signInWithGoogle();
      if (success) {
        navigate('/');
      }
    }} className="flex pl-0 btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] w-[457px] h-[51px]">
      <img src={googleLogo} alt="google logo" className='w-7 flex-none ml-2' />
      <span className='flex-auto font-[500]'>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;