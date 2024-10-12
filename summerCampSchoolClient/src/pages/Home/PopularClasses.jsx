import BwArrowButton from '../../components/BwArrowButton';
import useFetch from '../../hooks/utils/utils';
import ClassesCards from '../../components/ClassesCards';


const PopularClasses = () => {
  const { data: classes = [], loading, error } = useFetch('/popularclasses');
  console.log("🚀 ~ PopularClasses ~ classes:", classes);

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Instructor name"
              className="py-3 px-4 block w-full border border-gray-400 outline-none shadow-sm text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-base-100 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 rounded-md sm:rounded-r-md sm:rounded-l-lg sm:mr-2"
            />
            <input
              type="text"
              placeholder="Course name"
              className="mt-2 sm:mt-0 py-3 px-4 block w-full border border-gray-400 outline-none shadow-sm text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-base-100 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 rounded-md sm:rounded-l-md sm:rounded-r-lg sm:mx-2"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="mt-2 sm:mt-0 py-3 px-6 inline-flex justify-center items-center w-full sm:w-auto border border-gray-200 bg-black text-sm text-white font-semibold rounded-md sm:rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:bg-black dark:hover:bg-stone-500 dark:focus:ring-offset-gray-800 sm:ml-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
        {
          classes?.length > 0 && Array?.isArray(classes) ?
            classes?.map((eachClass) => {
              return <ClassesCards
                key={eachClass._id}
                eachClass={eachClass}
              ></ClassesCards>
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