import googleLogo from '../assets/icons/google_logo_icon.webp';
import facebookLogo from '../assets/icons/facebook_logo_icon.webp';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const SocialLoginButton = ({ authType }) => {
  // react router navigate
  // to navigate the user after login
  const navigate = useNavigate();

  // from: hook context
  const { signInWithGoogle } = useAuth();

  return (
    <button
      onClick={authType === 'google' ? async () => {
        const success = await signInWithGoogle();
        if (success) {
          toast.success('Success logged in with Google');
          navigate('/');
        }
      } : () => toast.error(`hasn't implemented yet`)}
      className="flex items-center btn rounded-3xl bg-transparent hover:bg-[#4285F4] mb-[15px] lg:w-[457px] lg:h-[51px] md:w-[457px] md:h-[51px] sm:w-auto sm:h-auto"
    >
      <img src={authType === 'google' ? googleLogo : facebookLogo} alt={authType === 'google' ? 'google logo' : 'facebook logo'} className="w-7 flex-none ml-2" />
      <span className="flex-auto font-[500] ml-2">Continue with <span>{authType === 'google' ? 'Google' : 'Facebook'}</span></span>
    </button>
  );
};

export default SocialLoginButton;