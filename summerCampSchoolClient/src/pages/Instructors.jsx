import { useState } from 'react';
import useFetch from '../hooks/utils/utils';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useUserInfo from '../hooks/useUserInfo';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Instructors = () => {
  const [axiosPublic] = useAxiosPublic();
  
  const location = useLocation();
  const navigate = useNavigate();

  const [isFollowingLoading, setIsFollowingLoading] = useState(false);

  // getting the user data from the database
  const { data: user, error: userInfoError, isLoading, refetch } = useUserInfo();

  const userFollowing = user?.following;
  const userEmail = user?.email;


  // fetching data to get all the instructors
  const { data: instructors = [], error, loading } = useFetch('/instructors');

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }

  const handleFollow = async (instructorId) => {
    if (!user) {
      // toast.error('Please login to follow an instructor');
      // return <Navigate to="/login" state={{ from: location }} replace></Navigate>
      return navigate("/login", { state: { from: location } });
    }

    setIsFollowingLoading(true);
    try {
      const response = await axiosPublic.put(`/users/follow/${instructorId}`, { userEmail });
      const data = await response.data;
      toast.success(`${data?.message}`);
      setIsFollowingLoading(false);

      // updating the instructor data didn't work because the data is changing in the user collection database not in the instructor database.
      refetch();
      // console.log('Successfully followed instructor.');
    } catch (error) {
      console.error('Error following instructor:', error);
      setIsFollowingLoading(false);
    } finally {
      setIsFollowingLoading(false);
    }
  };

  const handleUnFollow = async (instructorId) => {
    setIsFollowingLoading(true);
    try {
      const response = await axiosPublic.patch(`/users/unfollow/${instructorId}`, { userEmail });
      const data = await response.data;
      toast.success(`${data?.message}`);
      setIsFollowingLoading(false);
      refetch();
      // console.log('Successfully unfollowed instructor.');
    } catch (error) {
      console.error('Error unfollowing instructor:', error);
      setIsFollowingLoading(false);
    } finally {
      setIsFollowingLoading(false);
    }
  }


  // todo: fix the follow button
  // these are the method i have tried
  // 1. i'm updating the instructors state as soon as the user clicks on the follow button
  // 2. try to change the button
  // 3. refetch the userfollowing data by creating a custom hook using tan stack query -- worked


  // see all the classes taken by the instructor
  const handleSeeClasses = async (instructorId) => {
    console.log("🚀 ~ handleSeeClasses ~ instructorId:", instructorId);

    const response = await axiosPublic.get(`/classes/${instructorId}`);
    const data = await response.data;
    console.log("🚀 ~ handleSeeClasses ~ data:", data);

  };

  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {
        instructors?.length > 0 && Array?.isArray(instructors) &&
        instructors?.map((instructor) => {
          const {
            _id, email, classes_names, image, name, total_classes } = instructor;
          return (
            <div key={_id} className='group cursor-pointer'>
              <div className="card-container lg:w-[22rem] md:w-[20rem] sm:w-[20rem] w-[18rem] lg:h-[28rem] bg-base-100 shadow-xl mb-4 rounded-xl">

                <div className='flex flex-col justify-between h-full'>
                  <div className='flex justify-between items-start px-4 py-4'>
                    {/* instructor image */}
                    <figure>
                      <img loading="lazy" className='md:w-[200px] w-48 md:rounded-md sm:rounded-sm rounded' src={image} alt='instructor image' />
                    </figure>
                    {/* follow and unfollow button */}
                    <div className='text-right'>
                      <button onClick={userFollowing?.includes(_id) ? () => handleUnFollow(_id) : () => handleFollow(_id)} className={`badge ${isFollowingLoading || userFollowing?.includes(_id) ? 'badge-ghost' : 'badge-info'} `}>{userFollowing?.includes(_id) ? 'following' : 'Follow'}</button>

                    </div>
                  </div>
                  {/* instructor info's */}
                  <div className="card-body px-4 py-4">
                    {/* name */}
                    <p>{name}</p>
                    {/* instructor taken classes */}
                    <p>Classes names: {classes_names.map((course, idx) => <span key={idx}>{course}</span>)}</p>
                    {/* instructor email */}
                    <p className='font-medium text-base'>
                      {email}
                    </p>
                    {/* instructor total classes */}
                    <div className='flex justify-between items-center'>
                      <span>total classes: {total_classes}</span>
                    </div>
                    {/* see all classes by specific instructor */}
                    <div className="card-actions flex justify-end">
                      <Link to={`/instructors/${_id}`}>
                        <button className="btn bg-[#FFFFFF] hover:bg-[#A3A3F5] group-hover:bg-[#A3A3F5] text-[#101218] rounded-full px-2 lg:px-4" onClick={() => handleSeeClasses(_id)}>See classes
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link>
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