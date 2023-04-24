import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing2/LandingDlatam";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import Error404 from "./components/common/Error404";
/*  admin  */
import Inicio from "./components/dashboard/Inicio";
import Ajustes from "./components/dashboard/Ajustes";

import VideoUploader from "./components/dashboard/video/VideoUploader";
import ListVideo from "./components/dashboard/video/ListVideo";

import Statistics from "./components/dashboard/statistics/Statistics";

import ListMessages from "./components/dashboard/message/ListMessages";
import Message from "./components/dashboard/message/Message";
import TrashMessage from "./components/dashboard/message/TrashMessage";

import DocumentUploader from "./components/dashboard/document/DocumentUploader";
import ListDocument from "./components/dashboard/document/ListDocument";
/*  User */

import SettingsUser from "./components/user/dashboard/SettingsUser";
import InicioUser from "./components/user/dashboard/Inicio";
import MessageUser from "./components/dashboard/message/Message";
import Perfil from "./components/dashboard/Perfil";
import ComponetVideoUser from "./components/user/dashboard/ComponetVideoUser";

import "./scssWeb/main.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />

      <Route exact path="/Inicio" element={<Inicio />} />

      <Route path="/ListMessages" element={<ListMessages />} />
      <Route path="/TrashMessage" element={<TrashMessage />} />
      <Route path="/ListDocument" element={<ListDocument />} />
      <Route path="/DocumentUploader" element={<DocumentUploader />} />
      <Route path="/Message" element={<Message />} />

      <Route path="/ajustes" element={<Ajustes />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/VideoUploader" element={<VideoUploader />} />
      <Route path="/ListVideo" element={<ListVideo />} />
      <Route path="/Statistics" element={<Statistics />} />

      <Route path="/ComponetVideoUser" element={<ComponetVideoUser />} />
      <Route path="/SettingsUser" element={<SettingsUser />} />
      <Route path="/InicioUser" element={<InicioUser />} />
      <Route path="/MessageUser" element={<MessageUser />} />
    </Routes>
  );
}

export default App;
