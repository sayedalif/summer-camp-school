import React, { useState } from 'react';
import FacebookLogin from './shared/socialLogin/FacebookLogin';
import GoogleLogin from './shared/socialLogin/GoogleLogin';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../hooks/utils/utils';

const Register = () => {
  const navigate = useNavigate();
  const { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // image related

  const [imageUploadText, setImageUploadText] = useState('upload');
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  console.log("🚀 ~ Register ~ imageLoading:", imageLoading);

  const handleImageChange = (image) => {

    console.log("🚀 ~ handleImageChange ~ image:", image);
    // setting the image name to the ui
    setImageUploadText(image.name);

    // setting the image loading state to true
    // setImageLoading(true);

    setLoading(false);
    imageUpload(image).then(response => {
      console.log(response.data);
      setImageUrl(response.data.display_url);
    }).then(err => {
      console.log(err);
    })
  }

  const onSubmit = async data => {
    console.log(data);
    const { name, email, password, confirmPassword, address, phoneNumber } = data;

    console.log(['password fields'], password, confirmPassword);

    // setLoading(true);
    /* if (password === confirmPassword) {
      const success = await createUserWithEmailAndPassword(email, password);
      if (success) {

        // sendEmailVerification();
        updateProfile(name,);
        setLoading(false);
        navigate('/');
      }
    } */


  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">
          <div className="card shrink-0 w-full shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">name</span>
                </label>
                <input type="name" placeholder="name" className="input input-bordered"

                  {
                  ...register("name", { required: true, maxLength: 80 })
                  }

                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"

                  {
                  ...register("email", { required: true, maxLength: 80 })
                  }

                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered"

                  {
                  ...register("password", { required: true, minLength: 8 }, { pattern: /^[A-Za-z-0-9]+$/i },

                  )


                  }

                />
                {/* show password */}
                <span onClick={() => setShowPassword(!showPassword)} className='absolute md:top-44 right-10 cursor-pointer'>
                  {showPassword
                    ?
                    <IoIosEyeOff className='text-black' size={25}></IoIosEyeOff>
                    :
                    <IoIosEye className='text-slate-400' size={25}></IoIosEye>
                  }
                </span>
              </div>

              {/* confirm password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base">Confirm Password</span>
                </label>
                <input type={showConfirmPassword ? "text" : "password"} placeholder="confirm password" className="input input-bordered"

                  {
                  ...register("confirmPassword", { required: true })
                  }

                />

                {/* show password */}
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute md:top-12 right-2 cursor-pointer'>
                  {showConfirmPassword
                    ?
                    <IoIosEyeOff className='text-black' size={25}></IoIosEyeOff>
                    :
                    <IoIosEye className='text-slate-400' size={25}></IoIosEye>
                  }
                </span>
              </div>
              <label className='flex items-center gap-x-2'>
                <span className="label-text text-base">Add Photo:</span>
                <input
                  onChange={(e) => {
                    handleImageChange(e.target.files[0])
                    setImageLoading(true);
                  }}
                  className='text-sm cursor-pointer w-36 hidden'
                  type='file'
                  name='image'
                  id='image'
                  accept='image/*'
                  hidden
                />
                <div className='bg-[#A3A3F5] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#A3A3F5]'>
                  {imageLoading ? 'uploading...' : imageUploadText}
                </div>
              </label>

              {/* phone number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Phone Number <i className='text-gray-500'> - optional</i></span>
                </label>
                <input type="tel" placeholder="Phone number" className="input input-bordered"

                  {
                  ...register("phoneNumber", { required: false, })
                  }

                />
              </div>


              {/* address */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Address <i className='text-gray-500'> - optional</i></span>
                </label>
                <input type="text" placeholder="Address" className="input input-bordered"

                  {
                  ...register("address", { required: false, })
                  }

                />
              </div>

              <div className="form-control mt-6">
                <button type='submit' className={`bg-[#3B0200] text-white rounded-md px-6 py-2 ${loading && 'cursor-progress bg-[#3b020085]'}`} disabled={loading}>Sign up</button>
              </div>

            </div>
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
    </form>
  );
};

export default Register;