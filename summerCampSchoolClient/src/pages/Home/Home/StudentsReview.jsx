import { faArrowRight, faIdBadge, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Rating from 'react-rating';
import starYellow from '../../../assets/icons/star-yellow.png'
import starGrey from '../../../assets/icons/star-grey.png'


const StudentsReview = () => {
  const [axiosPublic] = useAxiosPublic();

  const [reviews, setReviews] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get(`/reviews`);
      const data = await response.data;
      setReviews(data);
    }
    fetchData();
  }, []);


  const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
  function generateRandomColorString() {
    const index = Math.floor(Math.random() * badges.length);

    const randomString = `${badges[index]}`;
    return randomString;
  }
  return (
    <div>
      <div className='text-center'>
        <h1 className='capitalize text-2xl'>a skill-building journey with <br />ShutterCraft</h1>
        <p className='capitalize'>how ShutterCraft courses helped you master new skills and advance your career</p>
      </div>

      {/* cards */}
      <div className='my-8'>
        {/* loop here */}
        <div className='flex justify-between space-x-4 flex-wrap space-y-4 mx-8'>
          {
            reviews.length > 0 && Array.isArray(reviews) &&
            reviews.map((review, idx) => {
              const randomBadgeColors = generateRandomColorString();
              return (
                <div key={idx} className='group cursor-pointer'>
                  <div className="card w-96 h-[28rem] bg-base-100 shadow-xl group-hover:bg-[#C3FFD2] hover:scale-[1.03] transition duration-300 delay-150 hover:delay-300">

                    <div className='flex p-[32px] items-center'>
                      <figure className='md:mr-3'>
                        <img loading="lazy" className='w-[50px] clip-roundedImg' src={review.image} alt='instructor image' />
                      </figure>
                      <div>
                        <span className='text-pretty card-title'>{review.name}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <Rating
                        className='w-1/2'
                        initialRating={review.stars}
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