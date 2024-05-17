import { useState } from 'react';
import { Link } from 'react-router-dom';
function UploadFiles() {
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);

  const handleFileChange = (event, index) => {
    const files = event.target.files;
    const updatedFiles = [...selectedFiles];
    updatedFiles[index] = files[0];
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your file upload logic here, such as sending the files to a server
    console.log('Selected files:', selectedFiles);
    // Reset the selected files after submission
    setSelectedFiles([null, null, null]);
  };

  return (
    <>
    <h1>Upload Documents</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fileInput1">Upload Identity Card:-</label>
        <input style={{marginLeft:'10px'}} type="file" id="fileInput1" onChange={(e) => handleFileChange(e, 0)} />
      </div>
      <div style={{marginTop:'10px'}}>
        <label htmlFor="fileInput2">Upload Marksheets:-</label>
        <input style={{marginLeft:'10px'}} type="file" id="fileInput2" onChange={(e) => handleFileChange(e, 1)} />
      </div>
      <div style={{marginTop:'10px'}}>
        <label htmlFor="fileInput3">Upload Experience Letter</label>
        <input style={{marginLeft:'10px'}} type="file" id="fileInput3" onChange={(e) => handleFileChange(e, 2)} />
      </div>
      <Link to='/info'>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  type="button" style={{marginTop:'20PX',height:'30px',width:'310px',borderRadius:'5px',backgroundColor:'darkblue',color:'white',border:'5px'}}>
        Submit
      </button>
      </Link>
    </form>
    </>
  );
}

export default UploadFiles;
