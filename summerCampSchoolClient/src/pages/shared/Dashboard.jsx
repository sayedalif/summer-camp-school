import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* this div is here to to keep the drawer center */}
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className='md:py-4 text-2xl normal-case'><Link to={`/dashboard/addclass`}>Add a class</Link></li>
            <li className='text-2xl normal-case'><Link to={`/dashboard/myclasses`}>My classes</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;