import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/UseAxiosSecure';

const ManageStudents = () => {
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();
  console.log("🚀 ~ ManageStudents ~ id:", id);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure(`/classes/${id}`);
        const data = await response?.data;
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, axiosSecure]);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className="overflow-x-auto">
      {
        data && Array.isArray(data) && data?.length > 0 ? <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Date(MM-DD-YYYY)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((student, idx) => {
                const {
                  email, transactionId, purchaseDate
                } = student;
                const date = new Date(purchaseDate).toLocaleDateString();
                return (
                  <tr key={idx}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {transactionId}
                    </td>
                    <td>
                      {date}
                    </td>
                    <th>
                      <button className="badge badge-accent text-white btn-xs"
                      >REMOVE</button>
                    </th>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
          :
          <p className='flex justify-center items-center h-screen text-xl'>No student are joined yet</p>
      }
    </div>
  );
};

export default ManageStudents;