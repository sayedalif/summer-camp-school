import React from 'react';
import facebookLogo from '../../../assets/icons/facebook_logo.png';
import toast from 'react-hot-toast';


const FacebookLogin = () => {

  // TODO: implement facebook login
  const handleFacebookSignIn = () => {
    toast.error(`hasn't implemented yet`);
  }

  return (
    <button onClick={handleFacebookSignIn} className="flex items-center btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] lg:w-[457px] lg:h-[51px] md:w-[457px] md:h-[51px] sm:w-auto sm:h-auto">
      <img src={facebookLogo} alt="facebook logo" className='w-7 flex-none ml-2' />
      <span className='flex-auto font-[500]'>Continue with Facebook</span>
    </button>
  );
};

export default FacebookLogin;