import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SocialLoginButton from '../components/SocialLoginButton';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../providers/AuthProvider';


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // password reset / forget password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  // console.log("🚀 ~ Login ~ sending:", sending);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">
          <div className="card shrink-0 w-full shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input onChange={(e) => setEmail(e?.target?.value)} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input onChange={(e) => setPassword(e?.target?.value)} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <span onClick={async () => {

                    const success = await sendPasswordResetEmail(email);

                    if (success) {
                      toast.success('Password reset sent successfully');
                    } else {
                      toast.error('Password reset failed');
                    }
                  }} className="label-text-alt link link-hover">Forgot password?</span>

                </label>
              </div>
              {
                error && <p className='text-red-500'>{error?.message}</p>
              }
              <div className="form-control mt-6">
                <button onClick={async (e) => {
                  e.preventDefault();
                  const success = await signInWithEmailAndPassword(email, password);
                  if (success) {
                    toast.success('Login successfully');
                    navigate(from, { replace: true });

                  }
                }
                } className={`bg-primary text-white rounded-md px-6 py-2 ${loading && 'cursor-progress bg-primary'}`} disabled={loading}>Login</button>
              </div>

              <p className='underline cursor-pointer md:mt-8 text-blue-400 text-lg'><Link to={`/register`}>new here? create a new <span className='uppercase'>account</span>!</Link></p>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="divider md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">OR</div>

      </div>
      <span className='flex flex-col items-center'>
        <SocialLoginButton authType={'google'}></SocialLoginButton>
        <SocialLoginButton></SocialLoginButton>
      </span>
    </div>
  );
};

export default Login;