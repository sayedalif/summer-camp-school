import axios from 'axios';

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

// this creates new badge color for every render
const badges = ['#FFC4DF', '#FDE781', '#c5c5fe'];
export function generateRandomColorString() {
  const index = Math.floor(Math.random() * badges.length);

  const randomString = `${badges[index]}`;
  return randomString;
}

export const year = new Date().getFullYear();

