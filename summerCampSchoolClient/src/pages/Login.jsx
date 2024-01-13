import React, { useState } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                {/* show password */}
                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-10 cursor-pointer'>
                  {showPassword
                    ?
                    <IoIosEyeOff className='text-black' size={25}></IoIosEyeOff>
                    :
                    <IoIosEye className='text-slate-400' size={25}></IoIosEye>
                  }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#3B0200] text-white rounded-md px-6 py-2">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
      <div className="divider md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">OR</div>
      </div>

    </div>
  );
};

export default Login;