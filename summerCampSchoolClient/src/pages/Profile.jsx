import { useRef, useState } from 'react';
import useUserInfo from '../hooks/useUserInfo';
import { BiSolidQuoteRight } from "react-icons/bi";
import Container from '../components/Container';
import { FaEdit } from "react-icons/fa";
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Profile = () => {
  const bioRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const genderRef = useRef(null);

  const [axiosPublic] = useAxiosPublic();

  const { data: user = [], error, isLoading, refetch } = useUserInfo();
  const { _id, email, following, name, photoURL } = user;

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }

  const handleUserInfoUpdate = async () => {
    console.log('got clicked in handleUserInfoUpdate');

    const bio = bioRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const address = addressRef?.current?.value;
    const gender = genderRef?.current?.value;

    console.log(bio, phone, address, gender);
    if (!bio || !phone || !address || !gender) {
      return toast.error('Please fill all the fields');
    }
    try {
      axiosPublic.post('/users/save-user-data', { email, bio, phone, address, gender }).then(res => {
        console.log(res.data);
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    } finally {
      refetch();
    }

  }

  return (
    <Container>
      {/* user image and info sidebar */}
      <div className='bg-red-400 xl:w-full h-full rounded-md'>
        <div className='text-center p-5'>
          {/* user image */}

          <img src={photoURL} className='rounded-full mx-auto mb-3' alt="user profile picture" />


          {/* name */}
          <h1 className='mb-1'>{name}</h1>
          {/* role */}
          <h1>{user?.role ? user?.role : 'Student'}</h1>

          {/* about section */}
          <span className='flex flex-row space-x-1 justify-center mt-3'>
            <h1>{user?.bio}</h1>
            {
              user?.bio ? !user?.bio : <>
                <textarea ref={bioRef} className="textarea outline-0" placeholder="Bio"></textarea>
                <BiSolidQuoteRight />
              </>
            }
          </span>
        </div>

        {/* info's */}
        <div className='p-5 text-center max-w-[50%] mx-auto'>
          <div className='bg-red-300 px-3 py-4 rounded'>
            <h1 className='mb-3'>{email}</h1>

            {/* phone number */}
            <p className='xl:flex xl:justify-between xl:flex-row lg:flex lg:justify-between lg:flex-row md:flex md:flex-row md:justify-between sm:flex sm:flex-col flex flex-col xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 mb-2'>
              <span>Phone:</span>
              <span>{user?.phone}</span>
              {
                user && !user?.phone && <input ref={phoneRef} type="number" placeholder="Type here" className="input-xs input-bordered rounded w-full max-w-xs" />
              }
            </p>

            {/* address */}
            <p className='xl:flex xl:justify-between xl:flex-row lg:flex lg:justify-between lg:flex-row md:flex md:flex-row md:justify-between sm:flex sm:flex-col flex flex-col xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 mb-2'>
              <span>Address:</span>
              <span>{user?.address}</span>
              {
                user && !user?.address && <input ref={addressRef} type="text" placeholder="Type here" className="input-xs input-bordered rounded w-full max-w-xs" />
              }
            </p>

            {/* gender */}
            <p className='flex justify-between mb-2 space-x-1'>
              <span>Gender:</span>
              <span>{user?.gender}</span>
              {
                user && !user?.gender && <select ref={genderRef} className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled selected>choose</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              }
            </p>
          </div>
          {
            user && !user?.bio && !user?.address && !user?.phone && !user?.gender && <button className='btn bg-[#fca5a5] mt-3 outline-none border-0'
              onClick={handleUserInfoUpdate}
            >save</button>
          }
        </div>
      </div>
    </Container>
  );
};

export default Profile;