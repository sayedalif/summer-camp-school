import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const PopularInstructor = () => {

  // axios public hook
  const [axiosPublic] = useAxiosPublic();

  const [instructors, setInstructors] = useState('');
  console.log("🚀 ~ PopularInstructor ~ instructors:", instructors);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get('/users');
      const data = response.data;
      setInstructors(data);
    }
    fetchData();
  }, []);

  /*   const popularInstructor = instructor.length > 0 && Array.isArray(instructor) && instructor.filter(item => item.students_enrolled >= 1000).slice(0, 7);
    console.log("🚀 ~ popularInstructor ~ popularInstructor:", popularInstructor); */




  return (
    <div className='my-8'>
      <h1 className='text-4xl text-center'>Learn from Creative Experts</h1>
      <p className='mx-auto text-center w-[25%] my-4'>ShutterCraft classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>

      <div className='flex'>
        {
          instructors && instructors.length && Array.isArray(instructors) && instructors.map((instructor, idx) => {
            console.log("🚀 ~ popularInstructor&&popularInstructor.length&&Array.isArray ~ instructor:", instructor);

            return (
              <div key={idx} className="card w-1/2 relative">
                  <img className='rounded' src={instructor.instructor_image} alt="instructor_image" />
                <div className='absolute bottom-0 left-4'>
                  <h2 className="text-white">
                    {instructor.instructor_name}
                  </h2>
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