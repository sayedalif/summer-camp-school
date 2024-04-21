import axios from 'axios';
import { useState } from 'react';



// upload image to IMGBB
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  // url for fetching and uploading the image to IMGBB
  const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

  const response = await axios.post(url, formData);
  // fetch(url, { method: 'POST', body: formData })

  const data = await response.data;
  return data;
};

// fetch data
// this fetch data using react query
