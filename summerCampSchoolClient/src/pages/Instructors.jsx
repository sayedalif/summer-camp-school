import React from 'react';
import useFetch from '../hooks/utils/utils';
import useAuth from '../hooks/useAuth';

const Instructors = () => {
  // fetching data to get all the instructors
  const { data: instructors = [], error, loading } = useFetch('/instructors');
  const { data: users = [], error: userError, loading: userLoading } = useFetch('/users');
  console.log(users);
  const userFollowing = users?.map(user => user?.following);
  console.log("🚀 ~ Instructors ~ userFollowing:", userFollowing);


  const { user } = useAuth();
  console.log("🚀 ~ Instructors ~ user:", user);
  const userEmail = user?.email;


  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const handleFollow = async (instructorId) => {
    try {
      await fetch(`/users/follow/${instructorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });
      console.log('Successfully followed instructor.');
    } catch (error) {
      console.error('Error following instructor:', error);
    }
  };


  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {
        instructors?.length > 0 && Array?.isArray(instructors) &&
        instructors?.map((instructor) => {
          const {
            _id, email, instructor_id, role, classes_names, image, name, total_classes } = instructor;
          return (
            <div key={_id} className=' cursor-pointer'>
              <div className="card-container lg:w-[22rem] md:w-[20rem] sm:w-[20rem] w-[18rem] lg:h-[28rem] bg-base-100 shadow-xl mb-4 rounded-xl">

                <div className='flex flex-col justify-between h-full'>
                  <div className='flex justify-between items-start px-4 py-4'>
                    <figure>
                      <img loading="lazy" className='md:w-[200px] w-48 md:rounded-md sm:rounded-sm rounded' src={image} alt='instructor image' />
                    </figure>
                    <div className='text-right'>
                      <button onClick={() => handleFollow(_id)} className='badge badge-info'>follow</button>
                    </div>
                  </div>
                  <div className="card-body px-4 py-4">
                    <p>{name}</p>
                    <p>Classes names: {classes_names.map((course, idx) => <span key={idx}>{course}</span>)}</p>
                    <p className='font-medium text-base'>
                      {email}
                    </p>
                    <div className='flex justify-between items-center'>
                      <span>total classes: {total_classes}</span>
                    </div>
                    <div className="card-actions flex justify-end">
                      <button className="btn bg-[#FFFFFF] hover:bg-[#A3A3F5] group-hover:bg-[#A3A3F5] text-[#101218] rounded-full px-2 lg:px-4">See classes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Instructors;