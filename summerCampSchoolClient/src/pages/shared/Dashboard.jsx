import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useUserInfo from '../../hooks/useUserInfo';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // console.log("🚀 ~ Dashboard ~ isDrawerOpen:", isDrawerOpen);

  const { data: userInfo, error, isLoading, refetch } = useUserInfo();
  return (
    <div>
      <div className="drawer lg:drawer-open z-40">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* this div is here to to keep the drawer center */}
          <div className='flex flex-col items-center justify-center' onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button xl:hidden lg:hidden z-50">{isDrawerOpen ? 'Open' : 'Close'}drawer</label>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-tr-md">
            {/* Sidebar content here */}
            {
              userInfo?.role === 'instructor' ?
                <>
                  <li className='md:py-4 text-2xl normal-case'>
                    <Link to={`/dashboard/addclass`}>Add a class</Link>
                  </li>
                  <li className='text-2xl normal-case'><Link to={`/dashboard/myclass`}>My classes</Link></li>
                </>
                :
                <>
                  <li className='md:py-4 text-2xl normal-case'>
                    <Link to={`/dashboard/selectedclasses`}>Selected classes</Link>
                  </li>
                  <li className='md:py-4 text-2xl normal-case'>
                    <Link to={`/dashboard/enrolledclasses`}>Enrolled classes</Link>
                  </li>
                </>
            }
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;