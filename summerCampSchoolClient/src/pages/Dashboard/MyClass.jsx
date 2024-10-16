import { useEffect, useState } from "react";
import ClassesCards from "../../components/ClassesCards";
import useUserInfo from "../../hooks/useUserInfo";
import useFetch from "../../hooks/utils/utils";
import useAxiosSecure from "../../hooks/UseAxiosSecure";

const MyClass = () => {
  const { data: userInfoData, error: userInfoError, isLoading, refetch } = useUserInfo();
  console.log("🚀 ~ MyClass ~ userInfoData:", userInfoData);

  /* const { data: classes = [], error, loading } = useFetch(`/classes/${userInfoData?._id}`);
  console.log("🚀 ~ MyClass ~ classes:", classes); */
  const [axiosSecure] = useAxiosSecure();

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await axiosSecure.get(`/classes/${userInfoData?._id}`);
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

export default MyClass;