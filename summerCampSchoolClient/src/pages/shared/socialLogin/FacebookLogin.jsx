import React from 'react';
import facebookLogo from '../../../assets/icons/facebook_logo.png';


const FacebookLogin = () => {

  // TODO: implement facebook login
  const handleFacebookSignIn = () => {
    // toast.error(`hasn't implemented yet`);
  }

  return (
    <button onClick={handleFacebookSignIn} className="flex pl-0 btn rounded-3xl bg-transparent hover:bg-[#4267B2] mb-[15px] w-[457px] h-[51px]">
      <img src={facebookLogo} alt="facebook logo" className='w-7 flex-none ml-2' />
      <span className='flex-auto font-[500]'>Continue with Facebook</span>
    </button>
  );
};

export default FacebookLogin;