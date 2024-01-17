import React, { useState } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import FacebookLogin from './shared/socialLogin/FacebookLogin';
import GoogleLogin from './shared/socialLogin/GoogleLogin';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const { signInWithEmailAndPassword, sendPasswordResetEmail } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);


  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div> */}
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
                <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                {/* show password */}
                <span onClick={() => setShowPassword(!showPassword)} className='absolute md:top-44 right-10 cursor-pointer'>
                  {showPassword
                    ?
                    <IoIosEyeOff className='text-black' size={25}></IoIosEyeOff>
                    :
                    <IoIosEye className='text-slate-400' size={25}></IoIosEye>
                  }
                </span>
                <label className="label">
                  <span onClick={() => sendPasswordResetEmail(email)} className="label-text-alt link link-hover">Forgot password?</span>
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

              <p className='capitalize underline cursor-pointer md:mt-8 text-[#3B0200] text-lg'><Link to={`/register`}>create a new account!</Link></p>
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