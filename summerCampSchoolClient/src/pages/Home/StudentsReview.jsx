import Rating from 'react-rating';
import starYellow from '../../assets/icons/star-yellow.png'
import starGrey from '../../assets/icons/star-grey.png'
import useStudentReview from '../../hooks/useStudentReview';


const StudentsReview = () => {
  const { reviews, isLoading } = useStudentReview();

  const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
  function generateRandomColorString() {
    const index = Math.floor(Math.random() * badges.length);

    const randomString = `${badges[index]}`;
    return randomString;
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
        <div className='lg:flex lg:flex-wrap lg:my-8 lg:mx-4 md:flex md:flex-wrap mt-4 mb-4'>
          {
            reviews.length > 0 && Array.isArray(reviews) &&
            reviews.map((review, idx) => {
              const randomBadgeColors = generateRandomColorString();
              return (
                <div key={idx} className='cursor-pointer'>
                  <div className="card lg:w-[22rem] lg:h-[20rem] lg:mr-4 md:w-[20rem] sm:w-[20rem] w-[18rem] bg-base-100 shadow-xl mb-4">

                    <div className='flex justify-between items-start lg:px-4 lg:py-4 md:px-3 md:py-3 px-4 py-4'>
                      <figure className='md:mr-3'>
                        {/* student image */}
                        <img loading="lazy"
                          className='w-full h-full lg:w-full lg:h-[5rem] md:w-[100px] md:h-[4rem] sm:w-[100px] sm:h-[4rem] rounded-md' src={review.image} alt='instructor image' />
                      </figure>
                      <div>
                        <span className='text-pretty card-title'>{review.name}</span>
                      </div>
                    </div>
                    <div className="card-body lg:px-4 lg:py-4 md:px-3 md:py-3 px-3 py-3">
                      <Rating
                        className='w-1/2'
                        initialRating={review.stars}
                        placeholderRating={review.stars}
                        readonly
                        emptySymbol={'../../../assets/icons/star-grey.png'}
                        fullSymbol={'../../../assets/icons/star-yellow.png'}
                      />
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