import React, { useState } from "react";
import axios from "axios";


import "../../scssWeb/main.css";
import Header from "./header";
import AjustesGSvg from "../../assets/img/settings_G.svg";
import avatar from "../../assets/img/personatipo.png";

export default function Settings(props) {
  const [formData, setFormData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleNameInputChange = (event) => {
    setFormData.name(event.target.value);
  };

  const handleTelefoneInputChange = (event) => {
    setFormData.telefone(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setFormData.email(event.target.value);
  };

  const { ROL, FUNCION } = props;

  const handleUploadPerfil = () => {
    const formData = new FormData();
    formData.append("name", formData.name);
    formData.append("telefone", formData.telefone);
    formData.append("email", formData.email);
    axios
      .post(`https://example.com/${ROL}/${FUNCION}`, formData, {
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
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
        setUploadStatus("Upload failed");
      });
  };

  return (
    <div>
      <Header />
      <div className="barra">
        <img
          className="svg-img-barra"
          src={AjustesGSvg}
          alt="nabvar de ajustes"
        />
        <h2>AJUSTES</h2>
      </div>
      <div className="container-body-all container-settings_body container-body-all-position">
        {!isEditing ? (
          <div className="container-settings_body-profile">
            <div>
              <img src={avatar} alt="profile" />
            </div>
            <div>
              <ul>
                <li>
                  <p>NOMBRE: {formData.name}</p>
                </li>
                <li>
                  <p>TELEFONO: {formData.telefone}</p>
                </li>
                <li>
                  <p>EMAIL: {formData.email}</p>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="body-button-all"
                onClick={() => setIsEditing(true)}>
                <p>Editar</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="container-settings_body-edit">
            <div>
              <label>
                <p>NOMBRE:</p>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleNameInputChange}
              />
            </div>
            <div>
              <label>
                <p>TELEFONO:</p>
              </label>
              <input
                type="text"
                value={formData.telefone}
                onChange={handleTelefoneInputChange}
              />
            </div>
            <div>
              <label>
                <p>EMAIL:</p>
              </label>
              <input
                type="text"
                value={formData.email}
                onChange={handleEmailInputChange}
              />
            </div>
            <div className="body-button-edit-all">
              <button onClick={handleUploadPerfil}>
                <p>Save</p>
              </button>
              <button onClick={() => setIsEditing(false)}>
                <p>Cancel</p>
              </button>
              <p>{uploadStatus}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
