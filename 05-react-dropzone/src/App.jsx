import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function App() {
  // const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    //do somothing with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "aqzbtfbu");
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
        <input type="text" />
        <div
          style={{
            background: "#e3e3e3",
            padding: "15px",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag n drop some files , or click to select files</p>
          )}
        </div>

        {acceptedFiles[0] && (
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            alt=""
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        )}
        {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
