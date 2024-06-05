import { useEffect, useState } from "react";
import ClassesCards from "../components/ClassesCards";
import useFetch from "../hooks/utils/utils";
import useAxiosSecure from "../hooks/UseAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Classes = () => {
  // const { data: classes = [], error, loading } = useFetch('/classes', 'private');
  // console.log("🚀 ~ Classes ~ classes:", classes);
  // const [axiosPublic] = useAxiosPublic();
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
          const response = await axiosSecure.get(`/classes`);
          const data = await response?.data;
          setData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [axiosSecure]);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }

  const approvedClasses = data?.filter(eachClass => eachClass?.status === 'approved');

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

export default Classes;