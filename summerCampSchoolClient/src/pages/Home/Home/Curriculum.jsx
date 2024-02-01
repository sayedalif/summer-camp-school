import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BwArrowButton from '../../../components/BwArrowButton';
import ownPacePng from '../../../assets/illustrations/3d-business-young-man-standing-at-his-desk.png';
import passionPng from '../../../assets/illustrations/moji-hand-with-index-finger-and-thumb-crossed-1.png';

const Curriculum = () => {
  return (
    <div className='mx-8 my-16'>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-semibold text-5xl'><span className='capitalize'>new skills</span> with ShutterCraft.</h1>
          <p className='font-semibold text-5xl'><span className='capitalize'>a detailed look</span> at <span className='capitalize'>our curriculum</span></p>
        </div>

        <div>
          <p className='font-semibold'>with real world project to create and <br /> online classes that fit a busy schedule</p>
          <BwArrowButton text={'get started'} to={'/'}></BwArrowButton>
        </div>
      </div>

      {/* cards */}
      <div className='flex space-x-4 my-16'>
        <div className="card w-[30rem] bg-[#AEE5FF] text-black  ">
          <div className="card-body">
            <img className='w-[80px]' src={ownPacePng} alt="own pace png" />
            <h2 className="card-title normal-case my-4 font-semibold text-xl">Learn at your own pace with hands-on creative classes</h2>
            <p className='font-medium text-lg'>Looking to expand your skills and explore your creativity? our hands-on creative classes are the perfect way to learn at your own pace and discover new talents</p>
          </div>
        </div>

        <div className="card w-96 flex-grow bg-[#C3FFD2] text-black  ">
          <div className="card-body">
            <img className='w-[80px]' src={passionPng} alt="passion png" />
            <h2 className="card-title normal-case my-4 font-semibold text-xl">ShutterCraft teachers are every day creative & professional who want to share their passion</h2>
            <p className='font-medium text-lg'>At ShutterCraft, we believe that everyone has something to teach and share with the world. our teachers are not just experts in their field, they are also passionate about teaching and helping others discover their own creativity. they take the time to get to know their students and tailor their instruction to meet their individual needs and goals.</p>
          </div>
        </div>
      </div>

      <div className='flex space-x-8'>
        <h1 className='capitalize text-2xl font-semibold'>our features <br /> special for you</h1>
        <div className='flex-grow space-x-32 text-center'>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">get certificate</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">amazing instructor</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">lifetime support</button>
          <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">video lesson</button>
        </div>
      </div>
      <div className="divider text-black my-10"></div> 
    </div>
  );
};

export default Curriculum;