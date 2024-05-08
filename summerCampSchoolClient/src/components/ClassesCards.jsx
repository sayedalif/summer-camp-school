import { generateRandomColorString } from "../hooks/utils/utils";
import { faArrowRight, faIdBadge, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClassesCards = ({ key, eachClass }) => {
  const randomBadgeColors = generateRandomColorString();
  return (
    <div key={key} className='group cursor-pointer'>
      <div className="card-container lg:w-[22rem] md:w-[20rem] sm:w-[20rem] w-[18rem] lg:h-[28rem] bg-base-100 shadow-xl group-hover:bg-[#C3FFD2] hover:scale-[1.03] transition duration-300 delay-150 hover:delay-300 mb-4 rounded-xl backface-hidden">

        <div className='flex flex-col justify-between h-full'>
          <div className='flex justify-between items-start px-4 py-4'>
            <figure>
              <img loading="lazy" className='md:w-[200px] w-48 md:rounded-md sm:rounded-sm rounded' src={eachClass?.class_thumbnail} alt='instructor image' />
            </figure>
            <div className='text-right'>
              <span style={{ backgroundColor: randomBadgeColors }} className={`badge text-end outline-none border-0`}>{eachClass?.category}</span>
              <span className="card-title text-base">{eachClass?.className}</span>
            </div>
          </div>
          <div className="card-body px-4 py-4">
            <p className='font-medium text-base'>{eachClass?.description}</p>
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
  );
};

export default ClassesCards;