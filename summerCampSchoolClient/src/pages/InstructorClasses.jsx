import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/utils/utils';
import toast from 'react-hot-toast';
import ClassesCards from '../components/ClassesCards';

const InstructorClasses = () => {
  const param = useParams();
  console.log("🚀 ~ InstructorClasses ~ param:", param);


  const { data: classes = [], error, loading } = useFetch(`/classes/${param?.id}`);

  console.log("🚀 ~ InstructorClasses ~ classes:", classes);

  if (classes?.length === 0) {
    toast.error('Invalid parameter returning you to instructor page');

    return <Navigate to={`/instructors`}></Navigate>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
      {classes?.length > 0 && Array?.isArray(classes) &&
        classes?.map((eachClass) => {
          return <ClassesCards key={eachClass._id} eachClass={eachClass}></ClassesCards>
        })}
    </div>
  );
};

export default InstructorClasses;