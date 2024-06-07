/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function HomePage() {
  // const [file, setFile] = useState()
  const onDrop = useCallback((acceptedFiles) => {
    //Do something with the files
    console.log(acceptedFiles[0])
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "qtma3ztw");
    formData.append("api_key", "819999437381425");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dplj7accg/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      
        <div {...getRootProps()} style={{  padding: '20px'}}>
          <input {...getInputProps} />
          {isDragActive ? (
            <p>Drop the files here</p>
          ) : (
            <p>Drag n drop some files here, or click to select files</p>
          )}
        </div>

          {
            acceptedFiles[0] && (
              <img src={URL.createObjectURL(acceptedFiles[0])} alt="" width='300' height='300'/>
            )
          }

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default HomePage;
