import React, { useEffect } from 'react';
import useCart from '../../hooks/useCart';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import usePaymentClasses from '../../hooks/usePaymentClasses';

const EnrolledClasses = () => {

  const { paymentClass, isLoading, error, refetch } = usePaymentClasses();
  return (
    <div>
      {
        paymentClass?.map(classes => {
          console.log(classes);
          const {
            _id, video_link, video_length, students_enrolled, status, rating, price, instructor_name, instructor_id, description, class_thumbnail, className, category, available_seats
          } = classes;
          return (
            <div className="card card-side bg-base-100 shadow-xl mb-3" key={_id}>
              <figure>
                <img className='w-80' src={class_thumbnail} alt="Movie" />
              </figure>
              {/* <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div> */}
            </div>
          )
        })
      }
    </div>
  );
};

export default EnrolledClasses;