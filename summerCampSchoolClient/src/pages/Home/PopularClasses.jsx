import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faIdBadge, faMagnifyingGlass, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import BwArrowButton from '../../components/BwArrowButton';
import UsePopularClasses from '../../hooks/UsePopularClasses';


const PopularClasses = () => {

  const { classes, isLoading } = UsePopularClasses();
  console.log("🚀 ~ PopularClasses ~ classes:", classes)

  const allPopularClasses = classes.length > 0 && Array.isArray(classes) && classes.filter(allClass => allClass.students_enrolled >= 400);

  const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
  function generateRandomColorString() {
    const index = Math.floor(Math.random() * badges.length);

    const randomString = `${badges[index]}`;
    return randomString;
  }


  return (
    <div className='lg:mt-16'>
      <h1 className='text-center md:my-8 text-[#000000] lg:text-6xl md:text-5xl font-bold text-2xl mb-7'>Popular Courses</h1>

      {/* popular classes based on students */}

      {/* search bar */}
      <form className='flex justify-center'>
        <div className='relative flex items-center'>
          <input type="text" placeholder="Course name" className="md:py-7 md:pl-7 input input-bordered md:input-md sm:input-sm lg:w-[27rem] md:w-80 w-[9rem] p-0 rounded-l-full placeholder:text-stone-700 border-none placeholder:font-bold focus:outline-none bg-[#F1F1F1]" />

          <span className='absolute md:left-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        <div className='relative flex items-center'>
          <input type="text" placeholder="Instructor" className="md:py-7 input input-bordered md:input-md sm:input-sm lg:w-[27rem] md:w-80 w-[9rem] rounded-r-full placeholder:text-stone-700 border-none placeholder:font-bold focus:outline-none bg-[#F1F1F1]" />

          <span className='absolute -left-1'>
            <FontAwesomeIcon icon={faUser} />
          </span>

          <button onClick={(e) => e.preventDefault()} type='submit' className="btn capitalize rounded-full absolute right-[10px] lg:px-7 md:px-7 bg-[#000000] text-[#F0F0F1] hover:bg-black">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            search</button>
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