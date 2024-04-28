import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useUpload = (files) => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

/*   useEffect(() => {
    const formData = new FormData;
    formData.append('file', files[0]);
    formData.append('upload_preset', files[0]);


    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    try {
      setLoading(true);
      const upload = async () => {

        const response = await axios.post(api, formData);
        const data = response.data;
        const { secure_url } = data;
        console.log(data);
        setImage(secure_url);
        return secure_url;
      }
      upload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [files]); */

  return [image, loading];
};

export default useUpload;