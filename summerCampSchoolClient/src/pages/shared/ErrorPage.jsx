import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/animation/robotError404.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
    <div>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='w-2/5 h-2/5'>
          <Lottie animationData={errorAnimation} loop={true} />
        </div>
      
      </div>
      <div className='text-center mt-10'>
      <Link to={`/`}><button className='btn bg-[#A3A3F5] hover:bg-[#A3A3F5] text-slate-50 capitalize'>back to home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;