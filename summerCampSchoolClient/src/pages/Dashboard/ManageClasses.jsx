import React, { useEffect, useState } from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import ClassesCards from '../../components/ClassesCards';

const ManageClasses = () => {
  const { data: userInfoData, error: userInfoError, isLoading, refetch } = useUserInfo();

  const [axiosSecure] = useAxiosSecure();

  const [data, setData] = useState(null)
  console.log("🚀 ~ ManageClasses ~ data:", data);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await axiosSecure.get(`/classes`);
          setData(response.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [axiosSecure, userInfoData]);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }

  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {
        data?.length > 0 && Array?.isArray(data) ?
          data?.map((eachClass) => {
            return <ClassesCards key={eachClass._id} eachClass={eachClass} status={eachClass?.status} feedback={eachClass?.feedback}></ClassesCards>
          }) : <div className='mx-auto'>
            <h1 className='text-xl'>No classes available</h1>
          </div>
      }
    </div>
  );
};

export default ManageClasses;