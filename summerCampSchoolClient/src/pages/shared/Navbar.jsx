import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import DarkNLightModeToggle from "../../components/DarknLightModeToggle";
import useUserInfo from "../../hooks/useUserInfo";


const DefaultAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="64" fill="#e0e0e0" />
    <circle cx="62" cy="40" r="24" fill="#bdbdbd" />
    <path d="M64 69c-24 0-40 16-40 36h80c0-20-16-36-40-36z" fill="#bdbdbd" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  console.log("🚀 ~ Navbar ~ user:", user);

  const { data: userInfo = [], error, isLoading, refetch } = useUserInfo();
  const { _id, email, following, name, photoURL } = userInfo;
  // console.log("🚀 ~ Profile ~ name:", name);

  const li = [
    'home',
    'instructors',
    'classes',
    'dashboard',
    'about',
  ];

  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start justify-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="md:btn sm:btn-sm btn-xs bg-transparent lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              li.map((item, idx) => {
                return <Link key={idx} className="font-semibold capitalize" to={`${item === 'home' ? '/' : `/${item}`}`}>{item}</Link>
              })
            }
          </ul>
        </div>
        {/* logo component */}
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-16 capitalize">
          {
            li.map((item, idx) => {
              return <Link key={idx} className="font-semibold capitalize" to={`${item === 'home' ? '/' : `/${item}`}`}>{item}</Link>
            })
          }
        </ul>
      </div>
      <div className="navbar-end gap-3 flex flex-row justify-end items-center">
        <DarkNLightModeToggle></DarkNLightModeToggle>
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
                {
                  user && userInfo && userInfo?.photoURL ? <img alt="user photo" src={photoURL} />
                    :
                    <DefaultAvatar />
                }
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li onClick={async () => {
                const success = await signOut();
                if (success) {
                  localStorage.removeItem('access-token');
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