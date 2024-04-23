import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faIdBadge, faMagnifyingGlass, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import BwArrowButton from '../../components/BwArrowButton';
import UsePopularClasses from '../../hooks/UsePopularClasses';
import { generateRandomColorString } from '../../hooks/utils/utils';


const PopularClasses = () => {

  const { classes, isLoading } = UsePopularClasses();
  console.log("🚀 ~ PopularClasses ~ classes:", classes)

  const allPopularClasses = classes.length > 0 && Array.isArray(classes) && classes.filter(allClass => allClass.students_enrolled >= 400);


  return (
    <div className='lg:mt-16'>
      <h1 className='text-center md:my-8 text-[#000000] lg:text-6xl md:text-5xl font-bold text-2xl mb-7'>Popular Courses</h1>

      {/* popular classes based on students */}

      {/* search bar */}
      <form>
        <div>
            <div className="lg:flex md:flex sm:flex flex rounded-lg shadow-sm">
              <input type="text" className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
              <input type="text" className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
              <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Search</span>
            </div>
          </div>
      </form>

      <div className='lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap sm:flex sm:flex-wrap lg:my-8 lg:mx-4 mt-4 mb-4 flex flex-col items-center'>
        {classes.length > 0 && Array.isArray(classes) &&
          allPopularClasses.map((eachClass, idx) => {
            const randomBadgeColors = generateRandomColorString();
            return (
              <div key={idx} className='group cursor-pointer'>
                <div className="card-container lg:w-[22rem] md:w-[20rem] sm:w-[20rem] w-[18rem] lg:h-[28rem] bg-base-100 shadow-xl group-hover:bg-[#C3FFD2] hover:scale-[1.03] transition duration-300 delay-150 hover:delay-300 mb-4 rounded-xl
                backface-hidden">

                  <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between items-start px-4 py-4'>
                      <figure>
                        <img loading="lazy" className='md:w-[200px] w-48 md:rounded-md sm:rounded-sm rounded clip-roundedImg' src={eachClass.class_thumbnail} alt='instructor image' />
                      </figure>
                      <div className='text-right'>
                        <span style={{ backgroundColor: randomBadgeColors }} className={`badge text-end outline-none border-0`}>{eachClass.category}</span>
                        <span className="card-title text-base">{eachClass.className}</span>
                      </div>
                    </div>
                    <div className="card-body px-4 py-4">
                      <p className='font-medium text-base'>{eachClass.description}</p>
                      <div className='flex justify-between items-center'>
                        <span className='badge bg-[#E2F6FF] my-[16px]'>
                          <FontAwesomeIcon className='text-[#6FD1FF] pr-1' icon={faIdBadge} />
                          {eachClass?.instructor_name}</span>
                        <span className='badge bg-[#FDF7EF]'>
                          <FontAwesomeIcon className='text-[#FED477]' icon={faStar} />
                          {eachClass?.rating}</span>
                      </div>
                      <div className="card-actions flex justify-between items-center">
                        <span className='md:text-3xl text-2xl font-bold'>${eachClass?.price}</span>
                        <button className="btn bg-[#FFFFFF] hover:bg-[#A3A3F5] group-hover:bg-[#A3A3F5] text-[#101218] rounded-full px-2 lg:px-4">Join Now
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>


      <div className='text-center my-4'>
        <BwArrowButton text={'view all course'} to={'/'}></BwArrowButton>
      </div>

    </div>
  );
};

export default PopularClasses;