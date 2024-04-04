import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const PopularInstructor = () => {

  // axios public hook
  const [axiosPublic] = useAxiosPublic();

  const [instructors, setInstructors] = useState('');
  // console.log("🚀 ~ PopularInstructor ~ instructors:", instructors);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get('/users');
      const data = response.data;
      setInstructors(data);
    }
    fetchData();
  }, []);

  return (
    <div className='my-24'>
      <h1 className='text-center md:my-8 text-[#000000] lg:text-5xl md:text-5xl font-bold text-2xl mb-7'>Learn from Creative Experts</h1>
      <p className='lg:mx-auto md:mx-auto text-center my-4 sm:text-2xl text-xl'>ShutterCraft classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>

      <div className='lg:flex md:flex lg:justify-between md:justify-evenly lg:flex-wrap md:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4'>
        {
          instructors && instructors?.length && Array?.isArray(instructors) && instructors?.map((instructor) => {
            {/* console.log("🚀 ~ popularInstructor&&popularInstructor.length&&Array.isArray ~ instructor:", instructor); */ }
            const { classes_names, email, image, instructor_id, name, role, total_classes, _id } = instructor;

            return (
              <div key={_id} className="card relative lg:mb-0 md:mb-3 sm:mb-3 mb-3">
                <img className='rounded lg:w-[380px]' src={image} alt="instructor_image" />
                <div className='absolute bottom-0 left-4'>
                  <h2 className="text-white text-lg font-bold">
                    {name}
                  </h2>
                  <span>{classes_names?.map((classes_name, index) => {
                    return (
                      <h2 className='text-pretty text-base font-light capitalize' key={index}>{classes_name}</h2>
                    )
                  })}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PopularInstructor;