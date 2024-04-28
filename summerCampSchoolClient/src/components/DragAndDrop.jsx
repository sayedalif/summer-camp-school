import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DragAndDrop = () => {
  // dropped images state
  const [droppedImages, setDroppedImages] = useState([]);
  // react-dropzone
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    // setting the drop image to use state function
    setDroppedImages(acceptedFiles);
    return acceptedFiles;
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,// Accepts all image MIME types
  });


  return (
    <div>
      {/* image drag and drop */}

      {droppedImages.length === 0 ?
        <div className='border-2 border-dashed border-[#A3A3F5] py-10 text-center h-full flex justify-center items-center rounded-md mt-2' {...getRootProps()}>
          <input type="file" name="img" accept="image/*" {...getInputProps()} />
          {isDragActive ?
            <p>Drop the files here ...</p> :
            <button className='btn btn-primary'>Drop your photo here, or click to select it</button>
          }
        </div>
        :
        ''
      }



      {/* Display dropped images */}
      {droppedImages.length > 0 && (
        <div>
          <h2>Profile image:</h2>
          <ul>
            {
              droppedImages.map((file, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(file)} alt={`Dropped Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
                </div>

              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;