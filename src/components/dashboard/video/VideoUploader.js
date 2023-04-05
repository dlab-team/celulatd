import React, { useState } from "react";
import axios from "axios";
import NavbarComponent from "../NavbarComponent";
import "../../../scssWeb/main.css";
import Uploadbutton from "../../../assets/img/Uploadbutton.svg";

const VideoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("title", title);
    formData.append("description", description);
    axios
      .post("https://example.com/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadStatus(`Upload progress: ${percentCompleted}%`);
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploadStatus("Upload successful");
      })
      .catch((error) => {
        console.error(error);
        setUploadStatus("Upload failed");
      });
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container_videouploader">
        <label className="videouploader_title">
          <p>Title:</p>
        </label>
        <input
          className="videouploader_input"
          type="text"
          value={title}
          onChange={handleTitleInputChange}
        />
      </div>
      <div className="container_videouploader">
        <label className="videouploader_title">
          <p>Description:</p>
        </label>
        <input
          className="videouploader_input videouploader_input-height"
          type="text"
          value={description}
          onChange={handleDescriptionInputChange}
        />
      </div>
      <div className="imagen-uploader">
        <button onClick={handleUploadClick}>
          <img className="imagen-button"src={Uploadbutton} alt=""></img>
        </button>
        <input type="file" onChange={handleFileInputChange} />
      </div>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default VideoUploader;