import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


const PopularClasses = () => {
  return (
    <div>
      <h1 className='text-center my-8 text-[#000000] text-5xl font-bold'>Popular Courses</h1>

      {/* popular classes based on students */}

      {/* search bar */}
      <form className='flex justify-center'>
        <div className='relative flex items-center'>
          <input type="text" placeholder="Course name" className="py-8 input input-bordered input-md w-[200px] px-5 rounded-l-full placeholder:text-stone-700 border-none placeholder:font-bold focus:outline-none bg-[#F1F1F1] placeholder:pl-2" />

          <span className='absolute left-1'>
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

    </div>
  );
};

export default PopularClasses;