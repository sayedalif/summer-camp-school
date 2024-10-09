import useAxiosSecure from '../../hooks/UseAxiosSecure';
import useManageUsers from '../../hooks/useManageUsers';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'


const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { allUsers, isLoading, error, refetch } = useManageUsers();

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }

  // this function makes an student to instructor.
  // patch is protected by JWT token and also in backend making sure the user is admin.

  const handleMakeInstructor = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change this user's role from student to instructor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make instructor!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the role change
        axiosSecure.patch(`/users?email=${email}`, { role: 'instructor' })
          .then(response => {
            const data = response.data;
            if (data.acknowledged === true && data.modifiedCount > 0) {
              Swal.fire({
                title: "Role Updated!",
                text: `${email} is now an instructor.`,
                icon: "success"
              });
              toast.success(`${email} role updated to instructor`);
              refetch();
            }
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Failed to update user role.",
              icon: "error"
            });
          });
      }
    });
  }
  // this function makes an instructor to admin.
  // patch is protected by JWT token and aslo in backend making sure the user is admin.
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change this user's role from instructor to admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the role change
        axiosSecure.patch(`/users?email=${email}`, { role: 'admin' })
          .then(response => {
            const data = response.data;
            if (data.acknowledged === true && data.modifiedCount > 0) {
              Swal.fire({
                title: "Role Updated!",
                text: `${email} is now an admin.`,
                icon: "success"
              });
              toast.success(`${email} role updated to admin`);
              refetch();
            }
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Failed to update user role.",
              icon: "error"
            });
          });
      }
    });
  };

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
                      <td>{name ? name : <span className='text-amber-300'>Anonymous⚠️</span>}</td>
                      <td>{email}</td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">{role}</div>
                          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                              role === 'instructor' && <li onClick={() => handleMakeAdmin(email)}><a>{role === 'instructor' && 'admin'}</a></li>
                            }
                            {
                              role === 'student' &&
                              <li onClick={() => handleMakeInstructor(email)}>
                                <a>
                                  {role === 'student' && 'instructor'}
                                </a>
                              </li>
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