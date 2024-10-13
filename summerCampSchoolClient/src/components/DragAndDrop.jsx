import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast"

const DragAndDrop = () => {

  /* 
  todo:
  amake make sure korte hobe je ami jodi register er moddhe image upload dae tahole jeno register er moddhe image ta jae, jodi ami add class er moddhe class_thubnail or video upload dae tahole jeno video ta pae.

  2. secondly amake make sure korte hobe jeno ami submit button a click korle amer file ta upload hoie cloudinary er moddhe then ami jeno baki user er data gula ke submit kori.

  3. data gula ke jeno ami sob file er moddhe access korte per e. tae amake data ta ke context api er moddhe nite hobe.

  4. then amamke make sure korte hobe jeno ami je type er data send kortaci oi data ta ke pae.
  */
  const [file, setFile] = useState(null);
  // console.log("🚀 ~ App ~ file:", file);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle');
  const [res, setRes] = useState(null);
  const fileRef = useRef(null);
  const allowedFileSize = 1000 * 1024;

  // from cloudinary
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const presetKey = import.meta.env.VITE_CLOUDINARY_PRESET_KEY;


  const handleFileChange = ({ e, dropped = false }) => {
    const tempFile = dropped === true ? e : e?.target?.files[0];
    // checking if the file doesn't exist or multiple files has been selected then return error prompt
    if (!dropped && (!e.target.files || !e.target.files.length > 0)) {
      return toast.error('Please select a single file')
    }

    // forcing use to select files less then 400kb
    // * this is currently turned off because it's not required and videos need to be uploaded
    // if (tempFile?.size > allowedFileSize) {
    //   fileRef.current.value = ''
    //   return toast.error('Please upload file less than 400kb')
    // }

    try {
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
          // // console.log("🚀 ~ handleFileChange ~ progressEvent:", progressEvent);

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
        toast.error('something went wrong');
      })
    } catch (error) {
      console.log(error);
      fileRef.current.value = '';
      setProgress(0);
      setStatus('failed');
      toast.error('something went wrong');
    }
  }

  const handleDrop = (e) => {
    e.preventDefault();
    // console.log(e);
    const droppedFile = e?.dataTransfer?.files[0];
    setFile(droppedFile)
    handleFileChange({ e: droppedFile, dropped: true })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    // h-screen justify-center items-center mx-auto
    <div className="flex flex-col">
      {/* progress bar */}
      {
        status !== 'done' && status !== 'idle' &&
        <span className="progress_bar bg-gray-300 w-[250px] h-3 rounded-md mb-4 relative">
          {/* dynamic progress bar */}
          <span className="filled_progress bg-indigo-500 w-20 absolute left-0 top-0 h-3 rounded-md" style={{ width: `${progress}%` }}></span>
          <p className="absolute top-0 right-0 -translate-y-5 text-xs">{progress}%</p>
        </span>
      }
      {
        status !== 'done' &&
        <>
          <input ref={fileRef} id="file_upload_btn" type="file" onChange={(e) => handleFileChange({ e })} hidden />
          <label htmlFor="file_upload_btn" onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className="w-[250px] flex flex-col items-center justify-center border-2 border-dotted rounded-md gap-2 p-4 border-indigo-500">
              <svg className="w-5 h-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6366f1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              <p className="text-indigo-600">upload</p>
            </div>
          </label>
        </>
      }
      {
        status === 'done' && <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 mb-8" onClick={() => {
          setProgress(0);
          setStatus('idle');
          toast.success('Please select a file to upload again');
        }}>🔄️ upload again</button>
      }
      {
        status === 'done' && <div>
          <p className="text-gray-400 text-xl">you can access the file from here ⤵️</p>
          <a href={`${res?.secure_url}`} target="_blank" className="text-blue-400 visited:text-purple-600 text-lg">{res?.secure_url}</a>
        </div>
      }
    </div>
  )
};

export default DragAndDrop;