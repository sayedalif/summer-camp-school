import { faArrowRight, faIdBadge, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentsReview = () => {
  const [allClasses, setAllClasses] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`popularClasses.json`);
      const data = await response.data;
      setAllClasses(data);
    }
    fetchData();
  }, []);


  const allPopularClasses = allClasses.length > 0 && Array.isArray(allClasses) && allClasses.filter(allClass => allClass.students_enrolled >= 1000);
  // console.log("🚀 ~ PopularClasses ~ allPopularClasses:", allPopularClasses);

  const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
  function generateRandomColorString() {
    const index = Math.floor(Math.random() * badges.length);

    const randomString = `${badges[index]}`;
    return randomString;
  }
  return (
    <div>
      <div className='text-center'>
        <h1 className='capitalize'>a skill-building journey with <br />ShutterCraft</h1>
        <p className='capitalize'>how ShutterCraft courses helped you master new skills and advance your career</p>
      </div>

      {/* cards */}
      <div className='my-8'>
        {/* loop here */}
        <div className='flex justify-between space-x-4 flex-wrap space-y-4 my-8 mx-8'>
          {
            allClasses.length > 0 && Array.isArray(allClasses) &&
            allPopularClasses.map((eachClass, idx) => {
              const randomBadgeColors = generateRandomColorString();
              return (
                <div key={idx} className='group cursor-pointer'>
                  <div className="card w-96 h-[28rem] bg-base-100 shadow-xl group-hover:bg-[#C3FFD2] hover:scale-[1.03] transition duration-300 delay-150 hover:delay-300">

                    <div className='flex px-[32px] pt-[32px]'>
                      <figure>
                        <img loading="lazy" className='w-[200px] clip-roundedImg' src={eachClass.image} alt='instructor image' />
                      </figure>
                      <div>
                        <span className='text-pretty card-title'>name</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>stars</p>
                      <p className='font-medium text-base'>description</p>
                      <div className='flex justify-between items-center'>
                        <span className='badge bg-[#E2F6FF] my-[16px]'>
                          <FontAwesomeIcon className='text-[#6FD1FF] pr-1' icon={faIdBadge} />
                          {eachClass?.instructor_name}</span>
                      </div>
                      <div className="">
                        <h1 style={{ backgroundColor: randomBadgeColors }} className='badge'>category</h1>
                        <h1 className='font-bold'>class name</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;