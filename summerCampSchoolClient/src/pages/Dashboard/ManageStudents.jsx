import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import useUserInfo from '../../hooks/useUserInfo';
import useManageUsers from '../../hooks/useManageUsers';

const ManageStudents = () => {
  const [axiosSecure] = useAxiosSecure();
  const { allUsers, isLoading, error: manageUserError, refetch } = useManageUsers();
  console.log("🚀 ~ ManageStudents ~ allUsers:", allUsers);


  const bannedClasses = allUsers?.banned_classes?.map(banned_class => banned_class);
  console.log("🚀 ~ PaymentHistory ~ bannedClasses:", bannedClasses);
  const { id } = useParams();
  // console.log("🚀 ~ ManageStudents ~ id:", id);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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

  // i need to remove the students from the class if they behave bad and admin want to remove them from the class.
  // only admin can do this.
  // when admin clicks on the remove button.
  // this will remove the user=student from that specific class and send them a warning message=feedback for why they are banned from that class.
  // now i need to figure out a way to remove that student also make the payment visiable on their payment page also.

  // thought process/plan
  // when admin clicks on the remove button, i will remove the classes_id from the payments collection of that specific user through their email.

  const handleBannedStudents = async (class_id, student_email) => {
    console.log(class_id, student_email);

    try {
      const response = await axiosSecure.patch(`/users?email=${student_email}`, { class_id });
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
                      <button onClick={() => handleBannedStudents(id, email)} className="badge badge-accent text-white btn-xs"
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