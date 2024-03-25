import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import BwArrowButton from '../../../components/BwArrowButton';
import ownPacePng from '../../../assets/illustrations/3d-business-young-man-standing-at-his-desk.png';
import passionPng from '../../../assets/illustrations/moji-hand-with-index-finger-and-thumb-crossed-1.png';
import axios from 'axios';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Curriculum = () => {
  const [axiosPublic] = useAxiosPublic();

  const [curriculum, setCurriculum] = useState([]);
  console.log("🚀 ~ Curriculum ~ curriculum:", curriculum);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get('/curriculum');
      const data = await response.data;
      console.log("🚀 ~ fetchData ~ data:", data);

      setCurriculum(data);
    }
    fetchData();
  }, [axiosPublic]);
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
      <div className='xl:flex lg:flex lg:flex-row md:flex lg:justify-between md:space-x-4 md:my-16 my-10 space-y-5 lg:space-y-0 lg:w-full md:w-full sm:w-full flex flex-col items-center'>

        {
          curriculum.map((eachCurriculum, index) => {
            return (
              <div key={eachCurriculum._id} className={`card lg:w-[32rem] ${index === 1 ? 'lg:w-[42rem] bg-[#C3FFD2]' : ''} md:w-full sm:w-full w-full bg-[#AEE5FF] text-black`}>
                <div className="card-body sm:px-3 sm:py-3 px-3 py-3">
                  <img className='lg:w-48 md:w-52 sm:w-10 w-40 max-w-full mx-auto' src={eachCurriculum.img} alt="own pace png" />
                  <h2 className="card-title normal-case md:my-4 md:font-semibold md:text-xl text-center">Learn at your own pace with hands-on creative classes</h2>
                  <p className='font-medium text-lg'>Looking to expand your skills and explore your creativity? our hands-on creative classes are the perfect way to learn at your own pace and discover new talents</p>
                </div>
              </div>
            )
          })
        }
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