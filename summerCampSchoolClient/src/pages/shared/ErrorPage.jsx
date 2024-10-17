// import Lottie from "lottie-react";
// import errorAnimation from '../../assets/animation/robotError404.json';
import { Link, useRouteError } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import errorAnimation from '../../assets/animation/Animation - 1729008367365.lottie';

const ErrorPage = () => {
  const error = useRouteError();
  console.log("🚀 ~ ErrorPage ~ error:", error);

  return (
    <>
      <div className='flex flex-col items-center justify-center w-screen h-screen space-y-5'>
        <div className='max-w-[50%] max-h-[50%]'>
          {/* <Lottie animationData={errorAnimation} loop={true} /> */}
          <DotLottieReact
            src={errorAnimation}
            loop
            autoplay
          />
        </div>

        <div>
          <h1 className="text-center text-red-300 lg:text-xl md:text-xl sm:text-lg text-lg">{error.error.message || error.statusText || error.message}</h1>
        </div>
        <div className='text-center'>
          <Link to={`/`}><button className='btn lg:btn-md md:btn-md sm:btn-md btn-md bg-[#A3A3F5] hover:bg-[#A3A3F5] text-slate-50 capitalize'>back to home</button></Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;