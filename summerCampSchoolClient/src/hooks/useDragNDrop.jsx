import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast"

const useDragNDrop = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle');
  const [res, setRes] = useState(null);
  const fileRef = useRef(null);
  const allowedFileSize = 1000 * 1024;

  // from cloudinary
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const presetKey = import.meta.env.VITE_CLOUDINARY_PRESET_KEY;


  const handleFileChange = ({ e, dropped = false }) => {
    console.log('file type', e);
    const fileType = e?.target?.files[0]?.type || e?.type;

    console.log("🚀 ~ handleFileChange ~ fileType:", fileType);

    const tempFile = dropped === true ? e : e?.target?.files[0];
    // checking if the file doesn't exist or multiple files has been selected then return error prompt
    if (!dropped && (!e.target.files || !e.target.files.length > 0)) {
      return toast.error('Please select a single file')
    }

    // forcing use to select files less then 400kb
    /*     if (tempFile?.size > allowedFileSize) {
          fileRef.current.value = ''
          return toast.error('Please upload file less than 400kb')
        } */

    /* try {
      setStatus('uploading');

      setFile(tempFile);
      const formData = new FormData();
      formData.append('file', tempFile);
      formData.append('upload_preset', presetKey);
      formData.append('cloud_name', cloudName);

      axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          // console.log("🚀 ~ handleFileChange ~ progressEvent:", progressEvent);

          // ! how does this works i have to learn it.
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);

          setProgress(percentage);
        }
      }).then(res => {
        setStatus('done');
        setRes(res?.data);
        // console.log({ res });
        toast.success('file uploaded successfully');
        fileRef.current.value = '';
      }).catch(err => {
        fileRef.current.value = '';
        setProgress(0);
        setStatus('failed');
        console.log(err);
        toast.error('something went wrong while doing post request');
      })
    } catch (error) {
      console.log(error);
      fileRef.current.value = '';
      setProgress(0);
      setStatus('failed');
      toast.error('something went wrong in the try block');
    } */
  }

  const handleDrop = (e) => {
    e.preventDefault();
    // console.log(e);
    const droppedFile = e?.dataTransfer?.files[0];
    setFile(droppedFile);
    handleFileChange({ e: droppedFile, dropped: true })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }
  return { file, progress, setProgress, status, setStatus, res, fileRef, handleFileChange, handleDrop, handleDragOver };
};

export default useDragNDrop;