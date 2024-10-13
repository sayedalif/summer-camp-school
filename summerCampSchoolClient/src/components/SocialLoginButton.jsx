import googleLogo from '../assets/icons/google_logo_icon.webp';
import facebookLogo from '../assets/icons/facebook_logo_icon.webp';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';

// checking usign the authType props to see what login media is user using.
const SocialLoginButton = ({ authType }) => {
  // hooks
  const [axiosPublic] = useAxiosPublic();

  // react router navigate
  // to navigate the user after login
  const navigate = useNavigate();

  // to get the user where they came from
  const location = useLocation();

  // getting the user previous route
  // so that we can drop off the user where they came from
  // or we can send them off if previous route state is not available
  let from = location.state?.from?.pathname || "/";
  // console.log("🚀 ~ Login ~ from:", from);

  // from: hook context
  const { signInWithGoogle } = useAuth();

  return (
    <button
      onClick={authType === 'google' ? () => {
        signInWithGoogle().then(result => {
          console.log(result);
          toast.success('Successfully logged in with Google');
          // ! phone number and photoURL send kora e hocche nah. google sign in somoy.
          const userInfo = {
            email: result?.user?.email,
            name: result?.user?.displayName,

            // sending phone number and photo url if they exist
            phoneNumber: result?.user?.phoneNumber,
            photoURL: result?.user?.photoURL,

            // sending null address
            address: null,
            role: 'student', // initial role will be student for everyone until admin changed their role.
          };
          console.log("🚀 ~ AuthProvider ~ userInfo:", userInfo);

          axiosPublic.post(`/users`, { userInfo }).then(response => {
            console.log(response);
          }).catch(err => {
            console.log(err);
          })

          // after succcufully login doping off the user where they came from or defaulting to home
          navigate(from, { replace: true });
        });
      } : () => toast.error(`hasn't implemented yet`)}
      className="flex items-center btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] lg:w-[457px] lg:h-[51px] md:w-[457px] md:h-[51px] sm:w-auto sm:h-auto"
    >
      <img src={authType === 'google' ? googleLogo : facebookLogo} alt={authType === 'google' ? 'google logo' : 'facebook logo'} className="w-7 flex-none ml-2" />
      <span className="flex-auto font-[500] ml-2">Continue with <span>
        {authType === 'google' ? 'Google' : 'Facebook'}
      </span>
      </span>
    </button>
  );
};

export default SocialLoginButton;