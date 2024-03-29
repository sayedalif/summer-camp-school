import React from 'react';
import lens from '../../../assets/images/lens.jpg';
import { IoIosCheckmarkCircle } from "react-icons/io";

const WhyLearnFromUs = () => {
  return (
    <div className='my-8 relative'>
      <img className='lg:w-[79rem] lg:mx-auto lg:h-auto rounded-lg' src={lens} alt="why section image" />

      <div className='lg:absolute md:absolute sm:absolute absolute lg:top-[30%] md:top-[25%] sm:top-[30%] top-[5%] text-[#FEFEFF] lg:left-16 md:left-10 sm:left-10 left-10 text-red-300'>
        <h1 className='lg:text-4xl md:text-2xl sm:text-2xl text-lg lg:mb-8 md:mb-3 sm:mb-2 mb-1 capitalize'>why learn from ShutterCraft</h1>
        <p className='lg:w-1/2 md:w-[65%] sm:w-1/2 w-[65%] lg:text-xl lg:mb-8 md:mb-3 sm:mb-8 mb-8'>Looking to expand your skill and explore your creativity in photography? our hands-on creative classes are the perfect way to learn at your own pace and discover your photography talents.</p>
        <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />expert instruction</p>
        <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />collaborative learning</p>
        <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />einnovative curriculum</p>
      </div>
    </div>
  );
};

export default WhyLearnFromUs;