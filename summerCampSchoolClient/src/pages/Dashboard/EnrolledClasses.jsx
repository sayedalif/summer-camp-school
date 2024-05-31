import React, { useEffect } from 'react';
import useCart from '../../hooks/useCart';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const EnrolledClasses = () => {
  // const { carts, error, isLoading, refetch, totalPrice } = useCart();
  const [axiosPublic] = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic.get(`/payments/classes?email=${user?.email}`).then(response => {

    console.log("🚀 ~ axiosPublic.get ~ response:", response.data);
    });
  }, []);
  return (
    <div>
      {/* {
          carts?.map(cart => {
            return (
              <div className="card card-side bg-base-100 shadow-xl" key={cart?._id}>
                <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            )
          })
        } */}
    </div>
  );
};

export default EnrolledClasses;