import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import useUserInfo from '../../hooks/useUserInfo';
import useManageUsers from '../../hooks/useManageUsers';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ManageStudents = () => {
  const { id } = useParams();
  console.log("🚀 ~ ManageStudents ~ id:", id);

  const [axiosSecure] = useAxiosSecure();
  const [axiosPublic] = useAxiosPublic();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bannedStudentsLoading, setBannedStudentsLoading] = useState(false);


  const { allUsers, isLoading, error: manageUserError, refetch } = useManageUsers();

  console.log("🚀 ~ ManageStudents ~ allUsers:", allUsers);


  // const bannedClasses = allUsers?.map(eachUser => eachUser).map((eachUser) => eachUser.banned_classes);
  // console.log("🚀 ~ ManageStudents ~ banned_classes:", bannedClasses);

  const bannedClassesSet = new Set(
    allUsers?.flatMap(user => user.banned_classes || [])
  );
  console.log("🚀 ~ ManageStudents ~ bannedClassesSet:", bannedClassesSet);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosSecure(`/studentsinfo/${id}`);
        const data = await response?.data;
        console.log("🚀 ~ fetchData ~ data:", data);

        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, axiosSecure]);

  if (isLoading || loading) {
    return <h1>Loading...</h1>
  }

  if (manageUserError || error) {
    return <h1>{error.message}</h1>
  }

  // i need to remove the students from the class if they behave bad and admin want to remove them from the class.
  // only admin can do this.
  // when admin clicks on the remove button.
  // this will remove the user=student from that specific class and send them a warning message=feedback for why they are banned from that class.
  // now i need to figure out a way to remove that student also make the payment visible on their payment page also.

  // thought process/plan
  // when admin clicks on the remove button, i will remove the classes_id from the payments collection of that specific user through their email.

  const handleBannedStudents = async (class_id, student_email) => {
    console.log(class_id, student_email);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Ban!"
    }).then((result) => {
      if (result.isConfirmed) {
        setBannedStudentsLoading(false);
        axiosSecure.patch(`/users?email=${student_email}`, { class_id }).then(response => console.log(response.data)).catch(error => {
          console.error(error);
          setBannedStudentsLoading(false);
        })
        Swal.fire({
          title: "banned!",
          text: `${student_email} has been Banned.`,
          icon: "success"
        });
      }
      setBannedStudentsLoading(false);
    });

    /* try {
      setBannedStudentsLoading(false);
      const response = await axiosSecure.patch(`/users?email=${student_email}`, { class_id });
      const data = await response.data;
      console.log(data);
    } catch (error) {
      setBannedStudentsLoading(false);
      console.log(error);
    } finally {
      setBannedStudentsLoading(false);
    } */
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
                  email, classes_id, transactionId, purchaseDate
                } = student;
                console.log("🚀 ~ data?.map ~ classes_id:", classes_id);

                const _id = classes_id.toString();
                console.log("🚀 ~ data?.map ~ _id:", _id);

                const date = new Date(purchaseDate).toLocaleDateString();
                const bannedFromClass = bannedClassesSet.has(_id);
                console.log("🚀 ~ data?.map ~ bannedFromClass:", bannedFromClass);
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
                      {
                        bannedFromClass ?
                          <button className="badge badge-error text-white btn-xs cursor-not-allowed"
                            disabled={bannedStudentsLoading || bannedFromClass}
                          >Banned</button>
                          :
                          <button onClick={() => handleBannedStudents(id, email)} className="badge badge-accent text-white btn-xs"
                            disabled={bannedStudentsLoading}
                          >REMOVE</button>
                      }
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