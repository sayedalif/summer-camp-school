// // import { useForm } from "react-hook-form";
// // import DragAndDrop from "../../components/DragAndDrop";

// // const AddClass = () => {

// //   const { register, handleSubmit, watch, formState: { errors } } = useForm();
// //   const onSubmit = data => {
// //     console.log(data);
// //   };

// //   console.log(watch("className")); // watch input value by passing the name of it

// //   return (
// // react-hook-form
// //     <form onSubmit={handleSubmit(onSubmit)}>

// //       {/* grid grid-rows-7 grid-cols-2 gap-5 */}
// //       <div className="mb-4 mx-3">

// //         {/* class Name */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Class name</span>
// //           </div>
// //           <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("className", { required: true })}
// //           />
// //         </label>
// //         {/* category */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Photography category</span>
// //           </div>
// //           <input type="text" placeholder="Category" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("category", { required: true })}
// //           />
// //         </label>
// //         {/* price */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Price(USD)</span>
// //           </div>
// //           <input type="text" placeholder="USD" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("price", { required: true })}
// //           />
// //         </label>
// //         {/* available seats */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Available seats</span>
// //           </div>
// //           <input type="text" placeholder="Seats" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("available_seats", { required: true })}
// //           />
// //         </label>
// //         {/* video length */}
// //         <label className="form-control col-span-2">
// //           <div className="label">
// //             <span className="label-text">Video length(IN HOURS)</span>
// //           </div>
// //           <input type="text" placeholder="hours" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("video_length", { required: true })}
// //           />
// //         </label>


// //         <div className="lg:flex md:flex md:flex-row lg:justify-evenly md:justify-between sm:flex sm:flex-col sm:justify-center">
// //           {/* upload video */}
// //           <label className="form-control col-span-2">
// //             <div className="label">
// //               <span className="label-text">Upload video</span>
// //             </div>
// //             {/* upload to cloudinary using EditableAvatar */}

// //           </label>

// //           {/* upload class thumbnail */}
// //           <label className="form-control col-span-2">
// //             <div className="label">
// //               <span className="label-text">Class thumbnail</span>
// //             </div>
// //             {/* upload to cloudinary using EditableAvatar */}

// //           </label>
// //         </div>

// //         {/* description */}
// //         <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
// //           <div className="label">
// //             <span className="label-text">Description</span>
// //           </div>
// //           <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Description" {...register("description", { required: true })} />
// //         </label>

// //       </div>

// //       <div className="text-center mb-3">
// //         <input className="btn btn-primary w-1/2 text-white" type="submit" />
// //       </div>
// //     </form>
// //   );
// // };

// // export default AddClass;

// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import EditableAvatar from "../../components/EditableAvatar";
// // import uploadImagePlaceholder from '../../assets/images/png/picture.png';
// // import uploadVideoPlaceholder from '../../assets/images/png/video-chat.png';

// // const AddClass = () => {
// //   const { register, handleSubmit, watch, formState: { errors } } = useForm();
// //   const [videoFile, setVideoFile] = useState(null);
// //   const [thumbnailFile, setThumbnailFile] = useState(null);

// //   const onSubmit = async (data) => {
// //     // Here you would typically upload the files to Cloudinary
// //     // and get back the URLs to store in your database
// //     console.log("Form data:", data);
// //     console.log("Video file:", videoFile);
// //     console.log("Thumbnail file:", thumbnailFile);

// //     // Example of how you might upload to Cloudinary (pseudo-code)
// //     // const videoUrl = await uploadToCloudinary(videoFile);
// //     // const thumbnailUrl = await uploadToCloudinary(thumbnailFile);

// //     // Then you would submit all data including the URLs to your backend
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       {/* grid grid-rows-7 grid-cols-2 gap-5 */}
// //       <div className="mb-4 mx-3">

// //         {/* class Name */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Class name</span>
// //           </div>
// //           <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("className", { required: true })}
// //           />
// //         </label>
// //         {/* category */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Photography category</span>
// //           </div>
// //           <input type="text" placeholder="Category" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("category", { required: true })}
// //           />
// //         </label>
// //         {/* price */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Price(USD)</span>
// //           </div>
// //           <input type="text" placeholder="USD" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("price", { required: true })}
// //           />
// //         </label>
// //         {/* available seats */}
// //         <label className="form-control">
// //           <div className="label">
// //             <span className="label-text">Available seats</span>
// //           </div>
// //           <input type="text" placeholder="Seats" className="input md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("available_seats", { required: true })}
// //           />
// //         </label>
// //         {/* video length */}
// //         <label className="form-control col-span-2">
// //           <div className="label">
// //             <span className="label-text">Video length(IN HOURS)</span>
// //           </div>
// //           <input type="text" placeholder="hours" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered"
// //             {...register("video_length", { required: true })}
// //           />
// //         </label>


// //         <div className="lg:flex md:flex md:flex-row lg:justify-evenly md:justify-between sm:flex sm:flex-col sm:justify-center">
// //           {/* upload video */}
// //           <EditableAvatar
// //             initialImageUrl=""
// //             onImageChange={setVideoFile}
// //             size={150}
// //             label="Upload Video"
// //             // placeholder="../../assets/images/png/video-chat.png"
// //             placeholder={uploadVideoPlaceholder}
// //           />

// //           {/* icon attribute */}
// //           {
// //             /* 
// //             <a href="https://www.flaticon.com/free-icons/video-camera" title="video camera icons">Video camera icons created by Freepik - Flaticon</a>
// //              */
// //           }

// //           {/* upload class thumbnail */}
// //           <EditableAvatar
// //             initialImageUrl=""
// //             onImageChange={setThumbnailFile}
// //             size={150}
// //             label="Class Thumbnail"
// //             // placeholder="../../assets/images/png/picture.png"
// //             placeholder={uploadImagePlaceholder}
// //           />
// //           {/* icon attribute */}
// //           {
// //             /*
// //             <a href="https://www.flaticon.com/free-icons/image-comics" title="Image Comics icons">Image Comics icons created by Pop Vectors - Flaticon</a>
// //             */
// //           }
// //         </div>

// //         {/* description */}
// //         <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
// //           <div className="label">
// //             <span className="label-text">Description</span>
// //           </div>
// //           <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Description" {...register("description", { required: true })} />
// //         </label>

// //       </div>


// //       <div className="text-center mb-3">
// //         <input className="btn btn-primary w-1/2 text-white" type="submit" />
// //       </div>
// //     </form >
// //   );
// // };

// // export default AddClass;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import EditableAvatar from "../../components/EditableAvatar";
// import uploadImagePlaceholder from '../../assets/images/png/picture.png';
// import uploadVideoPlaceholder from '../../assets/images/png/video-chat.png';
// import axios from 'axios';
// import useAxiosSecure from "../../hooks/UseAxiosSecure";
// import useUserInfo from "../../hooks/useUserInfo";

// const AddClass = ({ eachClass }) => {
//   console.log("🚀 ~ AddClass ~ eachClass:", eachClass);

//   const isEachClassAvailable = !!eachClass;
//   console.log("🚀 ~ AddClass ~ isEachClassAvailable:", isEachClassAvailable);


//   const [axiosSecure] = useAxiosSecure();

//   const { data: userInfo, error, isLoading, refetch, reset } = useUserInfo();
//   // console.log("🚀 ~ AddClass ~ userInfo:", userInfo);

//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [videoFile, setVideoFile] = useState(null);
//   const [thumbnailFile, setThumbnailFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);

//   const uploadToCloudinary = async (file, resourceType) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET_KEY}`);

//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
//         formData,
//         {
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(progress);
//           },
//         }
//       );
//       return response.data.secure_url;
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       throw error;
//     }

//   };

//   const onSubmit = async (data) => {
//     console.log("🚀 ~ onSubmit ~ data:", data);

//     const { available_seats, category, className, description, price, video_length } = data;

//     setIsUploading(true);
//     setUploadProgress(0);

//     try {
//       // Upload thumbnail
//       const class_thumbnail = await uploadToCloudinary(thumbnailFile, 'image');
//       setUploadProgress(33);

//       // Upload video
//       const videoUrl = await uploadToCloudinary(videoFile, 'video');
//       setUploadProgress(66);

//       // Prepare data for database
//       const classData = {
//         available_seats: Number(available_seats),
//         category,
//         className,
//         description,
//         price: Number(price),
//         video_length,
//         instructor_name: `${userInfo?.name}`,
//         instructor_id: `${userInfo._id}`,
//         status: 'pending',
//         students_enrolled: 0,
//         rating: null,
//         class_thumbnail,
//         videoUrl,
//       };

//       console.log("🚀 ~ onSubmit ~ classData:", classData);
//       // Send data to your backend
//       const response = await axiosSecure.post('/classes', classData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           setUploadProgress(66 + (progress / 3)); // Scale to remaining 33%
//         },
//       });

//       setUploadProgress(100);
//       console.log('Class added successfully:', response.data);

//       if (response.data.insertedId && response.data.acknowledged === true) {
//         reset();
//       }
//     } catch (error) {
//       console.error('Error adding class:', error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-4 mx-3 space-y-4">
//         <label className="form-control">
//           <span className="label-text">Class name</span>
//           <input type="text" placeholder="Class name" className="input input-bordered"
//             {...register("className", { required: true })}
//             defaultValue={eachClass?.className}
//           />
//         </label>

//         <label className="form-control">
//           <span className="label-text">Photography category</span>
//           <input type="text" placeholder="Category" className="input input-bordered"
//             {...register("category", { required: true })}
//             defaultValue={eachClass?.category}
//           />
//         </label>

//         <label className="form-control">
//           <span className="label-text">Price (USD)</span>
//           <input type="number" placeholder="USD" className="input input-bordered"
//             {...register("price", { required: true, min: 0 })}
//             defaultValue={eachClass?.price}
//           />
//         </label>

//         <label className="form-control">
//           <span className="label-text">Available seats</span>
//           <input type="number" placeholder="Seats" className="input input-bordered"
//             {...register("available_seats", { required: true, min: 1 })}
//             defaultValue={eachClass?.available_seats}
//           />
//         </label>

//         <label className="form-control">
//           <span className="label-text">Video length (include hours or minutes)</span>
//           <input type="text" placeholder="Hours" className="input input-bordered"
//             {...register("video_length", { required: true, min: 0 })}
//             // value={eachClass?.video_length}
//             defaultValue={eachClass?.video_length}
//           />
//         </label>

//         <div className="flex justify-between">
//           <EditableAvatar
//             initialFileUrl=""
//             onFileChange={setVideoFile}
//             size={150}
//             label="Upload Video"
//             placeholder={uploadVideoPlaceholder}
//             acceptedFileTypes="video/*"
//           />

//           <EditableAvatar
//             initialFileUrl=""
//             onFileChange={setThumbnailFile}
//             size={150}
//             label="Class Thumbnail"
//             placeholder={uploadImagePlaceholder}
//             acceptedFileTypes="image/*"
//           />
//         </div>

//         <label className="form-control">
//           <span className="label-text">Description</span>
//           <textarea className="textarea textarea-bordered h-24" placeholder="Description"
//             {...register("description", { required: true })}
//             defaultValue={eachClass?.description}
//           />
//         </label>
//       </div>

//       <div className="text-center mb-3">
//         <button
//           type="submit"
//           className="btn btn-primary w-1/2 text-white"
//           disabled={isUploading}
//         >
//           {isUploading ? `Uploading... ${uploadProgress.toFixed(0)}%` : 'Submit'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddClass;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import EditableAvatar from "../../components/EditableAvatar";
import EditableAvatar from "./EditableAvatar";
// import uploadImagePlaceholder from '../../assets/images/png/picture.png';
import uploadImagePlaceholder from '../assets/images/png/picture.png';
import uploadVideoPlaceholder from '../assets/images/png/video-chat.png';
import axios from 'axios';
import useAxiosSecure from "../hooks/UseAxiosSecure";
import useUserInfo from "../hooks/useUserInfo";

const AddAndUpdateClass = ({ eachClass }) => {
console.log("🚀 ~ AddAndUpdateClass ~ eachClass:", eachClass);

  const [axiosSecure] = useAxiosSecure();
  const { data: userInfo } = useUserInfo();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(eachClass?.videoUrl || "");
  const [previewThumbnail, setPreviewThumbnail] = useState(eachClass?.class_thumbnail || "");

  const isUpdating = !!eachClass;

  useEffect(() => {
    if (isUpdating) {
      reset(eachClass);
    }
  }, [eachClass, reset]);

  const uploadToCloudinary = async (file, resourceType) => {
    if (!file) return null;

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

  const extractPublicId = (url) => {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    const publicId = lastPart.split('.')[0];
    return publicId;
  };

  const deleteFromCloudinary = async (url, resourceType) => {
    const publicId = extractPublicId(url);
    try {
      await axiosSecure.post('/delete-cloudinary-asset', { publicId, resourceType });
      console.log('Image successfully deleted from cloudinary');
    } catch (error) {
      console.error('Error deleting from Cloudinary:', error);
    }
  };

  const onSubmit = async (data) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      let class_thumbnail = eachClass?.class_thumbnail;
      let videoUrl = eachClass?.videoUrl;

      if (thumbnailFile) {
        if (isUpdating && eachClass.class_thumbnail) {
          await deleteFromCloudinary(eachClass.class_thumbnail, 'image');
        }
        class_thumbnail = await uploadToCloudinary(thumbnailFile, 'image');
      }
      setUploadProgress(33);

      if (videoFile) {
        if (isUpdating && eachClass.videoUrl) {
          await deleteFromCloudinary(eachClass.videoUrl, 'video');
        }
        videoUrl = await uploadToCloudinary(videoFile, 'video');
      }
      setUploadProgress(66);

      /* 
      available_seats, category, className, description, price, video_length 
      */
      const classData = {
        ...data,
        available_seats: Number(data.available_seats),
        price: Number(data.price),
        instructor_name: userInfo?.name,
        instructor_id: userInfo?._id,
        status: isUpdating ? eachClass.status : 'pending',
        students_enrolled: isUpdating ? eachClass.students_enrolled : 0,
        rating: isUpdating ? eachClass.rating : null,
        class_thumbnail,
        videoUrl,
      };

      let response;
      if (isUpdating) {
        response = await axiosSecure.patch(`/classes/${eachClass._id}`, classData);
      } else {
        response = await axiosSecure.post('/classes', classData);
      }

      setUploadProgress(100);
      console.log(isUpdating ? 'Class updated successfully:' : 'Class added successfully:', response.data);

      if (response.data.modifiedCount > 0 || response.data.insertedId) {
        reset();
        setPreviewVideo("");
        setPreviewThumbnail("");
      }
    } catch (error) {
      console.error(isUpdating ? 'Error updating class:' : 'Error adding class:', error);
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
            defaultValue={eachClass?.category}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Price (USD)</span>
          <input type="number" placeholder="USD" className="input input-bordered"
            {...register("price", { required: true, min: 0 })}
            defaultValue={eachClass?.price}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Available seats</span>
          <input type="number" placeholder="Seats" className="input input-bordered"
            {...register("available_seats", { required: true, min: 1 })}
            defaultValue={eachClass?.available_seats}
          />
        </label>

        <label className="form-control">
          <span className="label-text">Video length (include hours or minutes)</span>
          <input type="text" placeholder="Hours" className="input input-bordered"
            {...register("video_length", { required: true, min: 0 })}
            // value={eachClass?.video_length}
            defaultValue={eachClass?.video_length}
          />
        </label>

        <div className="flex justify-between">
          <div>
            {previewVideo && (
              <video width="150" height="150" controls className="mb-2">
                <source src={previewVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <EditableAvatar
              initialFileUrl={previewVideo}
              onFileChange={(file) => {
                setVideoFile(file);
                setPreviewVideo(URL.createObjectURL(file));
              }}
              size={150}
              label={isUpdating ? "Reupload Video" : "Upload Video"}
              placeholder={uploadVideoPlaceholder}
              acceptedFileTypes="video/*"
            />
          </div>

          <div>
            {previewThumbnail && (
              <img src={previewThumbnail} alt="Class Thumbnail" width="150" height="150" className="mb-2" />
            )}
            <EditableAvatar
              initialFileUrl={previewThumbnail}
              onFileChange={(file) => {
                setThumbnailFile(file);
                setPreviewThumbnail(URL.createObjectURL(file));
              }}
              size={150}
              label={isUpdating ? "Reupload Thumbnail" : "Upload Thumbnail"}
              placeholder={uploadImagePlaceholder}
              acceptedFileTypes="image/*"
            />
          </div>
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
          {isUploading ? `Uploading... ${uploadProgress.toFixed(0)}%` : (isUpdating ? 'Update Class' : 'Add Class')}
        </button>
      </div>
    </form>
  );
};

export default AddAndUpdateClass;