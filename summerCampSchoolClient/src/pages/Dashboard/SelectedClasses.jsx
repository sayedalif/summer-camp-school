import React from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
  const { carts, error, isLoading, refetch, totalPrice } = useCart();

  console.log("🚀 ~ EnrolledClasses ~ cart:", carts);

  return (
    <div>
      <div className="overflow-x-auto">
        {/* total items and price */}
        {
          carts?.length > 0 && <div className="flex items-center justify-evenly font-bold my-4">
            <h1>Total Items: {carts?.length}</h1>
            <h1>Total Price: ${totalPrice}</h1>
            <Link to={`/dashboard/payment`}>
              <button className="btn btn-sm btn-primary text-white px-5">pay</button>
            </Link>
          </div>
        }
        {
          carts?.length ? <table className="table">
            {/* head */}
            <thead>
              <tr>
                {
                  /* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */
                }
                <th>Class name</th>
                <th>Available student</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                carts?.map((cart) => {
                  const { email,
                    className,
                    class_thumbnail,
                    instructor_id,
                    class_id,
                    price,
                    available_seats,
                    students_enrolled } = cart
                  return (
                    <tr key={cart?._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={class_thumbnail} alt="class thumbnail" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{className}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{students_enrolled}</span> / <span>{available_seats}</span>
                      </td>
                      <td>$ {price}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">delete</button>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
            :
            <p className='flex justify-center items-center h-screen'>You haven't bought anything <Link to={`/classes`}><button>buy</button></Link> now</p>
        }
      </div>
    </div>
  );
};

export default SelectedClasses;