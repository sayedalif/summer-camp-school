import { useState } from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SelectedClasses = () => {
  // custom hooks

  // axios public is the less secure version, which has base url.
  const [axiosPublic] = useAxiosPublic();

  // for getting cart data
  const { carts, error, isLoading, refetch, totalPrice } = useCart();

  // this is for disabling the delete button when the delete api call is processing..
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteFromCart = async (id) => {
    setDeleteLoading(true);
    console.log("🚀 ~ handleDeleteFromCart ~ id:", id);

    try {
      const response = await axiosPublic.delete(`/carts/${id}`);
      const data = await response?.data;
      console.log("🚀 ~ handleDeleteFromCart ~ data:", data);
      if (data?.acknowledged === true && data?.deletedCount > 0) {
        toast.success('Deleted successfully');
        // refetching so that in ui data's will be updated
        refetch();
      }
    } catch (error) {
      console.error("🚀 ~ handleDeleteFromCart ~ error:", error);
    } finally {
      setDeleteLoading(false);
    }

  }

  return (
    <div>
      <div className="overflow-x-auto">
        {/* total items and price */}
        {
          carts && Array.isArray(carts) && carts?.length > 0 && <div className="flex items-center justify-evenly font-bold my-4">
            <h1>Total Items: {carts?.length}</h1>
            <h1>Total Price: ${totalPrice} USD</h1>
            <Link to={`/dashboard/payment`}>
              <button className="btn btn-sm btn-primary text-white px-5 uppercase">pay</button>
            </Link>
          </div>
        }
        {
          carts && Array.isArray(carts) && carts?.length > 0 ? <table className="table">
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
                  const {
                    _id,
                    email,
                    className,
                    class_thumbnail,
                    instructor_id,
                    class_id,
                    price,
                    available_seats,
                    students_enrolled
                  } = cart
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
                        <button onClick={
                          () => handleDeleteFromCart(_id)
                        } className="btn btn-ghost btn-xs"
                          disabled={deleteLoading}
                        >delete</button>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
            :
            <div className='flex justify-center items-center h-screen text-xl'>
              <p className='mr-1'>No selected classes found!!!</p>
              <Link to={`/classes`}>
                <button className='btn btn-primary btn-sm'>  Join now</button>
              </Link>
            </div>
        }
      </div>
    </div>
  );
};

export default SelectedClasses;