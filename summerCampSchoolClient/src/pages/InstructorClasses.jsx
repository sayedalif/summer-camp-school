import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/utils/utils';
import toast from 'react-hot-toast';
import ClassesCards from '../components/ClassesCards';

const InstructorClasses = () => {
  const param = useParams();

  const { data: classes = [], error, loading } = useFetch(`/classes/${param?.id}`);

  if (classes?.length === 0) {
    toast.error('Invalid parameter returning you to instructor page');

    return <Navigate to={`/instructors`}></Navigate>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }

  const approvedClasses = classes?.filter(eachClass => eachClass?.status === 'approved');
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