import BwArrowButton from '../../components/BwArrowButton';
import useFetch from '../../hooks/utils/utils';
import ClassesCards from '../../components/ClassesCards';


const PopularClasses = () => {
  const { data: classes = [], loading, error } = useFetch('/popularclasses');

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }

  return (
    <div className='lg:mt-16'>
      <h1 className='text-center md:my-8 text-[#000000] lg:text-6xl md:text-5xl font-bold text-2xl mb-7'>Popular Courses</h1>

      {/* popular classes based on students */}

      {/* search bar */}
      <form>
        <div>
          <div className="lg:flex md:flex sm:flex flex rounded-lg shadow-sm">
            <input type="text" placeholder='instructor name' className="py-3 px-4 pe-11 block w-full border border-gray-400 border-r-4 border-0 outline-none shadow-sm -mt-px -ms-px sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-base-100 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            <input type="text" placeholder='course name' className="py-3 px-4 pe-11 block w-full border-none outline-none rounded-r-none shadow-sm -mt-px -ms-px sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-base-100 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            <span className="btn py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px rounded-r-md sm:w-auto sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-stone-400">Search</span>
          </div>
        </div>
      </form>

      <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
        {
          classes?.length > 0 && Array?.isArray(classes) ?
          classes?.map((eachClass) => {
              return <ClassesCards key={eachClass._id} eachClass={eachClass}></ClassesCards>
            }) : <div className='mx-auto'>
              <h1 className='text-xl'>No classes available</h1>
            </div>
        }
      </div>


      <div className='text-center my-4'>
        <BwArrowButton text={'view all course'} to={'/'}></BwArrowButton>
      </div>

    </div>
  );
};

export default PopularClasses;