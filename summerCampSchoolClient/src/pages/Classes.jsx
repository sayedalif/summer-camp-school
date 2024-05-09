import ClassesCards from "../components/ClassesCards";
import useFetch from "../hooks/utils/utils";

const Classes = () => {
  const { data: classes = [], error, loading } = useFetch('/classes');
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {
        classes?.length > 0 && Array?.isArray(classes) &&
        classes?.map((eachClass) => {
          return <ClassesCards key={eachClass._id} eachClass={eachClass}></ClassesCards>
        })
      }
    </div>
  );
};

export default Classes;