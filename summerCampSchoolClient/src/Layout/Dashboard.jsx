import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
import ActiveLink from '../components/ActiveLink';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // console.log("🚀 ~ Dashboard ~ isDrawerOpen:", isDrawerOpen);

  // user info from hook
  const { data: userInfo, error, isLoading, refetch } = useUserInfo();

  // 
  const { carts, error: cartsError, isLoading: cartsIsLoading, refetch: cartsRefetch, totalPrice } = useCart();

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
              userInfo?.role === 'instructor' ?
                <>
                  <ActiveLink to={`/dashboard/addclass`}>
                    <li className='md:py-4 text-2xl normal-case'>
                      Add a class
                    </li>
                  </ActiveLink>
                  <ActiveLink to={`/dashboard/myclass`}>
                    <li className='text-2xl normal-case'>My classes</li>
                  </ActiveLink>
                </>
                :
                <>
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