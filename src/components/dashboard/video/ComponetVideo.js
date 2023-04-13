import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import NavbarVideo from "./NavbarVideo.js";
import RecursosSvg from "../../../assets/img/MiniRecursos.svg";
import Header from "../../../components/common/header.js";
import "../../../scssWeb/main.css";

const ComponetVideo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [video, setVideo] = useState(props.video);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    setVideo(props.video);
    setName(props.name);
    setDescription(props.description);
  }, [props.video, props.name, props.description]);

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setVideo(props.video);
    setName(props.name);
    setDescription(props.description);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("video", video);
    formData.append("name", name);
    formData.append("description", description);
    axios
      .put(`/videos/${props.id}`, formData)
      .then((response) => {
        setIsEditing(false);
        setVideo(response.data.video);
        setName(response.data.name);
        setDescription(response.data.description);
        setUploadStatus("Upload successful");
      })
      .catch((error) => {
        console.log(error);
        setUploadStatus("Upload failed");
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/videos/${props.id}`)
      .then(() => {
        props.onDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-responsive">
      <Header />
      <NavbarComp />
      <div className="barra barra-navbar-video">
        <img className="svg-img-barra" src={RecursosSvg} />
        <NavbarVideo />
      </div>
      <div className="container-body-all">
        {isEditing ? (
          <div className="container-componentvideo_body">
            <input type="file" name="video" onChange={handleVideoChange} />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <div className="body-button-edit-all">
              <button onClick={handleSave}>Guardar</button>
              <button onClick={handleCancelEdit}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div className="container-component-video-info">
            <video src={video} controls />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="body-button-edit">
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        )}
        <p>{uploadStatus}</p>
      </div>
    </div>
  );
};

export default ComponetVideo;