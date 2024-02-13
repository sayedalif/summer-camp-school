import React from 'react';
import lens from '../../../assets/images/lens.jpg';
import { IoIosCheckmarkCircle } from "react-icons/io";

const WhyLearnFromUs = () => {
  return (
    <div className='my-8 relative'>
      <img className='w-[79rem] mx-auto h-auto rounded-lg' src={lens} alt="why section image" />

      <div className='absolute top-[30%] text-[#FEFEFF] left-16'>
        <h1 className='text-4xl mb-8'>why learn from ShutterCraft</h1>
        <p className='w-1/2 text-xl mb-8'>Looking to expand your skill and explore your creativity in photography? our hands-on creative classes are the perfect way to learn at your own pace and discover your photography talents.</p>
        <p className='capitalize flex items-center gap-2 mb-2'><IoIosCheckmarkCircle className='border rounded-full' size={24} />expert instruction</p>
        <p className='capitalize flex items-center gap-2 mb-2'><IoIosCheckmarkCircle className='border rounded-full' size={24} />collaborative learning</p>
        <p className='capitalize flex items-center gap-2 mb-2'><IoIosCheckmarkCircle className='border rounded-full' size={24} />einnovative curriculum</p>
      </div>
    </div>
  );
};

export default WhyLearnFromUs;