import { Rating, RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useFetch, { generateRandomColorString } from '../../hooks/utils/utils';


// Declare it outside your component so it doesn't get re-created
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const StudentsReview = () => {

  const { data: reviews = [], loading, error } = useFetch('/reviews');

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }


  return (
    <div className='mb-24'>
      <div className='text-center'>
        <h1 className='capitalize text-center md:my-8 mb-7 text-[#000000] lg:text-5xl md:text-5xl font-bold text-2xl'>a skill-building journey with <br />ShutterCraft</h1>
        <p className='capitalize lg:mx-auto md:mx-auto text-center my-4 sm:text-2xl text-xl'>how ShutterCraft courses helped you master new skills and advance your career</p>
      </div>

      {/* cards */}
      <div className='my-8'>
        {/* loop here */}
        <div className='lg:flex lg:flex-wrap lg:my-8 lg:mx-4 md:flex md:flex-row md:flex-wrap md:gap-3 flex flex-col items-center mt-4 mb-4'>
          {
            reviews?.length > 0 && Array?.isArray(reviews) &&
            reviews?.map((review, idx) => {
              {/* console.log(review); */ }
              const randomBadgeColors = generateRandomColorString();
              return (
                <div key={idx}>
                  <div className="card lg:w-[20rem] lg:h-[20rem] lg:mr-4 md:w-[20rem] sm:w-[20rem] w-[18rem] bg-base-100 shadow-xl mb-4">

                    <div className='flex justify-between items-start lg:px-4 lg:py-4 md:px-3 md:py-3 px-4 py-4'>
                      <figure className='md:mr-3'>
                        {/* student image */}
                        <img loading="lazy"
                          className='lg:w-full lg:h-[5rem] md:w-[100px] md:h-[4rem] sm:w-[100px] sm:h-[4rem] w-20 h-14 rounded-md' src={review.image} alt='students images' />
                      </figure>
                      {/* students names */}
                      <div>
                        <span className='text-pretty card-title'>{review.name}</span>
                      </div>
                    </div>
                    <div className="card-body lg:px-4 lg:py-4 md:px-3 md:py-3 px-3 py-3">
                      {/* rating from student */}
                      <div className='flex items-start justify-start w-1/3'>
                        <Rating
                          className='w-5 h-5'
                          style={{ maxWidth: 250 }} value={review.rating} readOnly={true} halfFillMode={true} itemStyles={myStyles} />
                      </div>
                      <p className='font-medium text-base'>{review.description}</p>
                      <div className="">
                        <h1 style={{ backgroundColor: randomBadgeColors }} className='badge'>{review?.category}</h1>
                        <h1 className='font-bold'>{review.className}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;