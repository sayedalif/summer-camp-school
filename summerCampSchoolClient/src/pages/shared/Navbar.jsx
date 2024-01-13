import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  console.log("🚀 ~ Navbar ~ location:", location);
  const { user, signOut } = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost text-xl">ShutterCraft</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-16">
          <Link className="font-semibold" to={`/`}>Home</Link>
          <Link className="font-medium" to={`/instructors`}>Instructors</Link>
          <Link to={`/classes`}>Classes</Link>
          <Link to={`/dashboard`}>Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end">
        {/* {
          !user ?
            <Link to={`/login`} className="bg-[#3B0200] text-white rounded-3xl px-6 py-2">Sign in</Link>
            :
            location.pathname === '/login' ? '' : <Link to={`/login`} className="bg-[#3B0200] text-white rounded-3xl px-6 py-2">Sign in</Link>
        } */}

        {/* aie ta ami solve korsi navLink er technique ta use kore react router thake */}
        {
          location.pathname === '/login' ?
            ''
            :
            !user && <Link to={`/login`} className="bg-[#3B0200] text-white rounded-3xl px-6 py-2">Sign in</Link>
        }
        {
          user &&
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={async () => {
                const success = await signOut();
                if (success) {
                  console.log('successfully signed out');
                }
              }}><a>Logout</a></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;