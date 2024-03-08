import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/animation/robotError404.json';

const ErrorPage = () => {

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='w-2/5 h-2/5'>
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
    </div>
  );
};

export default ErrorPage;