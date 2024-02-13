import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {

  const [allClasses, setAllClasses] = useState('');
  console.log("🚀 ~ PopularInstructor ~ allClasses:", allClasses);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('popularClasses.json');
      const data = response.data;
      setAllClasses(data);
    }
    fetchData();
  }, []);

  const popularInstructor = allClasses.length > 0 && Array.isArray(allClasses) && allClasses.filter(item => item.students_enrolled >= 1000).slice(0, 7);
  console.log("🚀 ~ popularInstructor ~ popularInstructor:", popularInstructor);




  return (
    <div className='my-8'>
      <h1 className='text-4xl text-center'>Learn from Creative Experts</h1>
      <p className='mx-auto text-center w-[25%] my-4'>ShutterCraft classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>

      <div className='flex justify-between space-x-4 flex-wrap space-y-4 my-8 mx-8'>
        {
          popularInstructor && popularInstructor.length && Array.isArray(popularInstructor) && popularInstructor.map((instructor, idx) => {
            console.log("🚀 ~ popularInstructor&&popularInstructor.length&&Array.isArray ~ instructor:", instructor);

            return (
              <div key={idx} className="card w-96 bg-base-100 shadow-xl relative">
                <figure>
                  <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                </figure>
                <div className='absolute bottom-0 left-4'>
                  <h2 className="card-title">
                    {instructor.instructor_name}
                  </h2>
                  <h2>
                    category
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