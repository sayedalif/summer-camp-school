import React, { useEffect, useState } from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import useManageUsers from '../../hooks/useManageUsers';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  // const [allUsers, setAllUsers] = useState([]);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { allUsers, isLoading, error, refetch } = useManageUsers();

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure('/users');
        const data = await res?.data;
        setAllUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [axiosSecure]); */

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }

  // make instructor

  const handleMakeInstructor = async (email) => {
    console.log("🚀 ~ email:", email);

    try {
      const response = await axiosSecure.patch(`/users?email=${email}`, { role: 'instructor' });
      const data = await response?.data;
      if (data.acknowledged === true && data.modifiedCount > 0 && data.modifiedCount > 0) {
        refetch();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {
        allUsers && Array.isArray(allUsers) && allUsers?.length > 0 &&
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {
                allUsers?.map((user, idx) => {
                  const {
                    name,
                    email,
                    role
                  } = user;
                  return (
                    <tr key={user?._id}>
                      <th>{idx + 1}</th>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">{role}</div>
                          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                              role === 'instructor' && <li><a>{role === 'instructor' && 'admin'}</a></li>
                            }
                            {
                              role === 'student' && <li onClick={() => handleMakeInstructor(email)}><a>{role === 'student' && 'instructor'}</a></li>
                            }
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default ManageUsers;