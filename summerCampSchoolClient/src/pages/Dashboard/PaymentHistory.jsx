import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {

  const [axiosPublic] = useAxiosPublic();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);
  console.log("🚀 ~ PaymentHistory ~ payments:", payments);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosPublic(`/payments?email=${user?.email}`);
        const data = await response?.data;
        setPayments(data);
        console.log(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic, user]);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <div className="overflow-x-auto">
        {
          payments && Array.isArray(payments) && payments?.length > 0 ? <table className="table">
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
                <th>Date(DD-MM-YYYY)</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                payments?.map((payment) => {
                  {/* 
                  _id, email, transactionId, totalPrice, purchaseDate, className, class_thumbnail
    },
                   */}
                  const {
                    _id, email, transactionId, totalPrice, purchaseDate, className, class_thumbnail
                  } = payment;
                  const date = new Date(purchaseDate).toLocaleDateString();
                  return (
                    <tr key={_id}>
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
                        {date}
                      </td>
                      <td>
                        {transactionId}
                      </td>
                      <td>${totalPrice}</td>
                      <th>
                        <button className="badge badge-accent text-white btn-xs"
                        >Paid</button>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
            :
            <></>
        }
      </div>
    </div>
  );
};

export default PaymentHistory;