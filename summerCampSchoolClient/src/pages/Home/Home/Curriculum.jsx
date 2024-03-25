import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BwArrowButton from '../../../components/BwArrowButton';
import ownPacePng from '../../../assets/illustrations/3d-business-young-man-standing-at-his-desk.png';
import passionPng from '../../../assets/illustrations/moji-hand-with-index-finger-and-thumb-crossed-1.png';

const Curriculum = () => {
  return (
    <div className='md:mx-8 md:my-16'>
      <div className='xl:flex lg:flex md:flex justify-between'>
        <div className='font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl mb-4'>
          <h1><span className='capitalize'>new skills</span> with ShutterCraft.</h1>
          <p><span className='capitalize'>a detailed look</span> at <span className='capitalize'>our curriculum</span></p>
        </div>

        <div>
          <p className='font-semibold lg:text-xl md:text-xl sm:text-lg text-lg mb-6'>with real world project to create and <br /> online classes that fit a busy schedule</p>
          <BwArrowButton text={'get started'} to={'/'}></BwArrowButton>
        </div>
      </div>

      {/* cards */}
      <div className='xl:flex lg:flex md:flex md:space-x-4 md:my-16 my-10 space-y-5 w-full flex flex-col items-center'>
        <div className="card md:w-[30rem] w-64 bg-[#AEE5FF] text-black">
          <div className="card-body">
            <img className='md:w-[80px] max-w-full w-3/4 mx-auto' src={ownPacePng} alt="own pace png" />
            <h2 className="card-title normal-case md:my-4 md:font-semibold md:text-xl text-center">Learn at your own pace with hands-on creative classes</h2>
            <p className='font-medium text-lg'>Looking to expand your skills and explore your creativity? our hands-on creative classes are the perfect way to learn at your own pace and discover new talents</p>
          </div>
        </div>

        <div className="card md:w-[30rem] w-64 bg-[#C3FFD2] text-black">
          <div className="card-body">
            <img className='md:w-[80px] max-w-full w-3/4 mx-auto' src={passionPng} alt="passion png" />
            <h2 className="card-title normal-case md:my-4 font-semibold text-xl">ShutterCraft teachers are every day creative & professional who want to share their passion</h2>
            <p className='font-medium text-lg'>At ShutterCraft, we believe that everyone has something to teach and share with the world. our teachers are not just experts in their field, they are also passionate about teaching and helping others discover their own creativity. they take the time to get to know their students and tailor their instruction to meet their individual needs and goals.</p>
          </div>
        </div>
      </div>

      <div className='md:flex md:space-x-8'>
        <h1 className='capitalize md:text-2xl md:font-semibold text-center font-semibold text-2xl mb-8'>our special<br />features  for you</h1>
        <div className='md:flex-grow md:space-x-32 md:text-center grid grid-cols-2'>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize mr-2 mb-4">get certificate</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">amazing instructor</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize mr-2">lifetime support</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">video lesson</button>
        </div>
      </div>
      <div className="divider text-black my-10"></div>
    </div>
  );
};

export default Curriculum;