import useDragNDrop from "../hooks/useDragNDrop";
import toast from "react-hot-toast";

const DragAndDrop = ({ text, fileType }) => {
  /* 
  // todo: 1. use a prop to change the text based on purpose
  
  todo: 2. use a prop to force user to select one image and video only to their respectable upload box

  3. make a functionality to show the images / videos to the upload box and when user hover on the upload box or images / videos it shows change images / videos. when user clicks on the upload box or images / videos user should be able to reupload.
  */
  const { file, progress, setProgress, status, setStatus, res, fileRef, handleFileChange, handleDrop, handleDragOver } = useDragNDrop();

  console.log(file);
  return (
    // flex flex-col h-screen justify-center items-center mx-auto
    <div className="my-3">

      <input ref={fileRef} id="file_upload_btn" type="file" onChange={(e) => handleFileChange({ e })} hidden />
      <label htmlFor="file_upload_btn" onDrop={handleDrop} onDragOver={handleDragOver}>
        <div className="xl:w-[250px] lg:w-[250px] md:w-[200px] sm:w-[150px] flex flex-col items-center justify-center border-2 border-dotted rounded-md gap-2 p-4 border-indigo-500">
          {
            file ?
              <img className="rounded w-[80px] h-auto object-cover" src={URL.createObjectURL(file)} alt='uploaded thumbnail' />
              :
              <svg className="w-5 h-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6366f1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
          }
          {file ? <p className="text-indigo-600">{file.name}</p> : <p className="text-indigo-600">{text}</p>}
        </div>
      </label>

      {/* {
        status === 'done' && <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 mb-8" onClick={() => {
          setProgress(0);
          setStatus('idle');
          toast.success('Please select a file to upload again');
        }}>🔄️ upload again</button>
      } */}
      {/* {status === 'done' && <div>
        <p className="text-gray-400 text-xl">you can access the file from here ⤵️</p>
        <a href={`${res?.secure_url}`} target="_blank" className="text-blue-400 visited:text-purple-600 text-lg">{res?.secure_url}</a>
      </div>} */}
    </div>
  )
};

export default DragAndDrop;