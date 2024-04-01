import React, { useState } from 'react';
import FacebookLogin from './shared/socialLogin/FacebookLogin';
import GoogleLogin from './shared/socialLogin/GoogleLogin';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const { signInWithEmailAndPassword, sendPasswordResetEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);


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
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <span onClick={async () => {
                    const success = await sendPasswordResetEmail(email);
                    if (success) {
                      toast.success('Password reset sent successfully');
                    }
                  }} className="label-text-alt link link-hover">Forgot password?</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={async (e) => {
                  setLoading(true);
                  e.preventDefault();
                  const success = await signInWithEmailAndPassword(email, password);
                  if (success) {
                    navigate('/');
                    setLoading(false);
                  }
                }
                } className={`bg-[#3B0200] text-white rounded-md px-6 py-2 ${loading && 'cursor-progress bg-[#3b020085]'}`} disabled={loading}>Login</button>
              </div>

              <p className='underline cursor-pointer md:mt-8 text-[#3B0200] text-lg'><Link to={`/register`}>new here? create a new <span className='uppercase'>account</span>!</Link></p>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="divider md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">OR</div>

      </div>
      <span className='flex flex-col items-center'>
        <FacebookLogin></FacebookLogin>
        <GoogleLogin></GoogleLogin>
      </span>
    </div>
  );
};

export default Login;