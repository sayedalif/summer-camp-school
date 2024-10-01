import React, { useState, useRef } from 'react';
// import { Camera } from 'lucide-react';
import { FaCamera } from "react-icons/fa";


const DefaultAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="64" fill="#e0e0e0" />
    <circle cx="62" cy="40" r="24" fill="#bdbdbd" />
    <path d="M64 69c-24 0-40 16-40 36h80c0-20-16-36-40-36z" fill="#bdbdbd" />
  </svg>
);

const EditableAvatar = ({ initialImageUrl, onImageChange }) => {

  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
        if (onImageChange) {
          onImageChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <DefaultAvatar />
        )}
        {
          isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button
                onClick={handleEditClick}
                className="text-white p-2 rounded-full bg-opacity-50 bg-gray-700 hover:bg-opacity-75 transition-colors"
              >
                <FaCamera size={24} />
              </button>
            </div>
          )
        }
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default EditableAvatar;