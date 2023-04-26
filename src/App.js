import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/landing2/LandingDlatam";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import Error404 from "./components/common/Error404";
/*  admin  */
import Inicio from "./components/dashboardadmin/Inicio";
import Ajustes from "./components/common/Ajustes";

import VideoUploader from "./components/dashboardadmin/video/VideoUploader";
import ListVideo from "./components/dashboardadmin/video/ListVideo";

import Statistics from "./components/dashboardadmin/statistics/Statistics";

import ListMessages from "./components/dashboardadmin/message/ListMessages";
import Message from "./components/dashboardadmin/message/Message";
import TrashMessage from "./components/dashboardadmin/message/TrashMessage";

import DocumentUploader from "./components/dashboardadmin/document/DocumentUploader";
import ListDocument from "./components/dashboardadmin/document/ListDocument";

/*  User */
import InicioUser from "./components/user/dashboard/InicioUser";
import ListMessageUser from "./components/user/dashboard/message/ListMessageUser";
import TrashMessageMessageUser from "./components/user/dashboard/message/TrasMessageUser";
import VideoListUser from "./components/user/dashboard/video/VideoListUser";

import "./scssWeb/main.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {<Route path="*" element={<Error404 />} />}

      <Route exact path="/Inicio" element={<Inicio />} />

      <Route path="/ListMessages" element={<ListMessages />} />
      <Route path="/TrashMessage" element={<TrashMessage />} />
      <Route path="/ListDocument" element={<ListDocument />} />
      <Route path="/DocumentUploader" element={<DocumentUploader />} />
      <Route path="/Message" element={<Message />} />

      <Route path="/ajustes" element={<Ajustes />} />
      <Route path="/VideoUploader" element={<VideoUploader />} />
      <Route path="/ListVideo" element={<ListVideo />} />
      <Route path="/Statistics" element={<Statistics />} />

      <Route path="/ListMessageUser" element={<ListMessageUser />} />
      <Route path="/TrashMessageUser" element={<TrashMessageMessageUser />} />
      <Route path="/InicioUser" element={<InicioUser />} />
      <Route path="/VideoListUser" element={<VideoListUser />} />
    </Routes>
  );
}

export default App;
