import { useRef, useState } from 'react';
import useUserInfo from '../hooks/useUserInfo';
import { BiSolidQuoteRight } from "react-icons/bi";
import Container from '../components/Container';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';
import EditableAvatar from '../components/EditableAvatar';
import axios from 'axios';

const Profile = () => {
  const bioRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const genderRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState('');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [axiosPublic] = useAxiosPublic();

  const { data: user = [], error, isLoading, refetch } = useUserInfo();
  const { _id, email, following, name, photoURL } = user;
  // console.log("🚀 ~ Profile ~ name:", name);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }


  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET_KEY}`);

    try {
      setUploadStep('image');
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        }
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };

  const handleUserInfoUpdate = async () => {
    const bio = bioRef?.current?.value;
    // console.log("🚀 ~ handleUserInfoUpdate ~ bio:", bio)
    const name = nameRef?.current?.value;
    // console.log("🚀 ~ handleUserInfoUpdate ~ name:", name)
    const phone = phoneRef?.current?.value;
    // console.log("🚀 ~ handleUserInfoUpdate ~ phone:", phone)
    const address = addressRef?.current?.value;
    // console.log("🚀 ~ handleUserInfoUpdate ~ address:", address)
    const gender = genderRef?.current?.value;
    // console.log("🚀 ~ handleUserInfoUpdate ~ gender:", gender)

    // Check if we're only updating the image
    const isOnlyImageUpdate = selectedFile && !bio && !phone && (!address || user?.address) && !gender;
    // console.log("🚀 ~ handleUserInfoUpdate ~ isOnlyImageUpdate:", isOnlyImageUpdate);

    // Validate fields only if we're updating more than just the image
    if (!isOnlyImageUpdate && (bio && phone && address && gender)) {
      return toast.error('Please fill all the fields');
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      let imageUrl = photoURL; // Use existing photoURL by default
      // console.log("🚀 ~ handleUserInfoUpdate ~ imageUrl:", imageUrl);

      if (selectedFile) {
        // Upload image to Cloudinary if a new file was selected
        imageUrl = await uploadImageToCloudinary(selectedFile);
      }

      setUploadStep('info');
      setUploadProgress(0);

      const updatedUserData = {
        email,
        photoURL: imageUrl,
        ...(name && { name }),
        ...(bio && { bio }),
        ...(phone && { phone }),
        ...(address && { address }),
        ...(gender && { gender }),
      };
      // console.log("🚀 ~ handleUserInfoUpdate ~ updatedUserData:", updatedUserData);

      const response = await axiosPublic.post('/users/save-user-data',
        updatedUserData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        }
      );

      const data = await response.data;
      // console.log("🚀 ~ handleUserInfoUpdate ~ data:", data);
      toast.success('Profile updated successfully');
      setIsProfileUpdated(true); // Set this to true after successful update
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setUploadStep('');
      refetch();
    }
  };

  // handles image changes
  const handleImageChange = (file) => {
    setSelectedFile(file);
    setIsProfileUpdated(false); // Reset this when a new image is selected
  };

  const getButtonText = () => {
    if (!isUploading) return 'Save';
    if (uploadStep === 'image') return `Uploading Image... ${uploadProgress}%`;
    if (uploadStep === 'info') return `Saving Info... ${uploadProgress}%`;
    return 'Saving...';
  };

  const shouldShowSaveButton = () => {
    return !isProfileUpdated && (
      !user?.bio || !user?.address || !user?.phone || !user?.gender || selectedFile
    );
  };

  return (
    <Container>
      {/* user image and info sidebar */}
      <div className='bg-[#FFCFB3] xl:w-full h-full rounded-md'>
        <div className='text-center p-5 flex flex-col justify-center'>
          {/* user image container */}
          <EditableAvatar
            initialImageUrl={photoURL || ""}
            onImageChange={handleImageChange}
          />


          {/* name */}
          <h1 className='mb-1 text-2xl'>{name ? name : 'Name not added'}</h1>
          {/* role */}
          <h1 className='font-bold uppercase'>{user?.role ? user?.role : 'Student'}</h1>

          {/* about section */}
          <span className='flex flex-row space-x-1 justify-center mt-3'>
            <h1>{user?.bio}</h1>
            {
              user?.bio ? !user?.bio : <>
                <textarea ref={bioRef} className="textarea outline-0" placeholder="Bio"></textarea>
                <BiSolidQuoteRight />
              </>
            }
          </span>
        </div>

        {/* info's */}
        <div className='p-5 text-center md:max-w-[50%] mx-auto'>
          <div className='bg-[#FFF5CD] px-3 py-4 rounded'>
            <h1 className='mb-3'>{email}</h1>

            {
              !user?.name &&
              <p className='xl:flex xl:justify-between xl:flex-row lg:flex lg:justify-between lg:flex-row md:flex md:flex-row md:justify-between sm:flex sm:flex-col flex flex-col xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 mb-2'>
                <span>Name:</span>
                {/* <span>{user?.name}</span> */}
                {
                  user && !user?.name && <input ref={nameRef} type="text" placeholder="Type here" className="input-xs input-bordered rounded w-full max-w-xs" />
                }
              </p>
            }


            {/* phone number */}
            <p className='xl:flex xl:justify-between xl:flex-row lg:flex lg:justify-between lg:flex-row md:flex md:flex-row md:justify-between sm:flex sm:flex-col flex flex-col xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 mb-2'>
              <span>Phone:</span>
              <span>{user?.phone}</span>
              {
                user && !user?.phone && <input ref={phoneRef} type="number" placeholder="Type here" className="input-xs input-bordered rounded w-full max-w-xs" />
              }
            </p>

            {/* address */}
            <p className='xl:flex xl:justify-between xl:flex-row lg:flex lg:justify-between lg:flex-row md:flex md:flex-row md:justify-between sm:flex sm:flex-col flex flex-col xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 mb-2'>
              <span>Address:</span>
              <span>{user?.address}</span>
              {
                user && !user?.address && <input ref={addressRef} type="text" placeholder="Type here" className="input-xs input-bordered rounded w-full max-w-xs" />
              }
            </p>

            {/* gender */}
            <p className='flex justify-between mb-2 space-x-1'>
              <span>Gender:</span>
              <span>{user?.gender}</span>
              {
                user && !user?.gender && <select ref={genderRef} className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled selected>choose</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              }
            </p>
          </div>

          {shouldShowSaveButton() && (
            <button
              className={`btn mt-3 outline-none border-0 px-7 py-4 ${isUploading ? 'bg-blue-500' : 'bg-[#fca5a5]'}`}
              onClick={handleUserInfoUpdate}
              disabled={isUploading}
            >
              {getButtonText()}
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Profile;