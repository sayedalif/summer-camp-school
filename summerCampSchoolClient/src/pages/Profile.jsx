import React, { useState } from 'react';
import useUserInfo from '../hooks/useUserInfo';
import { BiSolidQuoteRight } from "react-icons/bi";
import { TbWriting } from "react-icons/tb";
import Container from '../components/Container';

const Profile = () => {
  // shows input box's
  const [isInputOpen, setIsInputOpen] = useState(false);

  const { data: user = [], error, isLoading, refetch } = useUserInfo();
  console.log("🚀 ~ Profile ~ user:", user);

  const { _id, email, following, name, photoURL } = user;

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }

  return (
    <Container>
      <div className='flex justify-between'>
        {/* user image and info sidebar */}
        <div className='bg-red-400 w-1/5 h-screen rounded-md'>
          <div className='text-center p-5'>
            {/* user image */}
            <img src={photoURL} className='rounded-full mx-auto mb-3' alt="user profile picture" />

            {/* name */}
            <h1 className='mb-1'>{name}</h1>
            <h1>{user?.role ? user?.role : 'Student'}</h1>
            <span className='flex flex-row space-x-1 justify-center mt-3'>
              <input className='bg-red-300 rounded outline-none input-xs w-20 placeholder:text-center placeholder:text-white' placeholder='about me' type="text" />
              <BiSolidQuoteRight />
            </span>
          </div>

          {/* info's */}
          <div className='bg-red-300 p-5 text-center'>
            <h1>Email: {email}</h1>
            <p className='flex justify-start space-x-2 mb-2'> <span>Phone Num:</span> <input className='bg-red-200 rounded outline-none input-xs w-24 placeholder:text-center placeholder:text-white' placeholder='Number' type="text" /></p>
            <p className='flex justify-center space-x-2 mb-2'><span>Address:</span> <input className='bg-red-200 rounded outline-none input-xs w-20 placeholder:text-center placeholder:text-white' placeholder='Address' type="text" /></p>
            <p className='flex justify-center space-x-2 mb-2'><span>Gender:</span> <input className='bg-red-200 rounded outline-none input-xs w-16 placeholder:text-center placeholder:text-white' placeholder='Gender' type="text" /></p>
          </div>
        </div>

        {/* boxs */}
        <div>
          <h1>Bio</h1>
          <input type="text" placeholder='write your bio here' />
        </div>

        {/* goals */}
        <div>
          <h1>Goals</h1>
          <input type="text" placeholder='write your goals here' />
        </div>

        {/* motivation */}
        <div>
          <h1>Motivation</h1>
          <input type="text" placeholder='write your motivation here' />
        </div>

        {/* frustration */}
        <div>
          <h1>Frustration</h1>
          <input type="text" placeholder='write your frustration here' />
        </div>
      </div>
    </Container>
  );
};

export default Profile;