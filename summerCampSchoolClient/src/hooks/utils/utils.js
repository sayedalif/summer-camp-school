import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxiosPublic from '../useAxiosPublic';
import toast from 'react-hot-toast';

// todo: implement try catch and finally here so that the code can be cleaned up and more readable
// upload image to IMGBB
export const imageUpload = async (image) => {
  if (image === null) {
    return toast.error('Please select an image');
  }
  const formData = new FormData();
  formData.append('image', image);

  // url for fetching and uploading the image to IMGBB
  const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

  const response = await axios.post(url, formData);
  // fetch(url, { method: 'POST', body: formData })

  const data = await response.data;
  return data;
};

// this creates new badge color for every render
const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
export function generateRandomColorString() {
  const index = Math.floor(Math.random() * badges.length);

  const randomString = `${badges[index]}`;
  return randomString;
}

// full year for the footer
export const year = new Date().getFullYear();

// fetching for public data
export default function useFetch(url) {
  
  const [axiosPublic] = useAxiosPublic();


  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await axiosPublic.get(url)
          setData(response.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [url])

  return { data, error, loading }

}