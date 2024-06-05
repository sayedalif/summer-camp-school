import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import SocialLoginButton from '../components/SocialLoginButton';
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../providers/AuthProvider';
import DragAndDrop from '../components/DragAndDrop';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Register = () => {
  // todo: fix the name and image update issue
  // todo: implement email verification but don't apply it until deployment because it's not required and the email im using are all fake.

  // hooks
  const [axiosPublic] = useAxiosPublic();

  // navigate
  // to navigate user after login
  const navigate = useNavigate();

  // hooks
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log('user', user);
  const [updateProfile, updating] = useUpdateProfile(auth);


  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // from submit
  const onSubmit = async (data) => {
    // console.log("🚀 ~ onSubmit ~ data:", data);

    const { name, email, password, confirmPassword, address, number } = data;
    console.log("🚀 ~ onSubmit ~ name:", name);

    console.log("🚀 ~ onSubmit ~ number:", number);

    console.log("🚀 ~ onSubmit ~ password:", password);
    console.log("🚀 ~ onSubmit ~ confirmPassword:", confirmPassword);

    if (password !== confirmPassword) {
      console.log('pass not match');
      return toast.error('Password not match please recheck');
    }

    try {
      const success = await createUserWithEmailAndPassword(email, password);
      if (success) {
        navigate('/');

        updateProfile({ displayName: name, photoURL: '' }).then(response => {
          toast.success('Successfully updated profile');

          // saving the user info to database
          const userInfo = {
            email: email,
            name: name,
          };
          console.log("🚀 ~ AuthProvider ~ userInfo:", userInfo);

          axiosPublic.post(`/users`, { userInfo }).then(response => {
            console.log(response);
          }).catch(err => {
            console.log(err);
          })
          console.log("🚀 ~ onSubmit ~ response:", response);
        }).catch(error => {
          console.log("🚀 ~ onSubmit ~ error:", error);
        })
        return toast.success('Successfully created account');
      }
      console.log('create user with email and password is offline now');

    } catch (error) {
      console.log(error);
    }
  };

  // console.log(errors);
  console.log('create user with email and password error', error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen bg-base-100">
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
                <input type="password" placeholder="password" className="input input-bordered"

                  {
                  ...register("password", { required: true, minLength: 8 }, { pattern: /^[A-Za-z-0-9]+$/i },

                  )
                  }
                />
              </div>

              {/* confirm password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" className="input input-bordered"

                  {
                  ...register("confirmPassword", { required: true, minLength: 8 }, { pattern: /^[A-Za-z-0-9]+$/i },

                  )
                  }

                />
              </div>

              {/* image drag and drop */}
              <span>Profile photo</span>
              <DragAndDrop></DragAndDrop>

              {/* Display dropped images */}
              {/* {droppedImages.length > 0 && (
                <div>
                  <h2>Profile image:</h2>
                  <ul>
                    {
                      droppedImages.map((file, index) => (
                        <div key={index}>
                          <img src={URL.createObjectURL(file)} alt={`Dropped Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px', borderRadius: '5px' }} />
                        </div>
                      ))
                    }
                  </ul>
                </div>
              )} */}

              {/* phone number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Phone Number <i className='text-gray-500'> - optional</i></span>
                </label>
                <input type="tel" placeholder="Phone number" className="input input-bordered"
                  {
                  ...register("number", { required: false, })
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
              {
                error && <div className='text-center text-red-500'>{error?.message}</div>
              }
              <div className="form-control mt-6">
                <button type='submit' className={`bg-accent text-white rounded-md px-6 py-2 ${loading && 'cursor-progress bg-accent'}`} disabled={loading}>Sign up</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="divider md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5">OR</div>

      </div>
      <span className='flex flex-col items-center'>
        {/* google */}
        <SocialLoginButton authType={'google'}></SocialLoginButton>
        {/* facebook */}
        <SocialLoginButton></SocialLoginButton>
      </span>
    </form>
  );
};

export default Register;