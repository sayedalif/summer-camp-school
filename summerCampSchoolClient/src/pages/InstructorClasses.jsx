import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/utils/utils';
import toast from 'react-hot-toast';
import ClassesCards from '../components/ClassesCards';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import { useEffect, useState } from 'react';

const InstructorClasses = () => {
  const param = useParams();
  console.log("🚀 ~ InstructorClasses ~ param:", param);

  // const { data: classes = [], error, loading } = useFetch(`/classes/${param?.id}`);

  const [axiosSecure] = useAxiosSecure();

  const [data, setData] = useState(null);
  console.log("🚀 ~ Classes ~ data:", data);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true);
          const response = await axiosSecure.get(`/classes/${param?.id}`);

          console.log("🚀 ~ response:", response);

          const data = await response?.data;
          setData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [axiosSecure, param]);


  if (data?.length === 0) {
    toast.error('No classes found or Invalid parameter, Returning you to instructor page.');

    return <Navigate to={`/instructors`}></Navigate>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }

  const approvedClasses = data?.filter(eachClass => eachClass?.status === 'approved');
  // console.log("🚀 ~ InstructorClasses ~ approvedClasses:", approvedClasses);

  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {
        approvedClasses?.length > 0 && Array?.isArray(approvedClasses) ?
          approvedClasses?.map((eachClass) => {
            return <ClassesCards key={eachClass._id} eachClass={eachClass}></ClassesCards>
          }) : <div className='mx-auto'>
            <h1 className='text-xl'>No classes available</h1>
          </div>
      }
    </div>
  );
};

export default InstructorClasses;