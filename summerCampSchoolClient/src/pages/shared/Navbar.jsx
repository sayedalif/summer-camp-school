import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import DarkNLightModeToggle from "../../components/DarknLightModeToggle";

const Navbar = () => {
  const location = useLocation();
  // console.log("🚀 ~ Navbar ~ location:", location);
  const { user, signOut } = useAuth();

  const li = [
    'home',
    'courses',
    'instructors',
    'classes',
    'community',
    'dashboard',
    'about',
  ];

  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start justify-center">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="md:btn sm:btn-sm btn-xs bg-transparent lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            <Link to={`/`}><li className="font-semibold">Home</li></Link>
            <Link to={`/instructors`}><li className="font-semibold">Instructors</li></Link>
            <Link to={`/classes`}><li className="font-semibold">Classes</li></Link>
            <li>
              {
                user && <Link to={`/dashboard`}>Dashboard</Link>
              }
            </li>
          </ul>
        </div>
        {/* logo component */}
        <Logo color={'#323232'}></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-16 capitalize">
          {/* <Link className="font-semibold" to={`/`}>home</Link>
          <Link className="font-semibold" to={`/courses`}>courses</Link>
          <Link className="font-semibold" to={`/dashboard/myclasses`}>instructors</Link>
          <Link to={`/allclasses`}>classes</Link>
          <Link to={`/community`}>community</Link>
          {user && <Link to={`/dashboard`}>Dashboard</Link>}
          <Link to={`/about`}>about</Link> */}
          {
            li.map((item, idx) => {
              return <Link key={idx} className="font-semibold capitalize" to={`${item === 'home' ? '/' : `/${item}`}`}>{item}</Link>
            })
          }
        </ul>
      </div>
      <div className="navbar-end gap-3 flex flex-row justify-end items-center">
        <DarkNLightModeToggle></DarkNLightModeToggle>
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
            !user && <Link to={`/login`} className="bg-primary text-white rounded-3xl px-6 py-2">Sign in</Link>
        }

        {
          user &&
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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