import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faIdBadge, faM, faMagnifyingGlass, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import axios, { all } from 'axios';


const PopularClasses = () => {
  const [axiosPublic] = useAxiosPublic();

  const [allClasses, setAllClasses] = useState('');
  console.log("🚀 ~ PopularClasses ~ allClasses:", allClasses);

  // const [showAllClasses, setShowAllClasses] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`popularClasses.json`);
      const data = await response.data;
      setAllClasses(data);
    }
    fetchData();
  }, []);


  const allPopularClasses = allClasses.length > 0 && Array.isArray(allClasses) && allClasses.filter(allClass => allClass.students_enrolled >= 1000);
  console.log("🚀 ~ PopularClasses ~ allPopularClasses:", allPopularClasses);

  return (
    <div>
      <h1 className='text-center my-8 text-[#000000] text-5xl font-bold'>Popular Courses</h1>

      {/* popular classes based on students */}

      {/* search bar */}
      <form className='flex justify-center'>
        <div className='relative flex items-center'>
          <input type="text" placeholder="Course name" className="py-8 input input-bordered input-md w-[300px] rounded-l-full placeholder:text-stone-700 border-none placeholder:font-bold focus:outline-none bg-[#F1F1F1] pl-9" />

          <span className='absolute left-3'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        <div className='relative flex items-center'>
          <input type="text" placeholder="Instructor" className="py-8 input input-bordered input-md w-[300px] rounded-r-full placeholder:text-stone-700 border-none placeholder:font-bold focus:outline-none bg-[#F1F1F1]" />

          <span className='absolute -left-1'>
            <FontAwesomeIcon icon={faUser} />
          </span>

          <button onClick={(e) => e.preventDefault()} type='submit' className="btn capitalize rounded-full absolute right-[10px] px-7 bg-[#000000] text-[#F0F0F1] hover:bg-black">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            search</button>
        </div>

      </form>

      <div className='flex justify-between space-x-4 flex-wrap space-y-4 my-8 mx-6'>
        {
          allClasses.length > 0 && Array.isArray(allClasses) &&
          allPopularClasses.map((eachClass, idx) => {
            return (
              <div key={idx} className='group cursor-pointer'>
                <div className="card w-96 h-96 bg-base-100 shadow-xl group-hover:bg-[#C3FFD2]">

                  <div className='flex justify-between items-start px-[32px] pt-[32px]'>
                    <figure>
                      <img className='w-[200px] rounded-full' src={eachClass.image} alt='instructor image' />
                    </figure>
                    <div className='text-right'>
                      <span className='badge badge-secondary text-end'>{eachClass.category}</span>
                      <span className="card-title">{eachClass.title}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className='font-medium text-base'>{eachClass.description}</p>
                    <div className='flex justify-between items-center'>
                      <span className='badge bg-[#E2F6FF] my-[16px]'>
                        <FontAwesomeIcon className='text-[#6FD1FF] pr-1' icon={faIdBadge} />
                        {eachClass?.instructor}</span>
                      <span className='badge bg-[#FDF7EF]'>
                        <FontAwesomeIcon className='text-[#FED477]' icon={faStar} />
                        {eachClass?.rating}</span>
                    </div>
                    <div className="card-actions flex justify-between items-center">
                      <span className='text-3xl font-bold'>${eachClass?.price}</span>
                      <button className="btn bg-[#FFFFFF] hover:bg-[#A3A3F5] group-hover:bg-[#A3A3F5] text-[#101218] rounded-full">Join Now
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='text-center my-4'>
        <button className="btn bg-[#000] hover:bg-[#000] text-[#FFFF] rounded-full capitalize">view all course
          <FontAwesomeIcon className='bg-[#fff] text-[#000] p-2 rounded-full' icon={faArrowRight} />
        </button>
      </div>

    </div>
  );
};

export default PopularClasses;