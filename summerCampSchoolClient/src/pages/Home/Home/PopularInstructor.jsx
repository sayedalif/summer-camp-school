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

  return (
    <div className='my-8'>
      <h1 className='text-4xl text-center'>Learn from Creative Experts</h1>
      <p className='mx-auto text-center w-[25%] my-4'>ShutterCraft classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>

      <div className='flex justify-between space-x-3'>
        {
          instructors && instructors?.length && Array?.isArray(instructors) && instructors?.map((instructor) => {
            console.log("🚀 ~ popularInstructor&&popularInstructor.length&&Array.isArray ~ instructor:", instructor);
            const { classes_names, email, image, instructor_id, name, role, total_classes, _id } = instructor;

            return (
              <div key={_id} className="card w-1/2 relative">
                <img className='rounded' src={image} alt="instructor_image" />
                <div className='absolute bottom-0 left-4'>
                  <h2 className="text-white">
                    {name}
                  </h2>
                  <span>{classes_names?.map((classes_name,index)=>{
                    return(
                      <h2 key={index}>{classes_name}</h2>
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