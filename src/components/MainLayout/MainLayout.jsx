import "./MainLayout.css";
import notificationImg from "../../assets/side-notification.svg";
import profileimg from "../../assets/image 1.jpg";
import excelLogo from "../../assets/excel-logo.svg";
import uploadiconimage from "../../assets/upload-icon-image.svg"
import UploadedFile from "../UploadedFile/UploadedFile";
import Papa from "papaparse";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function MainLayout() {
    const allowedExtensions = ["csv"];
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [showUploadedFile, setShowUploadedFile] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false)
    const handleFileChange = (e) => {
        setError("");

        if (e.target.files.length) {
            const inputFile = e.target.files[0];
            const fileExtension =
                inputFile?.type.split("/")[1];
            if (
                !allowedExtensions.includes(fileExtension)
            ) {
                setError("Please input a csv file");
                return;
            }
            setFile(inputFile);
            setFileName(inputFile.name);
        }
    };
    const handleParse = () => {
      if (!file) {
        setError("Please select a valid file!!!");
        return;
    }
        setLoading(true);
        const reader = new FileReader();
        reader.onload = async ({ target }) => {
          try {
            const csv = Papa.parse(target.result, {
              header: true,
            });
      
            if (csv.errors.length > 0) {
              console.error("Error parsing CSV:", csv.errors);
              return;
            }  
            const parsedData = csv?.data;
            console.log("Parsed Data:", parsedData);
            setData(parsedData);
          } catch (error) {
            console.error("Error parsing CSV:", error);
          } finally {
            setTimeout(() => {
                setLoading(false);
                setIsUploaded(true)
                setShowUploadedFile(true)
              }, 1000);
          }
        };
      
        reader.readAsText(file);
      };
      
      
    const handleBrowseClick = () => {
        document.getElementById("csvInput").click();
      };
    
     const removeHandler = () => {
        setFile("");
        setFileName("");
        setIsUploaded(false)
     } 
  return (
    <div className="main-layout-container">
      <div className="top-heading">
        
        <div className="heading-text">Upload CSV</div>
        <input
          onChange={handleFileChange}
          id="csvInput"
          name="file"
          type="file"
          style={{ display: 'none' }}
        />
        <div className="side-heading">
          <div className="notification-icon">
            <img src={notificationImg} className="notification-image" alt="Notification" />
          </div>
          <div className="profile-picture">
            <img src={profileimg} className="profile-image" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="file-upload-main-container">
        <div className="file-upload-container">
            <div className="file-upload-inside">
            <div className="file-upload-main">
                <img src={excelLogo} className="excel-logo-img" alt="Excel Logo" />
                <h4 className="file-upload-main-text">
                {fileName ? fileName : 'Drop your excel sheet here or '}<span className="browse-text" onClick={handleBrowseClick}>{fileName ? "": "browser"}</span>
                <div><span className="remove-text" onClick={removeHandler}>{fileName ? "Remove" : ""}</span></div>
                </h4>
            </div>
            </div>
            <div className="upload-button-container">
            {error && <p className="error-message">{error}</p>}
            <button className={isUploaded ? "uploaded-button":"upload-button"} onClick={handleParse}><span>{!loading ? <img src={uploadiconimage} className="upload-icon-image" />: ""}</span>{loading ? <LoadingSpinner/> : "Upload"}</button>
            </div>
        </div>
      </div>
        {showUploadedFile && data.length > 0 ? <UploadedFile error={error} data={data}/> : ""}
    </div>
  );
}
