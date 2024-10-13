// import { useForm } from "react-hook-form";
// import DragAndDrop from "../../components/DragAndDrop";

// const AddClass = () => {

//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//   };

//   console.log(watch("className")); // watch input value by passing the name of it

//   return (
// react-hook-form
//     <form onSubmit={handleSubmit(onSubmit)}>

//       {/* grid grid-rows-7 grid-cols-2 gap-5 */}
//       <div className="mb-4 mx-3">

//         {/* class Name */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Class name</span>
//           </div>
//           <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("className", { required: true })}
//           />
//         </label>
//         {/* category */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Photography category</span>
//           </div>
//           <input type="text" placeholder="Category" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("category", { required: true })}
//           />
//         </label>
//         {/* price */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Price(USD)</span>
//           </div>
//           <input type="text" placeholder="USD" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("price", { required: true })}
//           />
//         </label>
//         {/* available seats */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Available seats</span>
//           </div>
//           <input type="text" placeholder="Seats" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("available_seats", { required: true })}
//           />
//         </label>
//         {/* video length */}
//         <label className="form-control col-span-2">
//           <div className="label">
//             <span className="label-text">Video length(IN HOURS)</span>
//           </div>
//           <input type="text" placeholder="hours" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered"
//             {...register("video_length", { required: true })}
//           />
//         </label>


//         <div className="lg:flex md:flex md:flex-row lg:justify-evenly md:justify-between sm:flex sm:flex-col sm:justify-center">
//           {/* upload video */}
//           <label className="form-control col-span-2">
//             <div className="label">
//               <span className="label-text">Upload video</span>
//             </div>
//             {/* upload to cloudinary using EditableAvatar */}

//           </label>

//           {/* upload class thumbnail */}
//           <label className="form-control col-span-2">
//             <div className="label">
//               <span className="label-text">Class thumbnail</span>
//             </div>
//             {/* upload to cloudinary using EditableAvatar */}

//           </label>
//         </div>

//         {/* description */}
//         <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
//           <div className="label">
//             <span className="label-text">Description</span>
//           </div>
//           <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Description" {...register("description", { required: true })} />
//         </label>

//       </div>

//       <div className="text-center mb-3">
//         <input className="btn btn-primary w-1/2 text-white" type="submit" />
//       </div>
//     </form>
//   );
// };

// export default AddClass;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import EditableAvatar from "../../components/EditableAvatar";
// import uploadImagePlaceholder from '../../assets/images/png/picture.png';
// import uploadVideoPlaceholder from '../../assets/images/png/video-chat.png';

// const AddClass = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const [videoFile, setVideoFile] = useState(null);
//   const [thumbnailFile, setThumbnailFile] = useState(null);

//   const onSubmit = async (data) => {
//     // Here you would typically upload the files to Cloudinary
//     // and get back the URLs to store in your database
//     console.log("Form data:", data);
//     console.log("Video file:", videoFile);
//     console.log("Thumbnail file:", thumbnailFile);

//     // Example of how you might upload to Cloudinary (pseudo-code)
//     // const videoUrl = await uploadToCloudinary(videoFile);
//     // const thumbnailUrl = await uploadToCloudinary(thumbnailFile);

//     // Then you would submit all data including the URLs to your backend
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* grid grid-rows-7 grid-cols-2 gap-5 */}
//       <div className="mb-4 mx-3">

//         {/* class Name */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Class name</span>
//           </div>
//           <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("className", { required: true })}
//           />
//         </label>
//         {/* category */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Photography category</span>
//           </div>
//           <input type="text" placeholder="Category" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("category", { required: true })}
//           />
//         </label>
//         {/* price */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Price(USD)</span>
//           </div>
//           <input type="text" placeholder="USD" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("price", { required: true })}
//           />
//         </label>
//         {/* available seats */}
//         <label className="form-control">
//           <div className="label">
//             <span className="label-text">Available seats</span>
//           </div>
//           <input type="text" placeholder="Seats" className="input md:input-md sm:input-sm input-sm input-bordered"
//             {...register("available_seats", { required: true })}
//           />
//         </label>
//         {/* video length */}
//         <label className="form-control col-span-2">
//           <div className="label">
//             <span className="label-text">Video length(IN HOURS)</span>
//           </div>
//           <input type="text" placeholder="hours" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered"
//             {...register("video_length", { required: true })}
//           />
//         </label>


//         <div className="lg:flex md:flex md:flex-row lg:justify-evenly md:justify-between sm:flex sm:flex-col sm:justify-center">
//           {/* upload video */}
//           <EditableAvatar
//             initialImageUrl=""
//             onImageChange={setVideoFile}
//             size={150}
//             label="Upload Video"
//             // placeholder="../../assets/images/png/video-chat.png"
//             placeholder={uploadVideoPlaceholder}
//           />

//           {/* icon attribute */}
//           {
//             /* 
//             <a href="https://www.flaticon.com/free-icons/video-camera" title="video camera icons">Video camera icons created by Freepik - Flaticon</a>
//              */
//           }

//           {/* upload class thumbnail */}
//           <EditableAvatar
//             initialImageUrl=""
//             onImageChange={setThumbnailFile}
//             size={150}
//             label="Class Thumbnail"
//             // placeholder="../../assets/images/png/picture.png"
//             placeholder={uploadImagePlaceholder}
//           />
//           {/* icon attribute */}
//           {
//             /*
//             <a href="https://www.flaticon.com/free-icons/image-comics" title="Image Comics icons">Image Comics icons created by Pop Vectors - Flaticon</a>
//             */
//           }
//         </div>

//         {/* description */}
//         <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
//           <div className="label">
//             <span className="label-text">Description</span>
//           </div>
//           <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Description" {...register("description", { required: true })} />
//         </label>

//       </div>


//       <div className="text-center mb-3">
//         <input className="btn btn-primary w-1/2 text-white" type="submit" />
//       </div>
//     </form >
//   );
// };

// export default AddClass;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EditableAvatar from "../../components/EditableAvatar";
import uploadImagePlaceholder from '../../assets/images/png/picture.png';
import uploadVideoPlaceholder from '../../assets/images/png/video-chat.png';
import axios from 'axios';
import useAxiosSecure from "../../hooks/UseAxiosSecure";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadToCloudinary = async (file, resourceType) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET_KEY}`);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progress);
          },
        }
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Upload thumbnail
      const thumbnailUrl = await uploadToCloudinary(thumbnailFile, 'image');
      setUploadProgress(33);

      // Upload video
      const videoUrl = await uploadToCloudinary(videoFile, 'video');
      setUploadProgress(66);

      // Prepare data for database
      const classData = {
        ...data,
        thumbnailUrl,
        videoUrl,
      };

      // Send data to your backend
      const response = await axiosSecure.post('/classes', classData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(66 + (progress / 3)); // Scale to remaining 33%
        },
      });

      console.log('Class added successfully:', response.data);
      setUploadProgress(100);
    } catch (error) {
      console.error('Error adding class:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 mx-3 space-y-4">
        <label className="form-control">
          <span className="label-text">Class name</span>
          <input type="text" placeholder="Class name" className="input input-bordered"
            {...register("className", { required: true })}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Photography category</span>
          <input type="text" placeholder="Category" className="input input-bordered"
            {...register("category", { required: true })}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Price (USD)</span>
          <input type="number" placeholder="USD" className="input input-bordered"
            {...register("price", { required: true, min: 0 })}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Available seats</span>
          <input type="number" placeholder="Seats" className="input input-bordered"
            {...register("available_seats", { required: true, min: 1 })}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Video length (in hours)</span>
          <input type="number" placeholder="Hours" className="input input-bordered"
            {...register("video_length", { required: true, min: 0 })}
          />
        </label>

        <div className="flex justify-between">
          <EditableAvatar
            initialFileUrl=""
            onFileChange={setVideoFile}
            size={150}
            label="Upload Video"
            placeholder={uploadVideoPlaceholder}
            acceptedFileTypes="video/*"
          />

          <EditableAvatar
            initialFileUrl=""
            onFileChange={setThumbnailFile}
            size={150}
            label="Class Thumbnail"
            placeholder={uploadImagePlaceholder}
            acceptedFileTypes="image/*"
          />
        </div>

        <label className="form-control">
          <span className="label-text">Description</span>
          <textarea className="textarea textarea-bordered h-24" placeholder="Description"
            {...register("description", { required: true })}
          />
        </label>
      </div>

      <div className="text-center mb-3">
        <button
          type="submit"
          className="btn btn-primary w-1/2 text-white"
          disabled={isUploading}
        >
          {isUploading ? `Uploading... ${uploadProgress.toFixed(0)}%` : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default AddClass;