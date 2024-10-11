import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
import ActiveLink from '../components/ActiveLink';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // // console.log("🚀 ~ Dashboard ~ isDrawerOpen:", isDrawerOpen);

  // user info from hook
  const { data: userInfo, error, isLoading, refetch } = useUserInfo();

  // 
  const { carts, error: cartsError, isLoading: cartsIsLoading, refetch: cartsRefetch, totalPrice } = useCart();

  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log("🚀 ~ Dashboard ~ isAdminLoading:", isAdminLoading);
  // console.log("🚀 ~ Dashboard ~ isAdmin:", isAdmin);

  return (
    <div>
      <div className="drawer lg:drawer-open z-40">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* this div is here to to keep the drawer center */}
          <div className='flex flex-col items-center justify-center' onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button xl:hidden lg:hidden z-50">{isDrawerOpen ? 'Close' : 'Open'} drawer</label>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-tr-md">
            {/* Sidebar content here */}
            {
              isAdmin && !isAdminLoading ?
                <>
                  {/* if admin is true then this is for the admin */}

                  <li className='md:py-4 text-2xl normal-case'>
                    <ActiveLink to={`/dashboard/manageclasses`}>
                      Manage Classes
                    </ActiveLink>
                  </li>
                  <li className='md:py-4 text-2xl normal-case'>
                    <ActiveLink to={`/dashboard/manageusers`}>
                      Manage Users
                    </ActiveLink>
                  </li>
                </>
                :
                userInfo?.role === 'instructor'
                  ?
                  <>
                    {/* this is for the instructors */}
                    <li className='md:py-4 text-2xl normal-case'>
                      <ActiveLink to={`/dashboard/addclass`}>
                        Add a class
                      </ActiveLink>
                    </li>
                    <li className='text-2xl normal-case'>
                      <ActiveLink to={`/dashboard/myclass`}>
                        My classes
                      </ActiveLink>
                    </li>
                  </>
                  :
                  <>
                    {/* this is for the students */}
                    <li className='md:my-2 text-2xl normal-case'>
                      <ActiveLink to={`/dashboard/enrolledclasses`}>
                        Enrolled classes
                      </ActiveLink>
                    </li>

                    <li className='md:my-2 text-2xl normal-case'>
                      <ActiveLink to={`/dashboard/selectedclasses`}>
                        Selected classes
                        <span className="badge badge-primary">
                          {
                            carts?.length
                          }
                        </span>
                      </ActiveLink>
                    </li>

                    <li className='md:my-2 text-2xl normal-case'>
                      <ActiveLink to={`/dashboard/paymentshistory`}>
                        All payments
                      </ActiveLink>
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