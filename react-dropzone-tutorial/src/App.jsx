/* eslint-disable no-unused-vars */
import { useState , useCallback} from "react"
import { useDropzone } from "react-dropzone"

function HomePage() {

  const [file, setFile] = useState()
  const onDrop = useCallback((acceptedFiles) => {
    //Do something with the files
  },[])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file',file) 
    formData.append('upload_preset','qtma3ztw') 
    formData.append('api_key','819999437381425')

    const res = await fetch('https://api.cloudinary.com/v1_1/dplj7accg/image/upload',{
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default HomePage