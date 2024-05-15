import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import SocialLoginButton from '../components/SocialLoginButton';
import toast from 'react-hot-toast';

const Register = () => {
  // navigate
  // to navigate user after login
  const navigate = useNavigate();

  // use auth hook
  const { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } = useAuth();

  // loading state

  const [loading, setLoading] = useState(false);

  // dropped images state
  const [droppedImages, setDroppedImages] = useState([]);
  console.log("🚀 ~ Register ~ droppedImages:", droppedImages);


  const { register, handleSubmit, formState: { errors } } = useForm();


  // from submit
  // react hook form
  const onSubmit = async data => {
    console.log("🚀 ~ onSubmit ~ data:", data);

    const { name, email, password, confirmPassword, address, phoneNumber } = data;

    if (password !== confirmPassword) {
      return toast.error('Password not match');
    } else {
      createUserWithEmailAndPassword(email, password).then(() => {
        updateProfile({
          displayName: name, photoURL: droppedImages[0]
        })
      });
    }

  };

  console.log(errors);


  // react-dropzone
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log("🚀 ~ onDrop ~ acceptedFiles:", acceptedFiles);
    // setting the drop image to use state function
    setDroppedImages(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: 'image/*' // Accepts all image MIME types
  });

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
                  ...register("confirmPassword", { required: true })
                  }

                />
              </div>

              {/* image drag and drop */}

              {droppedImages.length === 0 ?
                <div className='border-2 border-dashed border-[#A3A3F5] py-10 text-center h-full flex justify-center items-center rounded-md mt-2' {...getRootProps()}>
                  <input type="file" name="img" accept="image/*" {...getInputProps()} />
                  {isDragActive ?
                    <p>Drop the files here ...</p> :
                    <button className='btn btn-primary'>Drop your photo here, or click to select it</button>
                  }
                </div>
                :
                ''
              }

              {/* Display dropped images */}
              {droppedImages.length > 0 && (
                <div>
                  <h2>Profile image:</h2>
                  <ul>
                    {
                      droppedImages.map((file, index) => (
                        <div key={index}>
                          <img src={URL.createObjectURL(file)} alt={`Dropped Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
                        </div>

                      ))
                    }
                  </ul>
                </div>
              )}

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