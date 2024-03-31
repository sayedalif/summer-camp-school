/* import React from 'react';
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

export default GoogleLogin; */

import React from 'react';
import googleLogo from '../../../assets/icons/google.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const GoogleLogin = () => {
  const navigate = useNavigate();
  // from: hook context
  const { signInWithGoogle } = useAuth();

  return (
    <button
      onClick={async () => {
        const success = await signInWithGoogle();
        if (success) {
          navigate('/');
        }
      }}
      className="flex items-center btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] lg:w-[457px] lg:h-[51px] md:w-[457px] md:h-[51px] sm:w-auto sm:h-auto"
    >
      <img src={googleLogo} alt="google logo" className="w-7 flex-none ml-2" />
      <span className="flex-auto font-[500] ml-2">Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
